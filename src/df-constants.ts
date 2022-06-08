
export const panelType = {
  PANEL_NONE: { textName: 'PANEL_NONE', binary: 0 },
  PANEL_WALL: { textName: 'PANEL_WALL', binary: 1 },
  PANEL_BACK: { textName: 'PANEL_BACK', binary: 2 },
  PANEL_FORE: { textName: 'PANEL_FORE', binary: 4 },
  PANEL_WATER: { textName: 'PANEL_WATER', binary: 8 },
  PANEL_ACID1: { textName: 'PANEL_ACID1', binary: 16 },
  PANEL_ACID2: { textName: 'PANEL_ACID2', binary: 32 },
  PANEL_STEP: { textName: 'PANEL_STEP', binary: 64 },
  PANEL_LIFTUP: { textName: 'PANEL_LIFTUP', binary: 128 },
  PANEL_LIFTDOWN: { textName: 'PANEL_LIFTDOWN', binary: 256 },
  PANEL_OPENDOOR: { textName: 'PANEL_OPENDOOR', binary: 512 },
  PANEL_CLOSEDOOR: { textName: 'PANEL_CLOSEDOOR', binary: 1024 },
  PANEL_BLOCKMON: { textName: 'PANEL_BLOCKMON', binary: 2048 },
  PANEL_LIFTLEFT: { textName: 'PANEL_LIFTLEFT', binary: 4096 },
  PANEL_LIFTRIGHT: { textName: 'PANEL_LIFTRIGHT', binary: 8192 }
}

export const textureSpecial = {
  PANEL_NONE: { textName: 'PANEL_NONE', binary: 0 },
  PANEL_WALL: { textName: 'PANEL_WALL', binary: 1 },
  PANEL_BACK: { textName: 'PANEL_BACK', binary: 2 },
  PANEL_FORE: { textName: 'PANEL_FORE', binary: 4 },
  PANEL_WATER: { textName: 'PANEL_WATER', binary: 8 },
  PANEL_ACID1: { textName: 'PANEL_ACID1', binary: 16 },
  PANEL_ACID2: { textName: 'PANEL_ACID2', binary: 32 },
  PANEL_STEP: { textName: 'PANEL_STEP', binary: 64 },
  PANEL_LIFTUP: { textName: 'PANEL_LIFTUP', binary: 128 },
  PANEL_LIFTDOWN: { textName: 'PANEL_LIFTDOWN', binary: 256 },
  PANEL_OPENDOOR: { textName: 'PANEL_OPENDOOR', binary: 512 },
  PANEL_CLOSEDOOR: { textName: 'PANEL_CLOSEDOOR', binary: 1024 },
  PANEL_BLOCKMON: { textName: 'PANEL_BLOCKMON', binary: 2048 },
  PANEL_LIFTLEFT: { textName: 'PANEL_LIFTLEFT', binary: 4096 },
  PANEL_LIFTRIGHT: { textName: 'PANEL_LIFTRIGHT', binary: 8192 }
}

export const panelFlag = {
  PANEL_FLAG_NONE: { textName: 'PANEL_FLAG_NONE', binary: 0 },
  PANEL_FLAG_BLENDING: { textName: 'PANEL_FLAG_BLENDING', binary: 1 },
  PANEL_FLAG_HIDE: { textName: 'PANEL_FLAG_HIDE', binary: 2 },
  PANEL_FLAG_WATERTEXTURES: { textName: 'PANEL_FLAG_WATERTEXTURES', binary: 4 }
}

export const triggerType = {
  TRIGGER_NONE: { textName: 'TRIGGER_NONE', binary: 0 },
  TRIGGER_EXIT: { textName: 'TRIGGER_EXIT', binary: 1 },
  TRIGGER_TELEPORT: { textName: 'TRIGGER_TELEPORT', binary: 2 },
  TRIGGER_OPENDOOR: { textName: 'TRIGGER_OPENDOOR', binary: 3 },
  TRIGGER_CLOSEDOOR: { textName: 'TRIGGER_CLOSEDOOR', binary: 4 },
  TRIGGER_DOOR: { textName: 'TRIGGER_DOOR', binary: 5 },
  TRIGGER_DOOR5: { textName: 'TRIGGER_DOOR5', binary: 6 },
  TRIGGER_CLOSETRAP: { textName: 'TRIGGER_CLOSETRAP', binary: 7 },
  TRIGGER_TRAP: { textName: 'TRIGGER_TRAP', binary: 8 },
  TRIGGER_PRESS: { textName: 'TRIGGER_PRESS', binary: 9 },
  TRIGGER_SECRET: { textName: 'TRIGGER_SECRET', binary: 10 },
  TRIGGER_LIFTUP: { textName: 'TRIGGER_LIFTUP', binary: 11 },
  TRIGGER_LIFTDOWN: { textName: 'TRIGGER_LIFTDOWN', binary: 12 },
  TRIGGER_LIFT: { textName: 'TRIGGER_LIFT', binary: 13 },
  TRIGGER_TEXTURE: { textName: 'TRIGGER_TEXTURE', binary: 14 },
  TRIGGER_ON: { textName: 'TRIGGER_ON', binary: 15 },
  TRIGGER_OFF: { textName: 'TRIGGER_OFF', binary: 16 },
  TRIGGER_ONOFF: { textName: 'TRIGGER_ONOFF', binary: 17 },
  TRIGGER_SOUND: { textName: 'TRIGGER_SOUND', binary: 18 },
  TRIGGER_SPAWNMONSTER: { textName: 'TRIGGER_SPAWNMONSTER', binary: 19 },
  TRIGGER_SPAWNITEM: { textName: 'TRIGGER_SPAWNITEM', binary: 20 },
  TRIGGER_MUSIC: { textName: 'TRIGGER_MUSIC', binary: 21 },
  TRIGGER_PUSH: { textName: 'TRIGGER_PUSH', binary: 22 },
  TRIGGER_SCORE: { textName: 'TRIGGER_SCORE', binary: 23 },
  TRIGGER_MESSAGE: { textName: 'TRIGGER_MESSAGE', binary: 24 },
  TRIGGER_DAMAGE: { textName: 'TRIGGER_DAMAGE', binary: 25 },
  TRIGGER_HEALTH: { textName: 'TRIGGER_HEALTH', binary: 26 },
  TRIGGER_SHOT: { textName: 'TRIGGER_SHOT', binary: 27 },
  TRIGGER_EFFECT: { textName: 'TRIGGER_EFFECT', binary: 28 },
  TRIGGER_SCRIPT: { textName: 'TRIGGER_SCRIPT', binary: 29 }
}

