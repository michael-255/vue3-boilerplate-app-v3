import type { IndexableType } from 'dexie'
import { AppTable } from '@/constants/table'
import { Field, type Severity } from '@/constants/model'
import { dexieWrapper } from '@/services/DexieWrapper'
import type { IDBLog } from '@/models/Log'

export default function useDBLogs() {
  /**
   * Adds a Log to the database.
   * @param severity
   * @param label
   * @param error
   * @param location
   * @returns Id of new Log
   */
  async function addLog(severity: Severity, label: string, details?: any): Promise<IndexableType> {
    const log: IDBLog = {
      [Field.CREATED_TIMESTAMP]: new Date().getTime(),
      [Field.SEVERITY]: severity,
      [Field.LABEL]: label,
      [Field.DETAILS]: details,
    }

    return await dexieWrapper.table(AppTable.LOGS).add(log)
  }

  return { addLog }
}
