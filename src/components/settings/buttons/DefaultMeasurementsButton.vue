<script setup lang="ts">
import { QBtn } from 'quasar'
import { useLogger } from '@/use/useLogger'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { Icon } from '@/constants/ui/icon-enums'
import { NotifyColor } from '@/constants/ui/color-enums'
import { DB } from '@/services/LocalDatabase'
import { AppTable } from '@/constants/core/data-enums'
import defaultMeasurements from '@/constants/data/default-measurements'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()

function onDefaults(): void {
  confirmDialog(
    'Load Defaults',
    'Load default Measurements into the database?',
    Icon.INFO,
    NotifyColor.INFO,
    async (): Promise<void> => {
      try {
        await loadDefaults()
      } catch (error) {
        log.error('DefaultMeasurementsButton:onDefaults', error)
      }
    }
  )
}

async function loadDefaults(): Promise<void> {
  await DB.bulkAdd(AppTable.MEASUREMENTS, defaultMeasurements)
}
</script>

<template>
  <QBtn label="Load Default Measurements" color="primary" @click="onDefaults()" />
</template>
