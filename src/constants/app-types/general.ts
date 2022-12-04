/**
 * Generic strings that could be used throughout the app.
 */
export enum AppString {
  APP_NAME = 'Vue 3 Boilerplate App',
  VERSION = '3',
}

/**
 * Milliseconds per time value.
 */
export enum Milliseconds {
  PER_DAY = 86400000,
  PER_HOUR = 3600000,
  PER_MINUTE = 60000,
  PER_SECOND = 1000,
}

/**
 * Generic type for an object with string based keys storing any value.
 */
export type DBObject = { [x: string]: any }
