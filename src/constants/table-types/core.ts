import type { Field } from '@/constants/table-types/field'
import type { IDBSettingObject } from '@/constants/table-types/setting'
import type { IDBLogObject } from '@/constants/table-types/log'
import type { IDBParentObject } from '@/constants/table-types/parent'
import type { IDBRecordObject } from '@/constants/table-types/record'

export enum CoreType {
  MEASUREMENT_PARENT = 'Measurement-Parent',
  MEASUREMENT_RECORD = 'Measurement-Record',
  EXERCISE_PARENT = 'Exercise-Parent',
  EXERCISE_RECORD = 'Exercise-Record',
  WORKOUT_PARENT = 'Workout-Parent',
  WORKOUT_RECORD = 'Workout-Record',
}

export enum CoreStatus {
  NONE = 'None',
  ACTIVE = 'Active',
  SKIPPED = 'Skipped',
  COMPLETED = 'Completed',
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
  ARCHIVED = 'Archived',
}

export interface IDBCoreObject {
  [Field.TYPE]: CoreType
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: string
  [Field.STATUS]: CoreStatus
}

export interface IDBResponse {
  data: (IDBSettingObject | IDBLogObject | IDBParentObject | IDBRecordObject)[]
  count: number
  message: string | undefined
  error: string | undefined
}
