/**
 * Represents available Dexie tables for the app and the name they are referenced by.
 */
export enum AppTable {
  ACTIVE_WORKOUTS = 'activeWorkouts',
  ACTIVE_EXERCISES = 'activeExercises',
  EXERCISES = 'exercises',
  EXERCISE_RECORDS = 'exerciseRecords',
  WORKOUTS = 'workouts',
  WORKOUT_RECORDS = 'workoutRecords',
  MEASUREMENTS = 'measurements',
  MEASUREMENT_RECORDS = 'measurementRecords',
  LOGS = 'logs',
  SETTINGS = 'settings',
}

/**
 * These are the exact fields used internally by all models that are stored in the database. You
 * should have all the class fields in this enum.
 */
export enum Field {
  // Entity
  ID = 'id',
  CREATED_DATE = 'createdDate',
  // Activity
  NAME = 'name',
  // Record
  PARENT_ID = 'parentId',
  // Setting
  SETTING_VALUE = 'settingValue',
  // Log
  SEVERITY = 'severity',
  DETAILS = 'details',
  MESSAGE = 'message',
  STACK = 'stack',
  // Exercise
  EXERCISE_TRACKS = 'exerciseTracks',
  // Exercise Record
  WEIGHT = 'weight',
  REPS = 'reps',
  // Workout
  EXERCISE_IDS = 'exerciseIds',
  // Workout Record
  FINISHED_DATE = 'finishedDate',
  EXERCISE_RECORD_IDS = 'exerciseRecordIds',
  // Measurement
  MEASUREMENT_TYPE = 'measurementType',
  // Measurement Record
  MEASUREMENT_VALUE = 'measurementValue',
}

/**
 * These are the operations that are supported within the app. Each table may support a subset of
 * these operations.
 */
export enum Operation {
  NOOP = 'No Operation',
  CREATE = 'Create',
  UPDATE = 'Update',
  DELETE = 'Delete',
  CLEAR = 'Clear',
  INSPECT = 'Inspect',
  REPORT = 'Report',
}

/**
 * These are the keys for the supported settings within the app.
 */
export enum SettingKey {
  DARK_MODE = 'dark-mode',
  SHOW_CONSOLE_LOGS = 'show-console-logs',
  SHOW_DEBUG_MESSAGES = 'show-debug-messages',
  SAVE_INFO_MESSAGES = 'save-info-messages',
}

/**
 * Log severity (also known as Log Level)
 */
export enum Severity {
  DEBUG = 'Debug',
  INFO = 'Info',
  WARN = 'Warning',
  ERROR = 'Error',
  CRITICAL = 'Critical',
}

/**
 * Measurment unit type.
 */
export enum MeasurementType {
  LBS = 'Lbs',
  INCHES = 'Inches',
  PERCENT = '%',
}

/**
 * Which exercise fields are used by a specific Exercise.
 */
export enum ExerciseTracks {
  REMINDER_ONLY = 'Reminder Only',
  WEIGHT_AND_REPS = 'Weight & Reps',
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
