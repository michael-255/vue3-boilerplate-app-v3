<script setup lang="ts">
import { QPage, QCard, QCardSection } from 'quasar'
import { Icon } from '@/constants/app'
import { useRoute } from 'vue-router'
import { MeasurementCategory } from '@/constants/model'
import { onMounted, type Ref, ref } from 'vue'
import { Field } from '@/constants/model'
import useLogger from '@/use/useLogger'
import useDBMeasurements from '@/use/useDBMeasurements'
import MeasurementCard from '@/components/take-measurements/MeasurementCard.vue'

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

    <div class="row q-col-gutter-sm justify-start">
      <div
        v-for="measurementCard in measurementCards"
        :key="measurementCard.id"
        class="col-md-4 col-sm-6 col-xs-12"
      >
        <MeasurementCard :measurementCard="measurementCard" />
      </div>
    </div>
  </QPage>
</template>
