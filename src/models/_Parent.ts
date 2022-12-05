import type { Field, MeasurementInputs, ExerciseInputs } from '@/constants/model'
import type { IDBCoreObject } from '@/models/_Core'

export interface IDBParentObject extends IDBCoreObject {
  [Field.NAME]: string
  [Field.DESCRIPTION]: string
  [Field.FAVORITE]: boolean
  [Field.MEASUREMENT_INPUTS]?: MeasurementInputs
  [Field.EXERCISE_INPUTS]?: ExerciseInputs[]
  [Field.EXERCISE_IDS]?: string[]
}
