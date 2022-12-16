<script setup lang="ts">
import { QBtn } from 'quasar'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { AppColor, Icon } from '@/constants/app'
import useLogger from '@/use/useLogger'
import defaultExercises from '@/constants/data/default-exercises'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()

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
  // await DB.bulkAdd(AppTable.EXERCISES, defaultExercises)
}
</script>

<template>
  <!-- Div ensures this item will stack on screen -->
  <div>
    <QBtn label="Load Default Exercises" color="primary" @click="onDefaults()" />
  </div>
</template>