export const dirType = {
  DIR_LEFT: { textName: 'DIR_LEFT', binary: 0 },
  DIR_RIGHT: { textName: 'DIR_RIGHT', binary: 1 },
  DIR_SOMETHING2: { textName: 'DIR_SOMETHING2', binary: 2 }
}

export const effectAction = {
  EFFECT_NONE: { textName: 'EFFECT_NONE', binary: 0 },
  EFFECT_TELEPORT: { textName: 'EFFECT_TELEPORT', binary: 1 },
  EFFECT_RESPAWN: { textName: 'EFFECT_RESPAWN', binary: 2 },
  EFFECT_FIRE: { textName: 'EFFECT_FIRE', binary: 3 }
}

export const item = {
  ITEM_NONE: { textName: 'ITEM_NONE', binary: 0 },
  ITEM_MEDKIT_SMALL: { textName: 'ITEM_MEDKIT_SMALL', binary: 1 },
  ITEM_MEDKIT_LARGE: { textName: 'ITEM_MEDKIT_LARGE', binary: 2 },
  ITEM_MEDKIT_BLACK: { textName: 'ITEM_MEDKIT_BLACK', binary: 3 },
  ITEM_ARMOR_GREEN: { textName: 'ITEM_ARMOR_GREEN', binary: 4 },
  ITEM_ARMOR_BLUE: { textName: 'ITEM_ARMOR_BLUE', binary: 5 },
  ITEM_SPHERE_BLUE: { textName: 'ITEM_SPHERE_BLUE', binary: 6 },
  ITEM_SPHERE_WHITE: { textName: 'ITEM_SPHERE_WHITE', binary: 7 },
  ITEM_SUIT: { textName: 'ITEM_SUIT', binary: 8 },
  ITEM_OXYGEN: { textName: 'ITEM_OXYGEN', binary: 9 },
  ITEM_INVUL: { textName: 'ITEM_INVUL', binary: 10 },
  ITEM_WEAPON_SAW: { textName: 'ITEM_WEAPON_SAW', binary: 11 },
  ITEM_WEAPON_SHOTGUN1: { textName: 'ITEM_WEAPON_SHOTGUN1', binary: 12 },
  ITEM_WEAPON_SHOTGUN2: { textName: 'ITEM_WEAPON_SHOTGUN2', binary: 13 },
  ITEM_WEAPON_CHAINGUN: { textName: 'ITEM_WEAPON_CHAINGUN', binary: 14 },
  ITEM_WEAPON_ROCKETLAUNCHER: { textName: 'ITEM_WEAPON_ROCKETLAUNCHER', binary: 15 },
  ITEM_WEAPON_PLASMA: { textName: 'ITEM_WEAPON_PLASMA', binary: 16 },
  ITEM_WEAPON_BFG: { textName: 'ITEM_WEAPON_BFG', binary: 17 },
  ITEM_WEAPON_SUPERPULEMET: { textName: 'ITEM_WEAPON_SUPERPULEMET', binary: 18 },
  ITEM_AMMO_BULLETS: { textName: 'ITEM_AMMO_BULLETS', binary: 19 },
  ITEM_AMMO_BULLETS_BOX: { textName: 'ITEM_AMMO_BULLETS_BOX', binary: 20 },
  ITEM_AMMO_SHELLS: { textName: 'ITEM_AMMO_SHELLS', binary: 21 },
  ITEM_AMMO_SHELLS_BOX: { textName: 'ITEM_AMMO_SHELLS_BOX', binary: 22 },
  ITEM_AMMO_ROCKET: { textName: 'ITEM_AMMO_ROCKET', binary: 23 },
  ITEM_AMMO_ROCKET_BOX: { textName: 'ITEM_AMMO_ROCKET_BOX', binary: 24 },
  ITEM_AMMO_CELL: { textName: 'ITEM_AMMO_CELL', binary: 25 },
  ITEM_AMMO_CELL_BIG: { textName: 'ITEM_AMMO_CELL_BIG', binary: 26 },
  ITEM_AMMO_BACKPACK: { textName: 'ITEM_AMMO_BACKPACK', binary: 27 },
  ITEM_KEY_RED: { textName: 'ITEM_KEY_RED', binary: 28 },
  ITEM_KEY_GREEN: { textName: 'ITEM_KEY_GREEN', binary: 29 },
  ITEM_KEY_BLUE: { textName: 'ITEM_KEY_BLUE', binary: 30 },
  ITEM_WEAPON_KASTET: { textName: 'ITEM_WEAPON_KASTET', binary: 31 },
  ITEM_WEAPON_PISTOL: { textName: 'ITEM_WEAPON_PISTOL', binary: 32 },
  ITEM_BOTTLE: { textName: 'ITEM_BOTTLE', binary: 33 },
  ITEM_HELMET: { textName: 'ITEM_HELMET', binary: 34 },
  ITEM_JETPACK: { textName: 'ITEM_JETPACK', binary: 35 },
  ITEM_INVIS: { textName: 'ITEM_INVIS', binary: 36 },
  ITEM_WEAPON_FLAMETHROWER: { textName: 'ITEM_WEAPON_FLAMETHROWER', binary: 37 },
  ITEM_AMMO_FUELCAN: { textName: 'ITEM_AMMO_FUELCAN', binary: 38 }
}

