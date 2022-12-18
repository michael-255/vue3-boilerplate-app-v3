<script setup lang="ts">
import { QCard, QCardSection } from 'quasar'
import { RouteName } from '@/constants/router'
import { Field, MeasurementCategory } from '@/constants/model'

const categories = Object.values(MeasurementCategory)
</script>

<template>
  <QCard>
    <QCardSection>
      <div class="text-h6 q-mb-md">Take Measurements</div>

      <div class="row q-col-gutter-md justify-start">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="col-md-3 col-sm-4 col-xs-6"
        >
          <QBtn
            class="full-width"
            color="positive"
            :to="{
              name: RouteName.TAKE_MEASUREMENTS,
              params: { [Field.MEASUREMENT_CATEGORY]: category },
            }"
            :label="category"
          />
        </div>
      </div>
    </QCardSection>
  </QCard>
</template>
