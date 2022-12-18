<script setup lang="ts">
import { QPage, QCard, QCardSection } from 'quasar'
import { Icon } from '@/constants/app'
import { useRoute } from 'vue-router'
import { MeasurementCategory } from '@/constants/model'
import { onMounted, type Ref, ref } from 'vue'
import { Field } from '@/constants/model'
import useLogger from '@/use/useLogger'
import useDBMeasurements from '@/use/useDBMeasurements'

const route = useRoute()
const { log } = useLogger()
const { getTakeMeasurementCards } = useDBMeasurements()

const category: Ref<string> = ref('')
const measurementCards: Ref<any> = ref([])

onMounted(async () => {
  try {
    const categoryKeys = Object.values(MeasurementCategory)
    const categoryParam = route?.params?.[Field.MEASUREMENT_CATEGORY] as MeasurementCategory

    if (categoryKeys.includes(categoryParam)) {
      category.value = categoryParam
      measurementCards.value = await getTakeMeasurementCards(categoryParam)
      // TODO - Load measurementCards for the category...
      // TODO - need to have an onUpdated call when things change for the cards...
    } else {
      throw new Error('Category not recognized')
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
        {{ category }}
      </QCardSection>
    </QCard>

    <div class="row q-col-gutter-md justify-start">
      <div class="col-12">TEST</div>
    </div>
  </QPage>
</template>
