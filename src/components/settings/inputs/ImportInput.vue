<script setup lang="ts">
import { QFile, QBtn } from 'quasar'
import { type Ref, ref } from 'vue'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { AppTable } from '@/constants/table'
import { Icon, AppColor } from '@/constants/app'
import useLogger from '@/use/useLogger'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()

const file: Ref<any> = ref(null)
const fileSizeLimit = 100000000 // 100 mega bytes

/**
 * Called when an import has been rejected by the input.
 * @param entries
 */
function onRejectedImport(entries: any): void {
  const fileName = entries[0]?.file?.name || undefined
  const size = entries[0]?.file?.size || undefined
  const type = entries[0]?.file?.type || undefined
  const name = entries[0]?.failedPropValidation || undefined

  log.debug('Import rejection entries', entries)

  log.warn(`Cannot import ${fileName}`, {
    name: name,
    message: `NAME: ${fileName}, SIZE: ${size}, TYPE: ${type}`,
    stack: 'onRejectedImport',
  })
}

/**
 * Confirm if you want to import your data from a JSON file.
 */
function onImport(): void {
  confirmDialog(
    'Import',
    `Import file "${file.value.name}" and attempt to load data from it?`,
    Icon.INFO,
    AppColor.INFO,
    async (): Promise<void> => {
      try {
        await confirmedFileImport()
      } catch (error) {
        log.error('onImport', error)
      }
    }
  )
}

/**
 * Imports data properties it can parse that are defined below.
 */
async function confirmedFileImport(): Promise<void> {
  const fileData = await file.value.text()
  const parsedFileData = JSON.parse(fileData)
  // Using the table keys as a guide for what data can be imported from the JSON
  const tableKeys = Object.values(AppTable)
  const appData = tableKeys.reduce(
    (o, key: AppTable) => ({ ...o, [key]: parsedFileData[key] || [] }),
    {} as any
  )

  log.debug('Imported file data', appData)

  // await Promise.all(
  //   tableKeys.map((table: AppTable) => {
  //     // Logs and Settings are NOT imported
  //     if (table !== AppTable.LOGS && table !== AppTable.SETTINGS) {
  //       DB.bulkAdd(table, appData[table])
  //     }
  //   })
  // )
}
</script>

<template>
  <QFile
    v-model="file"
    dense
    outlined
    counter
    bottom-slots
    label="File"
    :max-file-size="fileSizeLimit"
    accept="application/json"
    @rejected="onRejectedImport"
  >
    <template v-slot:before>
      <QBtn :disable="!file" label="Import" color="primary" class="q-mr-xs" @click="onImport()" />
    </template>

    <template v-slot:after>
      <QIcon :name="Icon.CLOSE" @click.stop="file = null" class="cursor-pointer" />
    </template>
  </QFile>
</template>
