import type { Field } from '@/constants/model'
import type { IDBRecord } from '@/models/_Record'

export interface IDBMeasurementRecord extends IDBRecord {
  [Field.MEASUREMENT_VALUES]: number[]
}
