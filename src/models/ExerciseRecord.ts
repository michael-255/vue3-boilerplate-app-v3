import type { Field } from '@/constants/model'
import type { IDBRecord } from '@/models/_Record'

export interface IDBExerciseRecord extends IDBRecord {
  [Field.CONFIRMED]?: boolean
  [Field.WEIGHT_LBS]?: number[]
  [Field.REPS]?: number[]
  [Field.DISTANCE_MILES]?: number[]
  [Field.DURATION_MINUTES]?: number[]
  [Field.RESISTANCE]?: number[]
}
