<script setup lang="ts">
import { QBtn } from 'quasar'
import { AppTable } from '@/constants/table'
import { Icon, AppColor } from '@/constants/app'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import useLogger from '@/use/useLogger'
import useDBSettings from '@/use/useDBSettings'
import useDBClear from '@/use/useDBClear'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()
const { initializeSettings } = useDBSettings()
const { clearTable } = useDBClear()

async function onClearAll(): Promise<void> {
  confirmDialog(
    'Clear All',
    'Permanetly remove all app data from the database?',
    Icon.DELETE,
    AppColor.ERROR,
    async (): Promise<void> => {
      try {
        await Promise.all(Object.values(AppTable).map((table) => clearTable(table as AppTable)))
        await initializeSettings()
      } catch (error) {
        log.error('ClearAllBtn:onClearAll', error)
      }
    }
  )
}
</script>

<template>
  <!-- Div ensures this item will stack on screen -->
  <div>
    <QBtn label="Clear All" :color="AppColor.ERROR" @click="onClearAll()" />
  </div>
</template>
