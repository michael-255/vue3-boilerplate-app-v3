<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { QSelect } from 'quasar'
import { AppTable } from '@/constants/core/data-enums'
import { useLogger } from '@/use/useLogger'
import { isDataInArray } from '@/utils/validators'
import { DB } from '@/services/LocalDatabase'
import useOperationDialogStore from '@/stores/operation-dialog'

const { log } = useLogger()
const operationDialogStore = useOperationDialogStore()
const inputRef: Ref<any> = ref(null)
const options: Ref<any[]> = ref([])

/**
 * Sets the select box options with the exercise items from the database.
 */
onMounted(async () => {
  try {
    const exerciseRecords = await DB.getAll(AppTable.EXERCISE_RECORDS)

    // Builds options with value and label
    options.value = exerciseRecords.map((a: any) => ({
      value: a.id, // Item id is used as the value under the hood
      label: a.id,
    }))

    if (
      operationDialogStore.selectedItem?.exerciseRecordIds &&
      operationDialogStore.selectedItem?.exerciseRecordIds.length > 0
    ) {
      operationDialogStore.temporaryItem.exerciseRecordIds = [
        ...operationDialogStore.selectedItem.exerciseRecordIds,
      ]
      operationDialogStore.validateItem.exerciseRecordIds = true
    } else {
      operationDialogStore.validateItem.exerciseRecordIds = false
    }
  } catch (error) {
    log.error('ExerciseIdsSelect:onMounted', error)
  }
})

function validateInput(): void {
  operationDialogStore.validateItem.exerciseRecordIds = !!inputRef?.value?.validate()
}
</script>

<template>
  <QSelect
    v-model="operationDialogStore.temporaryItem.exerciseRecordIds"
    ref="inputRef"
    label="Exercise Record Ids"
    :options="options"
    multiple
    :rules="[(val: string[]) => isDataInArray(val) || '* Required']"
    emit-value
    map-options
    options-dense
    dense
    outlined
    color="primary"
    class="q-mb-xs"
    @blur="validateInput()"
  />
</template>
