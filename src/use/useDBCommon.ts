import type { IndexableType } from 'dexie'
import type { AppObject } from '@/constants/app'
import { AppTable } from '@/constants/table'
import type { Severity } from '@/constants/model'
import type { IDBLog } from '@/models/Log'
import { dexieWrapper } from '@/services/DexieWrapper'
import { uuid } from '@/utils/common'

export default function useDBCommon(): AppObject {
  /**
   * Adds a log to the database.
   * @param severity
   * @param label
   * @param error
   * @param location
   * @returns Id of new Log
   */
  async function addLog(
    severity: Severity,
    label: string,
    error?: Error | any,
    location?: string
  ): Promise<IndexableType> {
    const log: IDBLog = {
      id: uuid(),
      created_timestamp: new Date().getTime(),
      severity,
      label,
      location,
      error,
    }

    return await dexieWrapper.table(AppTable.LOGS).add(log)
  }

  return { addLog }
}
