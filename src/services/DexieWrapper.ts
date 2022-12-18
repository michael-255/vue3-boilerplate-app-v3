import Dexie, { type Table } from 'dexie'
import { AppString } from '@/constants/app'
import type { IDBMeasurement } from '@/models/Measurement'
import type { IDBMeasurementRecord } from '@/models/MeasurementRecord'
import type { IDBExercise } from '@/models/Exercise'
import type { IDBExerciseRecord } from '@/models/ExerciseRecord'
import type { IDBSetting } from '@/models/Setting'
import type { IDBLog } from '@/models/Log'
// import type { IDBImage } from '@/models/Image'
import { AppTable } from '@/constants/table'
import { Field } from '@/constants/model'

export class DexieWrapper extends Dexie {
  [AppTable.MEASUREMENTS]!: Table<IDBMeasurement>;
  [AppTable.MEASUREMENT_RECORDS]!: Table<IDBMeasurementRecord>;
  [AppTable.EXERCISES]!: Table<IDBExercise>;
  [AppTable.EXERCISE_RECORDS]!: Table<IDBExerciseRecord>;
  [AppTable.SETTINGS]!: Table<IDBSetting>;
  [AppTable.LOGS]!: Table<IDBLog>
  // [AppTable.IMAGES]!: Table<IDBImage>

  constructor(name: string) {
    super(name)

    this.version(1).stores({
      [AppTable.MEASUREMENTS]: `&${Field.ID}, ${Field.PARENT_STATUS}, ${Field.MEASUREMENT_CATEGORY}`,
      [AppTable.MEASUREMENT_RECORDS]: `&${Field.ID}, ${Field.RECORD_STATUS}, ${Field.PARENT_ID}`,
      [AppTable.EXERCISES]: `&${Field.ID}, ${Field.PARENT_STATUS}`,
      [AppTable.EXERCISE_RECORDS]: `&${Field.ID}, ${Field.RECORD_STATUS}, ${Field.PARENT_ID}`,
      [AppTable.SETTINGS]: `&${Field.KEY}`,
      [AppTable.LOGS]: `++${Field.ID}`,
      // [AppTable.IMAGES]: `&${Field.ID}`,
    })
  }
}

/**
 * Preconfigured DexieWrapper
 */
export const dexieWrapper = new DexieWrapper(`${AppString.APP_NAME} v${AppString.VERSION}`)
