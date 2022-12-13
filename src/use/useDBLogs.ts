import type { IndexableType } from 'dexie'
import { AppTable } from '@/constants/table'
import { Field, type Severity } from '@/constants/model'
import { dexieWrapper } from '@/services/DexieWrapper'
import type { IDBLog } from '@/models/Log'

export default function useDBLogs() {
  /**
   * Gets all data from the Logs table.
   * @returns IDBLog[]
   */
  async function getLogsTable(): Promise<IDBLog[]> {
    return await dexieWrapper.table(AppTable.LOGS).toArray()
  }

  /**
   * Adds a Log to the database.
   * @param severity
   * @param label
   * @param error
   * @param location
   * @returns Id of new Log
   */
  async function addLog(
    severity: Severity,
    label: string,
    error?: Error | any
  ): Promise<IndexableType> {
    const log: IDBLog = {
      [Field.CREATED_TIMESTAMP]: new Date().getTime(),
      [Field.SEVERITY]: severity,
      [Field.LABEL]: label,
      [Field.ERROR]: error,
    }

    return await dexieWrapper.table(AppTable.LOGS).add(log)
  }

  return {
    getLogsTable,
    addLog,
  }
}
