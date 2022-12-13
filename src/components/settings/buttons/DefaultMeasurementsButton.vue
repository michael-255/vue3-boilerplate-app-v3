<script setup lang="ts">
import { QBtn } from 'quasar'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { AppTable } from '@/constants/table'
import { AppColor, Icon } from '@/constants/app'
import useLogger from '@/use/useLogger'
import defaultMeasurements from '@/constants/data/default-measurements'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()

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
        log.error(
          'Error loading default Measurements',
          error,
          'DefaultMeasurementsButton:onDefaults'
        )
      }
    }
  )
}

async function loadDefaults(): Promise<void> {
  // await DB.bulkAdd(AppTable.MEASUREMENTS, defaultMeasurements)
}
</script>

<template>
  <QBtn label="Load Default Measurements" class="q-mb-md" color="primary" @click="onDefaults()" />
</template>
