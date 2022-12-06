import { Severity } from '@/constants/model'
import { Icon, AppColor } from '@/constants/app'
import { logger } from '@/services/PrettyLogger'
import { useNotifications } from '@/use/useNotifications'
import useSettingsStore from '@/stores/settings'
import useDBCommon from '@/use/useDBCommon'

/**
 * Utilities for logging that include notifications and database entries.
 * Never awaiting for any logging calls. Don't want to slow down the UI.
 */
export function useLogger(): { [x: string]: any } {
  const settingsStore = useSettingsStore()
  const { addLog } = useDBCommon()
  const { notify } = useNotifications()

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
      if (settingsStore.showConsoleLogs) {
        logger.debug(`[${Severity.DEBUG}]`, label, location, error)
      }

      if (settingsStore.showDebugMessages) {
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

      if (settingsStore.showConsoleLogs) {
        logger.info(`[${severity}]`, label, location, error)
      }

      if (settingsStore.saveInfoMessages) {
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

      if (settingsStore.showConsoleLogs) {
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

      if (settingsStore.showConsoleLogs) {
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

      if (settingsStore.showConsoleLogs) {
        logger.critical(`[${severity}]`, label, location, error)
      }

      addLog(severity, label, error, location)

      notify(label, Icon.CRITICAL, AppColor.CRITICAL)
    },
  }

  /**
   * Simple console log for testing.
   * @param args REST parameter for all arguments
   */
  function consoleDebug(...args: any): void {
    if (settingsStore.DEBUG) {
      logger.log(args)
    }
  }

  return {
    addLog,
    consoleDebug,
    log,
  }
}
