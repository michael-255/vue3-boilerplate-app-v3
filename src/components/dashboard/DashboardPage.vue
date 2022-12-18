<script setup lang="ts">
import { QPage, QBtn } from 'quasar'
import MessageCard from '@/components/dashboard/MessageCard.vue'
import useLogger from '@/use/useLogger'
import useDBShared from '@/use/useDBShared'
import { onMounted } from 'vue'
import { AppTable } from '@/constants/table'
import { ParentStatus, CoreType, Field, SettingKey, MeasurementInputs } from '@/constants/model'
import type { IDBParent } from '@/models/Parent'
import defaultMeasurements from '@/constants/data/default-measurements'

const { log, consoleLog } = useLogger()
const { deleteItem } = useDBShared()

onMounted(async () => {
  // FOR TESTING
})

async function test() {
  const convertedParents = defaultMeasurements.map((m: any) => {
    return {
      [Field.TYPE]: CoreType.MEASUREMENT_PARENT,
      [Field.ID]: m.id,
      [Field.CREATED_TIMESTAMP]: 1641013200000,
      [Field.PARENT_STATUS]: ParentStatus.ENABLED,
      [Field.NAME]: m.name,
      [Field.DESCRIPTION]: 'XXXXX',
      [Field.MEASUREMENT_INPUTS]: [],
    }
  })

  consoleLog(convertedParents)
}
</script>

<template>
  <QPage padding>
    <div class="row q-col-gutter-md justify-start">
      <div class="col-12">
        <MessageCard />
      </div>
    </div>

    <QBtn @click="test" />
  </QPage>
</template>
