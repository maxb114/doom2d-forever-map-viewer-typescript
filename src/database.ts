class Database {
  db: IDBDatabase
  constructor (db: IDBDatabase) {
    this.db = db
  }

  async #addItem (transaction: IDBTransaction, name: string, value: any, key: IDBValidKey): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(name)
      const request = objectStore.put(value, key)

      request.onsuccess = () => resolve(true)

      request.onerror = () => reject(Error('Transaction error!'))
    })
    const success = await promise
    return success
  }

  async #getItem (transaction: IDBTransaction, name: string, key: IDBValidKey): Promise<any> {
    const promise: Promise<any> = new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(name)
      const request = objectStore.get(key)

      request.onsuccess = () => resolve(request.result)

      request.onerror = () => reject(Error('Transaction error!'))
    })
    const result = await promise
    return result
  }

  async loadByPath (path: IDBValidKey): Promise<any> {
    const name = 'store'
    const transaction = this.db.transaction(name, 'readonly')
    const /** @type {Promise<any>} */ promise: Promise<any> = new Promise((resolve, reject) => {
      this.#getItem(transaction, name, path).then((value) => {
        resolve(value)
      }).catch((error) => reject(error))
    })
    const value = await promise
    return value
  }

  async saveByPath (value: any, path: IDBValidKey): Promise<boolean> {
    const name = 'store'
    const transaction = this.db.transaction(name, 'readwrite')
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      this.#addItem(transaction, name, value, path).then(() => resolve(true))
        .catch((error) => reject(error))
    })
    const success = await promise
    return success
  }

  async getAll (): Promise<IDBValidKey[]> {
    const promise: Promise<IDBValidKey[]> = new Promise((resolve, reject) => {
      const name = 'store'
      const transaction = this.db.transaction(name, 'readwrite')
      const objectStore = transaction.objectStore(name)
      const request = objectStore.getAllKeys()
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(Error('Transaction error!'))
    })
    const allKeys = await promise
    return allKeys
  }
}

async function openDB (): Promise<IDBDatabase> {
  if (window.indexedDB === undefined) throw Error('IndexedDB is not supported!')
  const load: Promise<IDBDatabase> = new Promise((resolve, reject) => {
    const openRequest = window.indexedDB.open('store', 1)
    openRequest.onupgradeneeded = function () {
      const db = openRequest.result
      db.createObjectStore('store')
    }
    openRequest.onblocked = () => reject(openRequest.error)
    openRequest.onerror = () => reject(openRequest.error)
    openRequest.onsuccess = function () { // continue working
      const db = openRequest.result
      db.onversionchange = function () {
        db.close()
        window.alert('Please reload the page.')
      }
      resolve(db)
      return db
    }
  })
  const db = await load
  return db
}

async function DatabaseFrom (): Promise<Database> {
  const db = await openDB()
  const instance = new Database(db)
  return instance
}

export { Database, DatabaseFrom }