export const itemOption = {
  ITEM_OPTION_NONE: { textName: 'ITEM_OPTION_NONE', binary: 0 },
  ITEM_OPTION_ONLYDM: { textName: 'ITEM_OPTION_ONLYDM', binary: 1 },
  ITEM_OPTION_FALL: { textName: 'ITEM_OPTION_FALL', binary: 2 }
}

export const areaType = {
  AREA_NONE: { textName: 'AREA_NONE', binary: 0 },
  AREA_PLAYERPOINT1: { textName: 'AREA_PLAYERPOINT1', binary: 1 },
  AREA_PLAYERPOINT2: { textName: 'AREA_PLAYERPOINT2', binary: 2 },
  AREA_DMPOINT: { textName: 'AREA_DMPOINT', binary: 3 },
  AREA_REDFLAG: { textName: 'AREA_REDFLAG', binary: 4 },
  AREA_BLUEFLAG: { textName: 'AREA_BLUEFLAG', binary: 5 },
  AREA_DOMFLAG: { textName: 'AREA_DOMFLAG', binary: 6 },
  AREA_REDTEAMPOINT: { textName: 'AREA_REDTEAMPOINT', binary: 7 },
  AREA_BLUETEAMPOINT: { textName: 'AREA_BLUETEAMPOINT', binary: 8 }
}

export const monster = {
  MONSTER_NONE: { textName: 'MONSTER_NONE', binary: 0 },
  MONSTER_DEMON: { textName: 'MONSTER_DEMON', binary: 1 },
  MONSTER_IMP: { textName: 'MONSTER_IMP', binary: 2 },
  MONSTER_ZOMBY: { textName: 'MONSTER_ZOMBY', binary: 3 },
  MONSTER_ZOMBIE: { textName: 'MONSTER_ZOMBIE', binary: 3 },
  MONSTER_SERG: { textName: 'MONSTER_SERG', binary: 4 },
  MONSTER_CYBER: { textName: 'MONSTER_CYBER', binary: 5 },
  MONSTER_CGUN: { textName: 'MONSTER_CGUN', binary: 6 },
  MONSTER_BARON: { textName: 'MONSTER_BARON', binary: 7 },
  MONSTER_KNIGHT: { textName: 'MONSTER_KNIGHT', binary: 8 },
  MONSTER_CACO: { textName: 'MONSTER_CACO', binary: 9 },
  MONSTER_SOUL: { textName: 'MONSTER_SOUL', binary: 10 },
  MONSTER_PAIN: { textName: 'MONSTER_PAIN', binary: 11 },
  MONSTER_SPIDER: { textName: 'MONSTER_SPIDER', binary: 12 },
  MONSTER_BSP: { textName: 'MONSTER_BSP', binary: 13 },
  MONSTER_MANCUB: { textName: 'MONSTER_MANCUB', binary: 14 },
  MONSTER_SKEL: { textName: 'MONSTER_SKEL', binary: 15 },
  MONSTER_VILE: { textName: 'MONSTER_VILE', binary: 16 },
  MONSTER_FISH: { textName: 'MONSTER_FISH', binary: 17 },
  MONSTER_BARREL: { textName: 'MONSTER_BARREL', binary: 18 },
  MONSTER_ROBO: { textName: 'MONSTER_ROBO', binary: 19 },
  MONSTER_MAN: { textName: 'MONSTER_MAN', binary: 20 }
}

