import { Field } from '@/constants/model'
import { RecordStatus } from '@/constants/model'
import { exportFile } from 'quasar'
import { AppTable } from '@/constants/table'
import type { IDBExerciseRecord } from '@/models/ExerciseRecord'
import type { IDBMeasurementRecord } from '@/models/MeasurementRecord'
import useLogger from '@/use/useLogger'

export default function useConverter() {
  const { log, consoleDebug } = useLogger()

  /**
   * Convert Fitness Tracker v16 data into new format.
   * @param file JSON
   */
  async function convertFitnessTrackerv16File(file: any): Promise<void> {
    const parsedFileData = JSON.parse(await file.value.text())

    consoleDebug('parsedFileData =', parsedFileData)

    const convertedData = {
      [AppTable.MEASUREMENT_RECORDS]: [] as IDBMeasurementRecord[],
      [AppTable.EXERCISE_RECORDS]: [] as IDBExerciseRecord[],
    }

    // Measurement Records
    parsedFileData?.measurementRecords?.forEach((mr: any) => {
      convertedData[AppTable.MEASUREMENT_RECORDS].push({
        [Field.ID]: mr?.id,
        [Field.CREATED_TIMESTAMP]: new Date(mr?.createdDate).getTime(),
        [Field.RECORD_STATUS]: RecordStatus.COMPLETED,
        [Field.PARENT_ID]: mr?.parentId,
        [Field.NOTE]: '',
        [Field.MEASUREMENT_VALUES]: [mr?.measurementValue],
      } as IDBMeasurementRecord)
    })

    // Exercise Records
    parsedFileData?.exerciseRecords?.forEach((er: any) => {
      const newRecord: IDBExerciseRecord = {
        [Field.ID]: er?.id,
        [Field.CREATED_TIMESTAMP]: new Date(er?.createdDate).getTime(),
        [Field.RECORD_STATUS]: RecordStatus.COMPLETED,
        [Field.PARENT_ID]: er?.parentId,
        [Field.NOTE]: '',
      }

      if (er?.reps.length > 0) {
        newRecord[Field.WEIGHT_LBS] = er?.weight
        newRecord[Field.REPS] = er?.reps
        convertedData[AppTable.EXERCISE_RECORDS].push(newRecord)
      } else {
        consoleDebug('Skipping Record =', er?.id)
      }
    })

    // Workout Records
    // TODO

    consoleDebug('convertedData =', convertedData)

    const filename = `converted-records-${new Date().toISOString().split('T')[0]}`

    // Attempt to download the converted data
    const fileStatus = exportFile(filename, JSON.stringify(convertedData), {
      encoding: 'UTF-8',
      mimeType: 'application/json',
    })

    if (fileStatus === true) {
      log.info('Converted file downloaded succesfully')
    } else {
      throw new Error('Browser denied file download')
    }
  }

  return { convertFitnessTrackerv16File }
}
