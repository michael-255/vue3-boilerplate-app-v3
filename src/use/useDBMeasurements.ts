// import type { IndexableType } from 'dexie'
// import { AppTable } from '@/constants/table'
import { dexieWrapper } from '@/services/DexieWrapper'
import type { IDBMeasurement } from '@/models/Measurement'
import type { AppObject } from '@/constants/app'
import { Field, MeasurementCategory } from '@/constants/model'
import { AppTable } from '@/constants/table'
import type { IDBMeasurementRecord } from '@/models/MeasurementRecord'

export default function useDBMeasurements() {
  async function getTakeMeasurementCards(category: MeasurementCategory): Promise<AppObject> {
    // Get all measurements of the same category
    const measurements = await dexieWrapper
      .table(AppTable.MEASUREMENTS)
      .where(Field.MEASUREMENT_CATEGORY)
      .equalsIgnoreCase(category)
      .toArray()

    // Build measurement card objects
    return await Promise.all(
      measurements.map(async (measurement: IDBMeasurement) => {
        // Get most recent measurement record
        const mostRecentMeasurementRecord: IDBMeasurementRecord = (
          await dexieWrapper
            .table(AppTable.MEASUREMENT_RECORDS)
            .where(Field.PARENT_ID)
            .equalsIgnoreCase(measurement.id)
            .sortBy(Field.CREATED_TIMESTAMP)
        ).reverse()[0]

        return {
          id: measurement.id,
          name: measurement.name,
          measurementInputs: measurement.measurementInputs,
          createdTimestamp: mostRecentMeasurementRecord?.createdTimestamp,
          measurementValues: mostRecentMeasurementRecord?.measurementValues,
        }
      })
    )
  }

  return { getTakeMeasurementCards }
}
