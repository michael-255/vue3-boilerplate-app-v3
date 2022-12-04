import type { Field } from '@/constants/table-types/field'
import type { IDBCoreObject } from '@/constants/table-types/core'
import type { MeasurementInputs } from '@/constants/table-types/measurement'
import type { ExerciseInputs } from '@/constants/table-types/exercise'

export interface IDBParentObject extends IDBCoreObject {
  [Field.NAME]: string
  [Field.DESCRIPTION]: string
  [Field.FAVORITE]: boolean
  [Field.MEASUREMENT_INPUTS]?: MeasurementInputs
  [Field.EXERCISE_INPUTS]?: ExerciseInputs[]
  [Field.EXERCISE_IDS]?: string[]
}
