<script setup lang="ts">
import { QPage, QBtn } from 'quasar'
import MessageCard from '@/components/dashboard/MessageCard.vue'
import useDBClear from '@/use/useDBClear'
import useDBParents from '@/use/useDBParents'
import useDBRecords from '@/use/useDBRecords'
import useDBSettings from '@/use/useDBSettings'
import useDBLogs from '@/use/useDBLogs'
import useLogger from '@/use/useLogger'

const { log, consoleLog } = useLogger()
const { clearTable, deleteDatabase } = useDBClear()
const { getParentsTable } = useDBParents()
const { getRecordsTable } = useDBRecords()
const { getSettingsTable, initializeSettings, setSetting } = useDBSettings()
const { getLogsTable, addLog } = useDBLogs()

function test() {
  consoleLog('test1', { a: 'test2', b: 'test3' }, 'test4', 'test5')
  log.debug('DEBUG TEST', {}, 'Dashboard')
  log.error('error', new Error('Testing Error!'), 'DashboardPage:onMounted')
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
