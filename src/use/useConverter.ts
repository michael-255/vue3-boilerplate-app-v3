import type { IDBRecord } from '@/models/Record'
import { Field } from '@/constants/model'
import { CoreType, RecordStatus } from '@/constants/model'
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

    const convertedRecords: IDBRecord[] = []

    // Measurement Records
    parsedFileData?.measurementRecords?.forEach((mr: any) => {
      convertedRecords.push({
        [Field.TYPE]: CoreType.MEASUREMENT_RECORD,
        [Field.ID]: mr?.id,
        [Field.CREATED_TIMESTAMP]: new Date(mr?.createdDate).getTime(),
        [Field.RECORD_STATUS]: RecordStatus.COMPLETED,
        [Field.PARENT_ID]: mr?.parentId,
        [Field.NOTE]: '',
        [Field.MEASUREMENT_VALUES]: [mr?.measurementValue],
      } as IDBRecord)
    })

    // Exercise Records
    parsedFileData?.exerciseRecords?.forEach((er: any) => {
      const newRecord: IDBRecord = {
        [Field.TYPE]: CoreType.MEASUREMENT_RECORD,
        [Field.ID]: er?.id,
        [Field.CREATED_TIMESTAMP]: new Date(er?.createdDate).getTime(),
        [Field.RECORD_STATUS]: RecordStatus.COMPLETED,
        [Field.PARENT_ID]: er?.parentId,
        [Field.NOTE]: '',
      }

      if (er?.reps.length > 0) {
        newRecord[Field.WEIGHT_LBS] = er?.weight
        newRecord[Field.REPS] = er?.reps
        convertedRecords.push(newRecord)
      } else {
        consoleDebug('Skipping Record =', er?.id)
      }
    })

    consoleDebug('convertedRecords =', convertedRecords)

    log.info('Converted available data with exclusions')
  }

  return { convertFitnessTrackerv16File }
}
