<script setup lang="ts">
import { QBtn } from 'quasar'
import { AppTable } from '@/constants/table'
import { AppColor, Icon } from '@/constants/app'
import useSimpleDialogs from '@/use/useSimpleDialogs'
import useLogger from '@/use/useLogger'
import useDBShared from '@/use/useDBShared'
import defaultMeasurements from '@/constants/data/default-measurements'

const { log, consoleDebug } = useLogger()
const { confirmDialog } = useSimpleDialogs()
const { importItems } = useDBShared()

function onDefaults(): void {
  confirmDialog(
    'Load Defaults',
    'Load default Measurements into the database?',
    Icon.INFO,
    AppColor.INFO,
    async (): Promise<void> => {
      try {
        await loadDefaults()
      } catch (error) {
        log.error('Error loading default Measurements', error)
      }
    }
  )
}

async function loadDefaults(): Promise<void> {
  consoleDebug('defaultMeasurements =', defaultMeasurements)
  await importItems(AppTable.MEASUREMENTS, defaultMeasurements)
  log.info('Measurement defaults added')
}
</script>

<template>
  <!-- Div ensures this item will stack on screen -->
  <div>
    <QBtn label="Load Measurements" color="primary" @click="onDefaults()" />
  </div>
</template>
