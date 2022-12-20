<script setup lang="ts">
import { QBtn, QInput } from 'quasar'
import { Icon, AppColor } from '@/constants/app'
import useSimpleDialogs from '@/use/useSimpleDialogs'
import { ref, type Ref } from 'vue'
import useLogger from '@/use/useLogger'
import type { MeasurementInputs } from '@/constants/model'
// import useOperationDialogStore from '@/stores/operation-dialog'

const props = defineProps<{
  measurementId: string
  measurementName: string
  measurementInputs: MeasurementInputs[]
}>()

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()
const inputRef: Ref<any> = ref(null)
const inputNumber: Ref<number | null> = ref(null)
const rules: Ref<any[]> = ref([])

// try {
//   if (props.measurementType === MeasurementType.PERCENT) {
//     rules.value.push(
//       (val: number) => isPercentNumber(Number(val)) || 'Value between 0 and 100 required'
//     )
//   } else {
//     rules.value.push((val: number) => isPositiveNumber(Number(val)) || 'Positive number required')
//   }
// } catch (error) {
//   log.error('SaveMeasurementInput:Setup', error)
// }

async function onSave(): Promise<void> {
  confirmDialog(
    'Save',
    `Are you sure you want to save this measurement?`,
    Icon.SAVE,
    AppColor.INFO,
    async () => {
      // try {
      //   operationDialogStore.temporaryItem.id = uuid()
      //   operationDialogStore.temporaryItem.createdDate = new Date().toISOString()
      //   operationDialogStore.temporaryItem.parentId = props.parentId
      //   operationDialogStore.temporaryItem.measurementValue = Number(inputNumber.value)
      //   await DB.callCreate(AppTable.MEASUREMENT_RECORDS, {
      //     id: operationDialogStore.temporaryItem.id,
      //     createdDate: operationDialogStore.temporaryItem.createdDate,
      //     parentId: operationDialogStore.temporaryItem.parentId,
      //     measurementValue: operationDialogStore.temporaryItem.measurementValue,
      //   })
      //   log.info(`Saved ${props.name} (${Number(inputNumber.value)} ${props.measurementType})`, {
      //     name: 'SaveMeasurement:Info',
      //   })
      //   await takeMeasurementsStore.updateTakeMeasurementCards(DB) // Reload cards
      //   operationDialogStore.closeDialog(DB)
      //   inputNumber.value = null
      // } catch (error) {
      //   log.error('SaveMeasurementInput:onSave', error)
      // }
    }
  )
}

function validateInput(): boolean {
  return !!inputRef?.value?.validate()
}
</script>

<template>
  <!-- <QInput
    class="q-mt-md"
    type="number"
    ref="inputRef"
    :rules="rules"
    v-model="inputNumber"
    dense
    outlined
    label="Test"
    :placeholder="measurementInputs"
    @blur="validateInput()"
  >
    <template v-slot:after>
      <QBtn
        :disable="!inputNumber || !validateInput()"
        color="positive"
        class="q-ml-sm q-px-sm"
        :icon="Icon.SAVE"
        @click="onSave()"
      />
    </template>
  </QInput> -->

  <div class="row q-col-gutter-sm justify-start q-mt-sm">
    <div class="col-12">
      <QInput
        type="number"
        ref="inputRef"
        :rules="rules"
        v-model="inputNumber"
        dense
        outlined
        label="Test"
        :placeholder="measurementInputs"
        @blur="validateInput()"
      />
    </div>

    <div class="col-12">
      <QInput
        type="number"
        ref="inputRef"
        :rules="rules"
        v-model="inputNumber"
        dense
        outlined
        label="Test"
        :placeholder="measurementInputs"
        @blur="validateInput()"
      />
    </div>

    <div class="col-12">
      <QBtn
        :disable="!inputNumber || !validateInput()"
        color="positive"
        class="q-px-sm"
        :icon="Icon.SAVE"
        @click="onSave()"
      />
    </div>
  </div>

  <!-- <QBtn class="q-mt-sm" color="positive" label="Save" /> -->
</template>
