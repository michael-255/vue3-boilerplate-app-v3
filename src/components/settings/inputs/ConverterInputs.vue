<script setup lang="ts">
import { QFile, QBtn } from 'quasar'
import { type Ref, ref } from 'vue'
import { Icon, AppColor } from '@/constants/app'
import useSimpleDialogs from '@/use/useSimpleDialogs'
import useLogger from '@/use/useLogger'
import useConverter from '@/use/useConverter'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()
const { convertFitnessTrackerv16File } = useConverter()

const file: Ref<any> = ref(null)
const fileSizeLimit = 100000000 // 100 mega bytes

/**
 * Called when a file has been rejected by the input.
 * @param entries
 */
function onRejectedFile(entries: any): void {
  const fileName = entries[0]?.file?.name || undefined
  log.warn(`Cannot convert "${fileName}"`, entries)
}

/**
 * Confirm if you want to convert your data from a JSON file.
 */
function onConvertFitnessTrackerv16File(): void {
  confirmDialog(
    'Convert',
    `Convert file "${file.value.name}" and attempt to load data from it?`,
    Icon.INFO,
    AppColor.INFO,
    async (): Promise<void> => {
      try {
        await convertFitnessTrackerv16File(file)
      } catch (error) {
        log.error('Conversion failed', error)
      }
    }
  )
}
</script>

<template>
  <QFile
    v-model="file"
    dense
    outlined
    counter
    bottom-slots
    label="Fitness Tracker v16 File"
    :max-file-size="fileSizeLimit"
    accept="application/json"
    @rejected="onRejectedFile"
  >
    <template v-slot:before>
      <QBtn
        :disable="!file"
        label="Convert"
        color="primary"
        class="q-mr-xs"
        @click="onConvertFitnessTrackerv16File()"
      />
    </template>

    <template v-slot:after>
      <QIcon :name="Icon.CLOSE" @click.stop="file = null" class="cursor-pointer" />
    </template>
  </QFile>
</template>
