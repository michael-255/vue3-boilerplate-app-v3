import { SettingKey, Severity } from '@/constants/model'
import { Icon, AppColor } from '@/constants/app'
import { logger } from '@/services/PrettyLogger'
import { useNotifications } from '@/use/useNotifications'
import useSettingsStore from '@/stores/settings'
import useDBLogs from '@/use/useDBLogs'

/**
 * Utilities for logging that include notifications and database entries.
 * Never awaiting for any logging calls. Don't want to slow down the UI.
 */
export default function useLogger() {
  const settingsStore = useSettingsStore()
  const { addLog } = useDBLogs()
  const { notify } = useNotifications()

  console.log('useLogger')

  /**
   * Log object with common logger functions.
   * - debug
   * - info
   * - warn
   * - error
   * - critical
   */
  const log = {
    /**
     * DEBUG
     * - Suppressable console logs
     * - Never saved in DB
     * - Suppressable notifications
     */
    debug: (label: string, error?: Error | any, location?: string) => {
      if (settingsStore[SettingKey.SHOW_CONSOLE_LOGS]) {
        logger.debug(`[${Severity.DEBUG}]`, label, location, error)
      }

      if (settingsStore[SettingKey.SHOW_DEBUG_MESSAGES]) {
        notify(label, Icon.DEBUG, AppColor.DEBUG)
      }
    },
    /**
     * INFO
     * - Suppressable console logs
     * - Can turn off DB saving
     * - Cannot suppress notifications
     */
    info: (label: string, error?: Error | any, location?: string) => {
      const severity = Severity.INFO

      if (settingsStore[SettingKey.SHOW_CONSOLE_LOGS]) {
        logger.info(`[${severity}]`, label, location, error)
      }

      if (settingsStore[SettingKey.SAVE_INFO_MESSAGES]) {
        addLog(severity, label, error, location)
      }

      notify(label, Icon.INFO, AppColor.INFO)
    },
    /**
     * WARN
     * - Suppressable console logs
     * - Cannot turn off DB saving
     * - Cannot suppress notifications
     */
    warn: (label: string, error?: Error | any, location?: string) => {
      const severity = Severity.WARN

      if (settingsStore[SettingKey.SHOW_CONSOLE_LOGS]) {
        logger.warn(`[${severity}]`, label, location, error)
      }

      addLog(severity, label, error, location)

      notify(label, Icon.WARN, AppColor.WARN)
    },
    /**
     * ERROR
     * - Suppressable console logs
     * - Cannot turn off DB saving
     * - Cannot suppress notifications
     */
    error: (label: string, error?: Error | any, location?: string) => {
      const severity = Severity.ERROR

      if (settingsStore[SettingKey.SHOW_CONSOLE_LOGS]) {
        logger.error(`[${severity}]`, label, location, error)
      }

      addLog(severity, label, error, location)

      notify(label, Icon.ERROR, AppColor.ERROR)
    },
    /**
     * CRITICAL
     * - Suppressable console logs
     * - Cannot turn off DB saving
     * - Cannot suppress notifications
     */
    critical: (label: string, error?: Error | any, location?: string) => {
      const severity = Severity.CRITICAL

      if (settingsStore[SettingKey.SHOW_CONSOLE_LOGS]) {
        logger.critical(`[${severity}]`, label, location, error)
      }

      addLog(severity, label, error, location)

      notify(label, Icon.CRITICAL, AppColor.CRITICAL)
    },
  }

  /**
   * Simple console log for testing.
   * @param message
   * @param args
   */
  function consoleLog(message: any, ...args: any): void {
    logger.log(message, ...args)
  }

  return {
    log,
    consoleLog,
  }
}
