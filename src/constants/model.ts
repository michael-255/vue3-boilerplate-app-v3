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
  LOCATION = 'location', // file:function
  ERROR = 'error',
  // Core
  TYPE = 'type',
  ID = 'id',
  CREATED_TIMESTAMP = 'created_timestamp',
  STATUS = 'status',
  // Parent
  NAME = 'name',
  DESCRIPTION = 'description',
  FAVORITE = 'favorite',
  // Record
  PARENT_ID = 'parent_id',
  NOTE = 'note',
  // Measurement Parent
  MEASUREMENT_INPUTS = 'measurement_inputs',
  // Measurement Record
  MEASUREMENT_VALUES = 'measurement_values', // array
  // Exercise Parent
  EXERCISE_INPUTS = 'exercise_inputs',
  // Exercise Record
  WEIGHT_LBS = 'weight_lbs',
  REPS = 'reps',
  DISTANCE_MILES = 'distance_miles',
  DURATION_MINUTES = 'duration_minutes',
  RESISTANCE = 'resistance',
  // Workout Parent
  EXERCISE_IDS = 'exercise_ids',
  // Workout Record
  FINISHED_TIMESTAMP = 'finished_timestamp',
  EXERCISE_RECORD_IDS = 'exercise_record_ids',
}

export enum CoreType {
  MEASUREMENT_PARENT = 'Measurement-Parent',
  MEASUREMENT_RECORD = 'Measurement-Record',
  EXERCISE_PARENT = 'Exercise-Parent',
  EXERCISE_RECORD = 'Exercise-Record',
}

export enum CoreStatus {
  NONE = 'None',
  ACTIVE = 'Active',
  SKIPPED = 'Skipped',
  COMPLETED = 'Completed',
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
  ARCHIVED = 'Archived',
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
}

export type SettingValue = boolean | string[]

export enum MeasurementInputs {
  LBS = 'Lbs',
  FEET = 'Feet',
  INCHES = 'Inches',
  PERCENT = '%',
  BEATS_PER_MINUTE = 'BPM', // Heart Beats Per Minute
  BLOOD_PRESSURE_SYSTOLIC = 'Systolic',
  BLOOD_PRESSURE_DIASTOLIC = 'Diastolic',
  PAIN = 'Pain',
}

export enum ExerciseInputs {
  REMINDER = 'Reminder',
  CONFIRMATION = 'Confirmation',
  MULTIPLE_SETS = 'Multiple Sets',
  WEIGHT_LBS = 'Weight (lbs)',
  REPS = 'Reps',
  DISTANCE_MILES = 'Distance (miles)',
  DURATION_MINUTES = 'Duration (minutes)',
  RESISTANCE = 'Resistence',
}
