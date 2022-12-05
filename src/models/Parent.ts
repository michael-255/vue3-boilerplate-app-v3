import type { Field, MeasurementInputs, ExerciseInputs } from '@/constants/model'
import type { IDBCore } from '@/models/Core'

export interface IDBParent extends IDBCore {
  [Field.NAME]: string
  [Field.DESCRIPTION]: string
  [Field.FAVORITE]: boolean
  [Field.MEASUREMENT_INPUTS]?: MeasurementInputs
  [Field.EXERCISE_INPUTS]?: ExerciseInputs[]
  [Field.EXERCISE_IDS]?: string[]
}
