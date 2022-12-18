import { AppTable } from '@/constants/table'
import useLogger from '@/use/useLogger'
// import useDBShared from '@/use/useDBShared'

export default function useConverter() {
  const { log, consoleDebug } = useLogger()
  // const { importItems } = useDBShared()

  /**
   * Convert Fitness Tracker v16 data into new format.
   * @param file JSON
   */
  async function convertFitnessTrackerv16File(file: any): Promise<void> {
    const parsedFileData = JSON.parse(await file.value.text())

    consoleDebug('parsedFileData =', parsedFileData)

    const convertedData = {
      [AppTable.PARENTS]: [],
      [AppTable.RECORDS]: [],
      [AppTable.SETTINGS]: [],
      [AppTable.LOGS]: [],
    }

    // Measurement Parents
    parsedFileData?.measurements?.forEach((m: any) => {
      /*
      {
        [Field.TYPE]: CoreType.MEASUREMENT_PARENT,
        [Field.ID]: '959b92ba-b9ff-4073-9c00-9f2d511715e6',
        [Field.CREATED_TIMESTAMP]: 1325394000000,
        [Field.PARENT_STATUS]: ParentStatus.ENABLED,
        [Field.NAME]: 'Height',
        [Field.DESCRIPTION]: 'Measurement of standing height.',
        [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.LBS],
      }
      */
    })

    log.info('Converted available data with exclusions')
  }

  return { convertFitnessTrackerv16File }
}
