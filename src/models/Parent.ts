import type { Field, MeasurementInputs, ExerciseInputs, ParentStatus } from '@/constants/model'
import type { IDBCore } from '@/models/Core'

export interface IDBParent extends IDBCore {
  [Field.PARENT_STATUS]: ParentStatus
  [Field.NAME]: string
  [Field.DESCRIPTION]: string
  [Field.MEASUREMENT_INPUTS]?: MeasurementInputs[]
  [Field.EXERCISE_INPUTS]?: ExerciseInputs[]
  [Field.EXERCISE_IDS]?: string[]
}