export const monsterBehaviour = {
  BH_NORMAL: { textName: 'BH_NORMAL', binary: 0 },
  BH_KILLER: { textName: 'BH_KILLER', binary: 1 },
  BH_MANIAC: { textName: 'BH_MANIAC', binary: 2 },
  BH_INSANE: { textName: 'BH_INSANE', binary: 3 },
  BH_CANNIBAL: { textName: 'BH_CANNIBAL', binary: 4 },
  BH_GOOD: { textName: 'BH_GOOD', binary: 5 }
}

export const triggerShot = {
  TRIGGER_SHOT_PISTOL: { textName: 'TRIGGER_SHOT_PISTOL', binary: 0 },
  TRIGGER_SHOT_BULLET: { textName: 'TRIGGER_SHOT_BULLET', binary: 1 },
  TRIGGER_SHOT_SHOTGUN: { textName: 'TRIGGER_SHOT_SHOTGUN', binary: 2 },
  TRIGGER_SHOT_SSG: { textName: 'TRIGGER_SHOT_SSG', binary: 3 },
  TRIGGER_SHOT_IMP: { textName: 'TRIGGER_SHOT_IMP', binary: 4 },
  TRIGGER_SHOT_PLASMA: { textName: 'TRIGGER_SHOT_PLASMA', binary: 5 },
  TRIGGER_SHOT_SPIDER: { textName: 'TRIGGER_SHOT_SPIDER', binary: 6 },
  TRIGGER_SHOT_CACO: { textName: 'TRIGGER_SHOT_CACO', binary: 7 },
  TRIGGER_SHOT_BARON: { textName: 'TRIGGER_SHOT_BARON', binary: 8 },
  TRIGGER_SHOT_MANCUB: { textName: 'TRIGGER_SHOT_MANCUB', binary: 9 },
  TRIGGER_SHOT_REV: { textName: 'TRIGGER_SHOT_REV', binary: 10 },
  TRIGGER_SHOT_ROCKET: { textName: 'TRIGGER_SHOT_ROCKET', binary: 11 },
  TRIGGER_SHOT_BFG: { textName: 'TRIGGER_SHOT_BFG', binary: 12 },
  TRIGGER_SHOT_EXPL: { textName: 'TRIGGER_SHOT_EXPL', binary: 13 },
  TRIGGER_SHOT_BFGEXPL: { textName: 'TRIGGER_SHOT_BFGEXPL', binary: 14 },
  TRIGGER_SHOT_FLAME: { textName: 'TRIGGER_SHOT_FLAME', binary: 15 }
}

export const triggerShotTarget = {
  TRIGGER_SHOT_TARGET_NONE: { textName: 'TRIGGER_SHOT_TARGET_NONE', binary: 0 },
  TRIGGER_SHOT_TARGET_MON: { textName: 'TRIGGER_SHOT_TARGET_MON', binary: 1 },
  TRIGGER_SHOT_TARGET_PLR: { textName: 'TRIGGER_SHOT_TARGET_PLR', binary: 2 },
  TRIGGER_SHOT_TARGET_RED: { textName: 'TRIGGER_SHOT_TARGET_RED', binary: 3 },
  TRIGGER_SHOT_TARGET_BLUE: { textName: 'TRIGGER_SHOT_TARGET_BLUE', binary: 4 },
  TRIGGER_SHOT_TARGET_MONPLR: { textName: 'TRIGGER_SHOT_TARGET_MONPLR', binary: 5 },
  TRIGGER_SHOT_TARGET_PLRMON: { textName: 'TRIGGER_SHOT_TARGET_PLRMON', binary: 6 }
}

export const triggerShotAim = {
  TRIGGER_SHOT_AIM_DEFAULT: { textName: 'TRIGGER_SHOT_AIM_DEFAULT', binary: 0 },
  TRIGGER_SHOT_AIM_ALLMAP: { textName: 'TRIGGER_SHOT_AIM_ALLMAP', binary: 1 },
  TRIGGER_SHOT_AIM_TRACE: { textName: 'TRIGGER_SHOT_AIM_TRACE', binary: 2 },
  TRIGGER_SHOT_AIM_TRACEALL: { textName: 'TRIGGER_SHOT_AIM_TRACEALL', binary: 3 }
}

export const triggerEffect = {
  TRIGGER_EFFECT_PARTICLE: { textName: 'TRIGGER_EFFECT_PARTICLE', binary: 0 },
  TRIGGER_EFFECT_ANIMATION: { textName: 'TRIGGER_EFFECT_ANIMATION', binary: 1 }
}

export const triggerEffectType = {
  TRIGGER_EFFECT_SLIQUID: { textName: 'TRIGGER_EFFECT_SLIQUID', binary: 0 },
  TRIGGER_EFFECT_LLIQUID: { textName: 'TRIGGER_EFFECT_LLIQUID', binary: 1 },
  TRIGGER_EFFECT_DLIQUID: { textName: 'TRIGGER_EFFECT_DLIQUID', binary: 2 },
  TRIGGER_EFFECT_BLOOD: { textName: 'TRIGGER_EFFECT_BLOOD', binary: 3 },
  TRIGGER_EFFECT_SPARK: { textName: 'TRIGGER_EFFECT_SPARK', binary: 4 },
  TRIGGER_EFFECT_BUBBLE: { textName: 'TRIGGER_EFFECT_BUBBLE', binary: 5 }
}

