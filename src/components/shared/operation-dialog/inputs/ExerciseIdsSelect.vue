<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { QSelect } from 'quasar'
import { AppTable } from '@/constants/core/data-enums'
import { useLogger } from '@/use/useLogger'
import { isDataInArray } from '@/utils/validators'
import { DB } from '@/services/LocalDatabase'
import { truncateString } from '@/utils/common'
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
    const exercises = await DB.getAll(AppTable.EXERCISES)

    // Sorts items that will become options
    const alphaSortedExercises = exercises.sort((a: any, b: any) => {
      return a.name.localeCompare(b.name)
    })

    // Builds options with value and label
    options.value = alphaSortedExercises.map((a: any) => ({
      value: a.id, // Item id is used as the value under the hood
      label: `${a.name} (${truncateString(a.id, 4, '*')})`, // Truncate id for readability
    }))

    if (
      operationDialogStore.selectedItem?.exerciseIds &&
      operationDialogStore.selectedItem?.exerciseIds.length > 0
    ) {
      operationDialogStore.temporaryItem.exerciseIds = [
        ...operationDialogStore.selectedItem.exerciseIds,
      ]
      operationDialogStore.validateItem.exerciseIds = true
    } else {
      operationDialogStore.validateItem.exerciseIds = false
    }
  } catch (error) {
    log.error('ExerciseIdsSelect:onMounted', error)
  }
})

function validateInput(): void {
  operationDialogStore.validateItem.exerciseIds = !!inputRef?.value?.validate()
}
</script>

<template>
  <QSelect
    v-model="operationDialogStore.temporaryItem.exerciseIds"
    ref="inputRef"
    label="Exercise Ids"
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
