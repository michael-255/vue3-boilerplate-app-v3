<script setup lang="ts">
import { QCard, QCardSection } from 'quasar'
</script>

<template>
  <QCard>
    <QCardSection>
      <div class="text-h6 q-mb-md">Take Measurements</div>

      <div class="row q-col-gutter-md justify-start">
        <div class="col-sm-3 col-xs-6">
          <QBtn class="full-width" color="positive" label="BMI" />
        </div>

        <div class="col-sm-3 col-xs-6">
          <QBtn class="full-width" color="positive" label="Body" />
        </div>

        <div class="col-sm-3 col-xs-6">
          <QBtn class="full-width" color="positive" label="Heart" />
        </div>

        <div class="col-sm-3 col-xs-6">
          <QBtn class="full-width" color="positive" label="Pain" />
        </div>
      </div>
    </QCardSection>
  </QCard>
</template>
