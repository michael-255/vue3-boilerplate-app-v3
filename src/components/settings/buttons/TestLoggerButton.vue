<script setup lang="ts">
import { QBtn } from 'quasar'
import { AppColor } from '@/constants/app'
import useLogger from '@/use/useLogger'

const { log } = useLogger()

/**
 * Generates example logs that can be examined on the Logs table and the console.
 */
function generateTestLogs(): void {
  log.debug(
    'This is a Debug Log',
    {
      name: 'Debug',
      message: 'Debug message',
      stack: 'Debug stack trace',
    },
    'TestLoggerButton:generateTestLogs'
  )
  log.info(
    'This is an Info Log',
    {
      name: 'Info',
      message: 'Info message',
      stack: 'Info stack trace',
    },
    'TestLoggerButton:generateTestLogs'
  )
  log.warn(
    'This is a Warning Log',
    {
      name: 'Warning',
      message: 'Warning message',
      stack: 'Warning stack trace',
    },
    'TestLoggerButton:generateTestLogs'
  )
  log.error(
    'This is an Error Log',
    {
      name: 'Error',
      message: 'Error message',
      stack: 'Error stack trace',
    },
    'TestLoggerButton:generateTestLogs'
  )
  log.critical(
    'This is a Critical Log',
    {
      name: 'Critical',
      message: 'Critical message',
      stack: 'Critical stack trace',
    },
    'TestLoggerButton:generateTestLogs'
  )
}
</script>

<template>
  <QBtn label="Test Logger" :color="AppColor.INFO" @click="generateTestLogs()" />
</template>
