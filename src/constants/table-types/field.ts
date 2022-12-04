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
  MESSAGE = 'message',
  STACK = 'stack',
  // Core
  TYPE = '_type',
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
