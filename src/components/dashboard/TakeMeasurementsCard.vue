<script setup lang="ts">
import { QCard, QCardSection } from 'quasar'
import { RouteName } from '@/constants/router'
import { MeasurementCategory } from '@/constants/model'
</script>

<template>
  <QCard>
    <QCardSection>
      <div class="text-h6 q-mb-md">Take Measurements</div>

      <div class="row q-col-gutter-md justify-start">
        <div class="col-sm-3 col-xs-6">
          <QBtn
            class="full-width"
            color="positive"
            :to="{
              name: RouteName.TAKE_MEASUREMENTS,
              params: { category: MeasurementCategory.BMI },
            }"
            :label="MeasurementCategory.BMI"
          />
        </div>

        <div class="col-sm-3 col-xs-6">
          <QBtn
            class="full-width"
            color="positive"
            :to="{
              name: RouteName.TAKE_MEASUREMENTS,
              params: { category: MeasurementCategory.BODY },
            }"
            :label="MeasurementCategory.BODY"
          />
        </div>

        <div class="col-sm-3 col-xs-6">
          <QBtn
            class="full-width"
            color="positive"
            :to="{
              name: RouteName.TAKE_MEASUREMENTS,
              params: { category: MeasurementCategory.HEART },
            }"
            :label="MeasurementCategory.HEART"
          />
        </div>

        <div class="col-sm-3 col-xs-6">
          <QBtn
            class="full-width"
            color="positive"
            :to="{
              name: RouteName.TAKE_MEASUREMENTS,
              params: { category: MeasurementCategory.PAIN },
            }"
            :label="MeasurementCategory.PAIN"
          />
        </div>
      </div>
    </QCardSection>
  </QCard>
</template>
