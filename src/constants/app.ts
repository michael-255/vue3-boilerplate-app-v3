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
 * Generic type for an object with string based properties storing any value.
 */
export type AppObject = { [x: string]: any }

/**
 * Official app colors.
 * @see https://quasar.dev/style/color-palette
 * @see https://quasar.dev/quasar-utils/color-utils#helper-getpalettecolor
 */
export enum AppColor {
  LOG = 'blue-grey',
  DEBUG = 'deep-purple',
  INFO = 'primary',
  WARN = 'orange-9',
  ERROR = 'negative',
  CRITICAL = 'red-13',
}

/**
 * Material Design icons.
 * @see https://fonts.google.com/icons
 */
export enum Icon {
  // Severity
  DEBUG = 'bug_report',
  INFO = 'info',
  WARN = 'warning',
  ERROR = 'error',
  CRITICAL = 'report',
  // Operations
  UNDO = 'undo',
  SAVE = 'save',
  CLOSE = 'close',
  EDIT = 'edit',
  DELETE = 'delete',
  ADD = 'add',
  REMOVE = 'remove',
  // Pages
  EXAMPLE = 'smart_toy',
  ACTIVE = 'play_arrow',
  ACTIVITIES = 'directions_run',
  RECORDS = 'web_stories',
  MEASUREMENTS = 'straighten',
  EXERCISES = 'fitness_center',
  WORKOUTS = 'assignment',
  LOGS = 'plagiarism',
  // Misc
  ACTIVE_NOTIFY = 'notifications_active',
  TIMER = 'timer',
  CALENDAR_DATE = 'event',
  CALENDAR_CHECK = 'event_available',
  CALENDAR_CLEAR = 'event_busy',
  RETURN_TO_DASHBOARD = 'exit_to_app',
  TIME = 'access_time',
  RENEW = 'autorenew',
  DASHBOARD = 'dashboard',
  REPORT = 'timeline',
  MANAGEMENT = 'tune',
  SETTINGS = 'settings',
  DETAILS = 'summarize',
  CODE = 'code',
  WEB = 'language',
  MENU = 'menu',
  HOME = 'home',
}
