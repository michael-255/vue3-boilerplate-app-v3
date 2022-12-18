<script setup lang="ts">
import { QBtn } from 'quasar'
import { AppTable } from '@/constants/table'
import { AppColor, Icon } from '@/constants/app'
import useSimpleDialogs from '@/use/useSimpleDialogs'
import useLogger from '@/use/useLogger'
import useDBShared from '@/use/useDBShared'
import defaultExercises from '@/constants/data/default-exercises'

const { log, consoleDebug } = useLogger()
const { confirmDialog } = useSimpleDialogs()
const { importItems } = useDBShared()

function onDefaults(): void {
  confirmDialog(
    'Load Defaults',
    'Load default Exercises into the database?',
    Icon.INFO,
    AppColor.INFO,
    async (): Promise<void> => {
      try {
        await loadDefaults()
      } catch (error) {
        log.error('Error loading default Exercises', error)
      }
    }
  )
}

async function loadDefaults(): Promise<void> {
  consoleDebug('defaultExercises =', defaultExercises)
  await importItems(AppTable.PARENTS, defaultExercises)
  log.info('Exercise defaults added')
}
</script>

<template>
  <!-- Div ensures this item will stack on screen -->
  <div>
    <QBtn label="Load Exercises" color="primary" @click="onDefaults()" />
  </div>
</template>
