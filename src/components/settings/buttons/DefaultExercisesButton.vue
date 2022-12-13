<script setup lang="ts">
import { QBtn } from 'quasar'
import { useLogger } from '@/use/useLogger'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { Icon } from '@/constants/ui/icon-enums'
import { NotifyColor } from '@/constants/ui/color-enums'
import { DB } from '@/services/LocalDatabase'
import { AppTable } from '@/constants/core/data-enums'
import defaultExercises from '@/constants/data/default-exercises'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()

function onDefaults(): void {
  confirmDialog(
    'Load Defaults',
    'Load default Exercises into the database?',
    Icon.INFO,
    NotifyColor.INFO,
    async (): Promise<void> => {
      try {
        await loadDefaults()
      } catch (error) {
        log.error('DefaultExercisesButton:onDefaults', error)
      }
    }
  )
}

async function loadDefaults(): Promise<void> {
  await DB.bulkAdd(AppTable.EXERCISES, defaultExercises)
}
</script>

<template>
  <QBtn label="Load Default Exercises" color="primary" @click="onDefaults()" />
</template>