export const triggerEffectPos = {
  TRIGGER_EFFECT_POS_CENTER: { textName: 'TRIGGER_EFFECT_POS_CENTER', binary: 0 },
  TRIGGER_EFFECT_POS_AREA: { textName: 'TRIGGER_EFFECT_POS_AREA', binary: 1 }
}

export const triggerMusicAction = {
  TRIGGER_MUSIC_ACTION_STOP: { textName: 'TRIGGER_MUSIC_ACTION_STOP', binary: 0 },
  TRIGGER_MUSIC_ACTION_PLAY: { textName: 'TRIGGER_MUSIC_ACTION_PLAY', binary: 1 }
}

export const triggerScoreAction = {
  TRIGGER_SCORE_ACTION_ADD: { textName: 'TRIGGER_SCORE_ACTION_ADD', binary: 0 },
  TRIGGER_SCORE_ACTION_SUB: { textName: 'TRIGGER_SCORE_ACTION_SUB', binary: 1 },
  TRIGGER_SCORE_ACTION_WIN: { textName: 'TRIGGER_SCORE_ACTION_WIN', binary: 2 },
  TRIGGER_SCORE_ACTION_LOOSE: { textName: 'TRIGGER_SCORE_ACTION_LOOSE', binary: 3 }
}

export const triggerMessageDest = {
  TRIGGER_MESSAGE_DEST_ME: { textName: 'TRIGGER_MESSAGE_DEST_ME', binary: 0 },
  TRIGGER_MESSAGE_DEST_MY_TEAM: { textName: 'TRIGGER_MESSAGE_DEST_MY_TEAM', binary: 1 },
  TRIGGER_MESSAGE_DEST_ENEMY_TEAM: { textName: 'TRIGGER_MESSAGE_DEST_ENEMY_TEAM', binary: 2 },
  TRIGGER_MESSAGE_DEST_RED_TEAM: { textName: 'TRIGGER_MESSAGE_DEST_RED_TEAM', binary: 3 },
  TRIGGER_MESSAGE_DEST_BLUE_TEAM: { textName: 'TRIGGER_MESSAGE_DEST_BLUE_TEAM', binary: 4 },
  TRIGGER_MESSAGE_DEST_EVERYONE: { textName: 'TRIGGER_MESSAGE_DEST_EVERYONE', binary: 5 }
}

export const triggerMessageKind = {
  TRIGGER_MESSAGE_KIND_CHAT: { textName: 'TRIGGER_MESSAGE_KIND_CHAT', binary: 0 },
  TRIGGER_MESSAGE_KIND_GAME: { textName: 'TRIGGER_MESSAGE_KIND_GAME', binary: 1 }
}

export const triggerActivateType = {
  ACTIVATE_NONE: { textName: 'ACTIVATE_NONE', binary: 0 },
  ACTIVATE_PLAYERCOLLIDE: { textName: 'ACTIVATE_PLAYERCOLLIDE', binary: 1 },
  ACTIVATE_MONSTERCOLLIDE: { textName: 'ACTIVATE_MONSTERCOLLIDE', binary: 2 },
  ACTIVATE_PLAYERPRESS: { textName: 'ACTIVATE_PLAYERPRESS', binary: 4 },
  ACTIVATE_MONSTERPRESS: { textName: 'ACTIVATE_MONSTERPRESS', binary: 8 },
  ACTIVATE_SHOT: { textName: 'ACTIVATE_SHOT', binary: 16 },
  ACTIVATE_NOMONSTER: { textName: 'ACTIVATE_NOMONSTER', binary: 32 },
  ACTIVATE_CUSTOM: { textName: 'ACTIVATE_CUSTOM', binary: 255 }
}

export const key = {
  KEY_NONE: { textName: 'KEY_NONE', binary: 0 },
  KEY_RED: { textName: 'KEY_RED', binary: 1 },
  KEY_GREEN: { textName: 'KEY_GREEN', binary: 2 },
  KEY_BLUE: { textName: 'KEY_BLUE', binary: 4 },
  KEY_REDTEAM: { textName: 'KEY_REDTEAM', binary: 8 },
  KEY_BLUETEAM: { textName: 'KEY_BLUETEAM', binary: 16 }
}

export const hitType = {
  HIT_SOME: { textName: 'HIT_SOME', binary: 0 },
  HIT_ROCKET: { textName: 'HIT_ROCKET', binary: 1 },
  HIT_BFG: { textName: 'HIT_BFG', binary: 2 },
  HIT_TRAP: { textName: 'HIT_TRAP', binary: 3 },
  HIT_FALL: { textName: 'HIT_FALL', binary: 4 },
  HIT_WATER: { textName: 'HIT_WATER', binary: 5 },
  HIT_ACID: { textName: 'HIT_ACID', binary: 6 },
  HIT_ELECTRO: { textName: 'HIT_ELECTRO', binary: 7 },
  HIT_FLAME: { textName: 'HIT_FLAME', binary: 8 },
  HIT_SELF: { textName: 'HIT_SELF', binary: 9 },
  HIT_DISCON: { textName: 'HIT_DISCON', binary: 10 }
}

