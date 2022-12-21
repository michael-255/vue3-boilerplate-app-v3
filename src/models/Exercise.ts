import type { Field, ExerciseInput } from '@/constants/model'
import type { IDBParent } from '@/models/_Parent'

export interface IDBExercise extends IDBParent {
  [Field.EXERCISE_INPUTS]: ExerciseInput[]
}
