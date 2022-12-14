import type { Field, MeasurementCategory, MeasurementInput } from '@/constants/model'
import type { IDBParent } from '@/models/_Parent'

export interface IDBMeasurement extends IDBParent {
  [Field.MEASUREMENT_CATEGORY]: MeasurementCategory
  [Field.MEASUREMENT_INPUTS]: MeasurementInput[]
}
