<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { QSelect } from 'quasar'
import { ExerciseTracks } from '@/constants/core/data-enums'
import { useLogger } from '@/use/useLogger'
import { isDefined } from '@/utils/validators'
import useOperationDialogStore from '@/stores/operation-dialog'

const { log } = useLogger()
const operationDialogStore = useOperationDialogStore()
const inputRef: Ref<any> = ref(null)
const options: Ref<any[]> = ref([])

onMounted(async () => {
  try {
    options.value = Object.values(ExerciseTracks)
    operationDialogStore.temporaryItem.exerciseTracks = operationDialogStore.selectedItem
      .exerciseTracks
      ? operationDialogStore.selectedItem.exerciseTracks
      : options.value[0]
    operationDialogStore.validateItem.exerciseTracks = true
  } catch (error) {
    log.error('ExerciseTracksSelect:onMounted', error)
  }
})

function validateInput(): void {
  operationDialogStore.validateItem.exerciseTracks = !!inputRef?.value?.validate()
}
</script>

<template>
  <QSelect
    v-model="operationDialogStore.temporaryItem.exerciseTracks"
    ref="inputRef"
    label="Exercise Tracks"
    :options="options"
    :rules="[(val: string) => isDefined(val) || '* Required']"
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