export const triggerScoreTeam = {
  TRIGGER_SCORE_TEAM_MINE_RED: { textName: 'TRIGGER_SCORE_TEAM_MINE_RED', binary: 0 },
  TRIGGER_SCORE_TEAM_MINE_BLUE: { textName: 'TRIGGER_SCORE_TEAM_MINE_BLUE', binary: 1 },
  TRIGGER_SCORE_TEAM_FORCE_RED: { textName: 'TRIGGER_SCORE_TEAM_FORCE_RED', binary: 2 },
  TRIGGER_SCORE_TEAM_FORCE_BLUE: { textName: 'TRIGGER_SCORE_TEAM_FORCE_BLUE', binary: 3 }
}

enum MapPropertyTypeBinary {
  char = 'char',
  byte = 'byte', // octet
  word = 'word', // 2 octets
  longword = 'longword', // 4 octets
  doubleByte = 'double_byte',
  doubleWord = 'double_word',
  doubleLongWord = 'double_longword',
  boolean = 'boolean',
  textOnly = 'text',
  nested = 'nested',
  none = 'none'
}

enum MapPropertyTypeText {
  string = 'string',
  doubleNumber = 'double_number',
  boolean = 'boolean',
  bitset = 'bitset',
  number = 'number',
  id = 'id',
  nested = 'nested',
  none = 'none'
}

export class MapBlockProperty {
  name: string
  binaryType: MapPropertyTypeBinary
  textType: MapPropertyTypeText
  size: number
  writeDefault: boolean
  defaultValue: (number | number[] | string | string[] | boolean | null | undefined)
  constructor (name: string, binaryType: MapPropertyTypeBinary, textType: MapPropertyTypeText, size: number, writeDefault: boolean, defaultValue: (number | number[] | string | string[] | boolean | null | undefined)) {
    this.name = name
    this.binaryType = binaryType
    this.textType = textType
    this.size = size
    this.writeDefault = writeDefault
    this.defaultValue = defaultValue
  }
}

export class MapBlock {
  size: number
  binblock: number
  properties: MapBlockProperty[]
  constructor (size: number, binblock: number, properties: MapBlockProperty[]) {
    this.size = size
    this.binblock = binblock
    this.properties = properties
  }
}

