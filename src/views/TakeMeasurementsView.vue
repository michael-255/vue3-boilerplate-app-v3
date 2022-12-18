<script setup lang="ts">
import { QPage, QCard, QCardSection } from 'quasar'
import { Icon } from '@/constants/app'
import { useRoute } from 'vue-router'
import { MeasurementCategory } from '@/constants/model'
import { onMounted, type Ref, ref } from 'vue'
import useLogger from '@/use/useLogger'

const route = useRoute()
const { log } = useLogger()

const sectionName: Ref<string> = ref('')

onMounted(() => {
  try {
    const sectionParamKeys = Object.values(MeasurementCategory)
    const sectionParam = route?.params?.section as MeasurementCategory

    if (sectionParamKeys.includes(sectionParam)) {
      sectionName.value = sectionParam
    } else {
      throw new Error('Section name not recognized')
    }
  } catch (error) {
    log.error('Failed to load Take Measurements View', error)
  }
})
</script>

<template>
  <QPage padding>
    <!-- Take Measurements Banner -->
    <QCard class="q-mb-sm">
      <QCardSection class="text-h5 text-white bg-primary">
        <QIcon class="q-pb-xs q-pr-xs" :name="Icon.MEASUREMENTS" />
        {{ sectionName }}
      </QCardSection>
    </QCard>

    <div class="row q-col-gutter-md justify-start">
      <div class="col-12">TEST</div>
    </div>
  </QPage>
</template>
