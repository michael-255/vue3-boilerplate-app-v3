import { dexieWrapper } from '@/services/DexieWrapper'
import { Field, MeasurementCategory, MeasurementInputs } from '@/constants/model'
import { AppTable } from '@/constants/table'
import type { IDBMeasurement } from '@/models/Measurement'
import type { IDBMeasurementRecord } from '@/models/MeasurementRecord'

export type MeasurementCard = {
  [Field.ID]: string
  [Field.NAME]: string
  [Field.MEASUREMENT_INPUTS]: MeasurementInputs[]
  [Field.CREATED_TIMESTAMP]?: number // Previous record
  [Field.MEASUREMENT_VALUES]?: number[] // Previous record
}

export default function useDBMeasurements() {
  /**
   * Builds and return the measurement cards by the category provided.
   * @param category MeasurementCategory
   * @returns Measurement cards
   */
  async function getTakeMeasurementCards(
    category: MeasurementCategory
  ): Promise<MeasurementCard[]> {
    // Get all measurements of the same category sorted by name
    const measurements = await dexieWrapper
      .table(AppTable.MEASUREMENTS)
      .where(Field.MEASUREMENT_CATEGORY)
      .equalsIgnoreCase(category)
      .sortBy(Field.NAME)

    // Build measurement card objects
    const measurementCards: MeasurementCard[] = await Promise.all(
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
        } as MeasurementCard
      })
    )

    return measurementCards
  }

  return { getTakeMeasurementCards }
}
