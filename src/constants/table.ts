import type { Field } from '@/constants/model'

/**
 * Dexie table names used by the DexieWrapper service.
 */
export enum AppTable {
  MEASUREMENTS = 'Measurements-Table',
  MEASUREMENT_RECORDS = 'Measurement-Records-Table',
  EXERCISES = 'Exercises-Table',
  EXERCISE_RECORDS = 'Exercise-Records-Table',
  SETTINGS = 'Settings-Table',
  LOGS = 'Logs-Table',
  // IMAGES = 'Images-Table', // TODO - May implement this later
}

/**
 * Properties used to display data items in a QTable.
 * Use "hidden_id" for column "0" so a truncated version can be shown.
 */
export type ColumnProps = {
  name: Field | 'hidden_id'
  label: string
  align: string
  sortable: boolean
  required: boolean
  field: (val: any) => any
  format: (val: any) => any
}
