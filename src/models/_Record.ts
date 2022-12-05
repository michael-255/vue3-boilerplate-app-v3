import type { Field } from '@/constants/model'
import type { IDBCoreObject } from '@/models/_Core'

export interface IDBRecordObject extends IDBCoreObject {
  [Field.PARENT_ID]: string
  [Field.NOTE]: string
  [Field.MEASUREMENT_VALUES]?: number[]
  [Field.WEIGHT_LBS]?: number[]
  [Field.REPS]?: number[]
  [Field.DISTANCE_MILES]?: number[]
  [Field.DURATION_MINUTES]?: number[]
  [Field.RESISTANCE]?: number[]
  [Field.FINISHED_TIMESTAMP]?: string
  [Field.EXERCISE_RECORD_IDS]?: string[]
}