export const TriggerData = [
  {
    type: [triggerType.TRIGGER_EXIT],
    properties: [
      new MapBlockProperty('name', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 32, true, null)
    ]
  }, {
    type: [triggerType.TRIGGER_TELEPORT],
    properties: [
      new MapBlockProperty('target', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
      new MapBlockProperty('d2d', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true),
      new MapBlockProperty('silent', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true),
      new MapBlockProperty('direction', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, dirType.DIR_LEFT.textName)
    ]
  }, {
    type: [triggerType.TRIGGER_OPENDOOR, triggerType.TRIGGER_CLOSEDOOR, triggerType.TRIGGER_DOOR, triggerType.TRIGGER_DOOR5, triggerType.TRIGGER_CLOSETRAP, triggerType.TRIGGER_TRAP, triggerType.TRIGGER_LIFTUP, triggerType.TRIGGER_LIFTDOWN, triggerType.TRIGGER_LIFT],
    properties: [
      new MapBlockProperty('panelid', MapPropertyTypeBinary.longword, MapPropertyTypeText.id, 4, true, undefined),
      new MapBlockProperty('silent', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true),
      new MapBlockProperty('d2d', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true)
    ]
  }, {
    type: [triggerType.TRIGGER_PRESS, triggerType.TRIGGER_ON, triggerType.TRIGGER_OFF, triggerType.TRIGGER_ONOFF],
    properties: [
      new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
      new MapBlockProperty('size', MapPropertyTypeBinary.doubleWord, MapPropertyTypeText.doubleNumber, 4, true, undefined),
      new MapBlockProperty('position', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, false, 0),
      new MapBlockProperty('count', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, false, 0),
      new MapBlockProperty('monsterid', MapPropertyTypeBinary.longword, MapPropertyTypeText.id, 4, false, null),
      new MapBlockProperty('ext_random', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 2, false, false),
      new MapBlockProperty('panelid', MapPropertyTypeBinary.none, MapPropertyTypeText.id, 4, false, null),
      new MapBlockProperty('silent', MapPropertyTypeBinary.none, MapPropertyTypeText.boolean, 1, false, true),
      new MapBlockProperty('sound', MapPropertyTypeBinary.none, MapPropertyTypeText.string, 1, false, '')
    ]
  }, {
    type: [triggerType.TRIGGER_SECRET],
    properties: [
    ]
  }, {
    type: [triggerType.TRIGGER_TEXTURE],
    properties: [
      new MapBlockProperty('activate_once', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, true, true),
      new MapBlockProperty('animate_once', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, true, true)
    ]
  }, {
    type: [triggerType.TRIGGER_SOUND],
    properties: [
      new MapBlockProperty('sound_name', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 64, true, null),
      new MapBlockProperty('volume', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('pan', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, false, 0),
      new MapBlockProperty('local', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true),
      new MapBlockProperty('play_count', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, false, 1),
      new MapBlockProperty('sound_switch', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, false)
    ]
  }, {
    type: [triggerType.TRIGGER_SPAWNMONSTER],
    properties: [
      new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
      new MapBlockProperty('type', MapPropertyTypeBinary.byte, MapPropertyTypeText.id, 4, true, monster.MONSTER_IMP.textName),
      new MapBlockProperty('health', MapPropertyTypeBinary.longword, MapPropertyTypeText.number, 4, true, monster.MONSTER_IMP.textName),
      new MapBlockProperty('direction', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, dirType.DIR_LEFT.textName),
      new MapBlockProperty('active', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 3, false, true),
      new MapBlockProperty('count', MapPropertyTypeBinary.longword, MapPropertyTypeText.number, 4, true, 1),
      new MapBlockProperty('effect', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 2, false, effectAction.EFFECT_NONE.textName),
      new MapBlockProperty('max', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 1),
      new MapBlockProperty('delay', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 1, true, 1000),
      new MapBlockProperty('behaviour', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, monsterBehaviour.BH_NORMAL.textName)
    ]
  }, {
    type: [triggerType.TRIGGER_SPAWNITEM],
    properties: [
      new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
      new MapBlockProperty('type', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 4, true, item.ITEM_NONE.textName),
      new MapBlockProperty('local', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true),
      new MapBlockProperty('dmonly', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true),
      new MapBlockProperty('count', MapPropertyTypeBinary.longword, MapPropertyTypeText.number, 4, true, 1),
      new MapBlockProperty('effect', MapPropertyTypeBinary.word, MapPropertyTypeText.string, 4, true, effectAction.EFFECT_NONE.textName),
      new MapBlockProperty('max', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 1),
      new MapBlockProperty('delay', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 1000)
    ]
  }, {
    type: [triggerType.TRIGGER_MUSIC],
    properties: [
      new MapBlockProperty('name', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 64, true, undefined),
      new MapBlockProperty('action', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerMusicAction.TRIGGER_MUSIC_ACTION_STOP.textName)
    ]
  }, {
    type: [triggerType.TRIGGER_PUSH],
    properties: [
      new MapBlockProperty('angle', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 1),
      new MapBlockProperty('force', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 1),
      new MapBlockProperty('reset_velocity', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, true, true)
    ]
  }, {
    type: [triggerType.TRIGGER_SCORE],
    properties: [
      new MapBlockProperty('action', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerScoreAction.TRIGGER_SCORE_ACTION_ADD.textName),
      new MapBlockProperty('count', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerScoreAction.TRIGGER_SCORE_ACTION_ADD.textName),
      new MapBlockProperty('team', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerScoreTeam.TRIGGER_SCORE_TEAM_MINE_RED.textName),
      new MapBlockProperty('console', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, true, false),
      new MapBlockProperty('message', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, true, true)
    ]
  }, {
    type: [triggerType.TRIGGER_MESSAGE],
    properties: [
      new MapBlockProperty('kind', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, false, triggerMessageKind.TRIGGER_MESSAGE_KIND_CHAT.textName),
      new MapBlockProperty('dest', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, false, triggerMessageDest.TRIGGER_MESSAGE_DEST_ME.textName),
      new MapBlockProperty('text', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 100, true, ''),
      new MapBlockProperty('time', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 1)
    ]
  }, {
    type: [triggerType.TRIGGER_DAMAGE],
    properties: [
      new MapBlockProperty('amount', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 0),
      new MapBlockProperty('interval', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 0),
      new MapBlockProperty('kind', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, hitType.HIT_SOME.textName)
    ]
  }, {
    type: [triggerType.TRIGGER_HEALTH],
    properties: [
      new MapBlockProperty('amount', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 0),
      new MapBlockProperty('interval', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 0),
      new MapBlockProperty('max', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, true, true),
      new MapBlockProperty('silent', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, true, true)
    ]
  }, {
    type: [triggerType.TRIGGER_SHOT],
    properties: [
      new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
      new MapBlockProperty('type', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerShot.TRIGGER_SHOT_PISTOL.textName),
      new MapBlockProperty('target', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerShotTarget.TRIGGER_SHOT_TARGET_NONE.textName),
      new MapBlockProperty('sound', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true),
      new MapBlockProperty('aim', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, false, triggerShotAim.TRIGGER_SHOT_AIM_DEFAULT.textName),
      new MapBlockProperty('panelid', MapPropertyTypeBinary.longword, MapPropertyTypeText.id, 1, true, null),
      new MapBlockProperty('sight', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, false, 0),
      new MapBlockProperty('angle', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, false, 0),
      new MapBlockProperty('wait', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, false, 0),
      new MapBlockProperty('accuracy', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, false, 0),
      new MapBlockProperty('ammo', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 0),
      new MapBlockProperty('reload', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 0)
    ]
  }, {
    type: [triggerType.TRIGGER_EFFECT],
    properties: [
      new MapBlockProperty('count', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('count', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerEffect.TRIGGER_EFFECT_PARTICLE.textName),
      new MapBlockProperty('subtype', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerEffectType.TRIGGER_EFFECT_SPARK.textName),
      new MapBlockProperty('red', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('green', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('blue', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('pos', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 2, true, triggerEffectPos.TRIGGER_EFFECT_POS_CENTER.textName),
      new MapBlockProperty('wait', MapPropertyTypeBinary.word, MapPropertyTypeText.number, 2, true, 0),
      new MapBlockProperty('vel_x', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('vel_y', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('spread_l', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('spread_r', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('spread_u', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0),
      new MapBlockProperty('spread_d', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, true, 0)
    ]
  }
]

export const mapBlocks = {
  map: new MapBlock(452, 7, [
    new MapBlockProperty('name', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 32, true, undefined),
    new MapBlockProperty('author', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 32, false, ''),
    new MapBlockProperty('description', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 256, false, ''),
    new MapBlockProperty('music', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 64, false, 'Standart.wad:D2DMUS\\ПРОСТОТА'),
    new MapBlockProperty('sky', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 64, false, 'Standart.wad:D2DSKY\\RSKY1'),
    new MapBlockProperty('size', MapPropertyTypeBinary.doubleWord, MapPropertyTypeText.doubleNumber, 4, false, undefined)
  ]),

  texture: new MapBlock(65, 1, [
    new MapBlockProperty('path', MapPropertyTypeBinary.char, MapPropertyTypeText.string, 64, false, undefined),
    new MapBlockProperty('animated', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true)
  ]),

  panel: new MapBlock(18, 2, [
    new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
    new MapBlockProperty('size', MapPropertyTypeBinary.doubleWord, MapPropertyTypeText.doubleNumber, 4, true, undefined),
    new MapBlockProperty('texture', MapPropertyTypeBinary.word, MapPropertyTypeText.id, 2, true, null),
    new MapBlockProperty('type', MapPropertyTypeBinary.word, MapPropertyTypeText.bitset, 2, false, [panelType.PANEL_NONE.textName]),
    new MapBlockProperty('alpha', MapPropertyTypeBinary.byte, MapPropertyTypeText.number, 1, false, 0),
    new MapBlockProperty('flags', MapPropertyTypeBinary.byte, MapPropertyTypeText.bitset, 1, false, [panelFlag.PANEL_FLAG_NONE.textName]),
    new MapBlockProperty('move_speed', MapPropertyTypeBinary.none, MapPropertyTypeText.doubleNumber, 1, false, [0, 0]),
    new MapBlockProperty('size_speed', MapPropertyTypeBinary.none, MapPropertyTypeText.doubleNumber, 1, false, [0, 0]),
    new MapBlockProperty('move_start', MapPropertyTypeBinary.none, MapPropertyTypeText.doubleNumber, 1, false, [0, 0]),
    new MapBlockProperty('move_end', MapPropertyTypeBinary.none, MapPropertyTypeText.doubleNumber, 1, false, [0, 0]),
    new MapBlockProperty('size_end', MapPropertyTypeBinary.none, MapPropertyTypeText.doubleNumber, 1, false, [0, 0]),
    new MapBlockProperty('move_active', MapPropertyTypeBinary.none, MapPropertyTypeText.boolean, 1, false, false),
    new MapBlockProperty('move_once', MapPropertyTypeBinary.none, MapPropertyTypeText.boolean, 1, false, false),
    new MapBlockProperty('end_pos_trigger', MapPropertyTypeBinary.none, MapPropertyTypeText.id, 1, false, null),
    new MapBlockProperty('end_size_trigger', MapPropertyTypeBinary.none, MapPropertyTypeText.id, 1, false, null)
  ]),

  item: new MapBlock(10, 3, [
    new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
    new MapBlockProperty('type', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, monster.MONSTER_NONE.textName),
    new MapBlockProperty('direction', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, dirType.DIR_LEFT.textName)
  ]),

  monster: new MapBlock(10, 5, [
    new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
    new MapBlockProperty('type', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, monster.MONSTER_NONE.textName),
    new MapBlockProperty('direction', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, dirType.DIR_LEFT.textName)
  ]),

  area: new MapBlock(10, 4, [
    new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
    new MapBlockProperty('type', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, monster.MONSTER_NONE.textName),
    new MapBlockProperty('direction', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, dirType.DIR_LEFT.textName)
  ]),

  trigger: new MapBlock(10, 3, [
    new MapBlockProperty('position', MapPropertyTypeBinary.doubleLongWord, MapPropertyTypeText.doubleNumber, 8, true, undefined),
    new MapBlockProperty('size', MapPropertyTypeBinary.doubleWord, MapPropertyTypeText.doubleNumber, 4, true, undefined),
    new MapBlockProperty('enabled', MapPropertyTypeBinary.boolean, MapPropertyTypeText.boolean, 1, false, true),
    new MapBlockProperty('texture_panel', MapPropertyTypeBinary.longword, MapPropertyTypeText.id, 4, true, null),
    new MapBlockProperty('type', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerType.TRIGGER_NONE.textName),
    new MapBlockProperty('activate_type', MapPropertyTypeBinary.byte, MapPropertyTypeText.string, 1, true, triggerActivateType.ACTIVATE_NONE.textName),
    new MapBlockProperty('keys', MapPropertyTypeBinary.byte, MapPropertyTypeText.bitset, 1, true, [triggerActivateType.ACTIVATE_NONE.textName]),
    new MapBlockProperty('triggerdata', MapPropertyTypeBinary.nested, MapPropertyTypeText.nested, 128, true, undefined)
  ])
}
