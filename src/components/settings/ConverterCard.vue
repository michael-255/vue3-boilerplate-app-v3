<script setup lang="ts">
import { QCard, QCardSection } from 'quasar'
import ConverterInputs from '@/components/settings/inputs/ConverterInputs.vue'
</script>

<template>
  <QCard>
    <QCardSection>
      <div class="text-h6 q-mb-md">Converter</div>

      <div class="q-mb-lg">
        Convert exported data from previous versions of apps into newer formats.
      </div>

      <ConverterInputs />
    </QCardSection>
  </QCard>
</template>
