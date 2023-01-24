/**
 * Field names used by the tables for the DB objects.
 */
export enum Field {
  // Setting
  KEY = 'key',
  VALUE = 'value',
  // Log
  SEVERITY = 'severity',
  LABEL = 'label',
  DETAILS = 'details',
  // Core
  ID = 'id',
  CREATED_TIMESTAMP = 'createdTimestamp',
  // Parent
  PARENT_STATUS = 'parentStatus',
  NAME = 'name',
  DESCRIPTION = 'description',
  // Record
  RECORD_STATUS = 'recordStatus',
  PARENT_ID = 'parentId',
  NOTE = 'note',
  // Measurement Parent
  MEASUREMENT_CATEGORY = 'measurementCategory',
  MEASUREMENT_INPUTS = 'measurementInputs',
  // Measurement Record
  MEASUREMENT_VALUES = 'measurementValues',
  // Exercise Parent
  EXERCISE_INPUTS = 'exerciseInputs',
  // Exercise Record
  CONFIRMED = 'confirmed',
  WEIGHT_LBS = 'weightLbs',
  REPS = 'reps',
  DISTANCE_MILES = 'distanceMiles',
  DURATION_MINUTES = 'durationMinutes',
  RESISTANCE = 'resistance',
  // Workout Parent
  EXERCISE_IDS = 'exerciseIds',
  // Workout Record
  FINISHED_TIMESTAMP = 'finishedTimestamp',
  EXERCISE_RECORD_IDS = 'exerciseRecordIds',
}

export enum ParentStatus {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
  ARCHIVED = 'Archived',
}

export enum RecordStatus {
  NONE = 'None',
  SKIPPED = 'Skipped',
  COMPLETED = 'Completed',
}

export enum Severity {
  DEBUG = 'Debug',
  INFO = 'Info',
  WARN = 'Warning',
  ERROR = 'Error',
  CRITICAL = 'Critical',
}

export enum SettingKey {
  DARK_MODE = 'dark-mode',
  SHOW_CONSOLE_LOGS = 'show-console-logs',
  SHOW_DEBUG_MESSAGES = 'show-debug-messages',
  SAVE_INFO_MESSAGES = 'save-info-messages',
  FAVORITE_PARENT_IDS = 'favorite-parent-ids', // TODO - should be stored on the item itself
  ORPHANED_RECORD_IDS = 'orphaned-record-ids',
  ACTIVE_RECORD_IDS = 'active-record-ids',
  PARENTS_TABLE_VISIBLE_COLUMNS = 'parents-table-visible-columns',
  RECORDS_TABLE_VISIBLE_COLUMNS = 'records-table-visible-columns',
}

export type SettingValue = boolean | string[] | null

export enum MeasurementCategory {
  MISC = 'Miscellaneous',
  BMI = 'BMI',
  BODY = 'Body',
  HEART = 'Heart',
  PAIN = 'Pain',
  ATHLETICS = 'Athletics',
}

export enum MeasurementInput {
  LBS = 'Lbs',
  FEET = 'Feet',
  INCHES = 'Inches',
  PERCENT = '%',
  BEATS_PER_MINUTE = 'BPM', // Heart Beats Per Minute
  BLOOD_PRESSURE_SYSTOLIC = 'Systolic',
  BLOOD_PRESSURE_DIASTOLIC = 'Diastolic',
  PAIN = 'Pain',
}

export enum ExerciseInput {
  REMINDER = 'Reminder',
  CONFIRMATION = 'Confirmation',
  MULTIPLE_SETS = 'Multiple Sets',
  WEIGHT_LBS = 'Weight (Lbs)',
  REPS = 'Reps',
  DISTANCE_MILES = 'Distance (Miles)',
  DURATION_MINUTES = 'Duration (Minutes)',
  RESISTANCE = 'Resistence',
}
