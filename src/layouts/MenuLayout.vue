<script setup lang="ts">
import {
  QLayout,
  QPageContainer,
  QBtn,
  QHeader,
  QToolbar,
  QToolbarTitle,
  QDrawer,
  QList,
  QItem,
  QItemSection,
  QIcon,
} from 'quasar'
import { RouteName } from '@/constants/router'
import { AppString, Icon } from '@/constants/app'
import { useRoute } from 'vue-router'
import useMainMenuStore from '@/stores/main-menu'

const mainMenuStore = useMainMenuStore()
const route = useRoute()
</script>

<template>
  <QLayout view="hHh LpR lff">
    <!-- Header -->
    <QHeader elevated>
      <QToolbar>
        <QBtn
          dense
          flat
          round
          :icon="Icon.MENU"
          @click="mainMenuStore.drawer = !mainMenuStore.drawer"
        />

        <QToolbarTitle>{{ AppString.APP_NAME }}</QToolbarTitle>

        <QBtn
          v-if="route.name !== RouteName.DASHBOARD"
          flat
          dense
          :to="{ name: RouteName.DASHBOARD }"
          :icon="Icon.RETURN_TO_DASHBOARD"
        />
      </QToolbar>
    </QHeader>

    <!-- Menu Drawer -->
    <QDrawer v-model="mainMenuStore.drawer" :width="250" show-if-above side="left" bordered>
      <QList>
        <QItem>
          <QItemSection class="text-h6">Menu</QItemSection>
        </QItem>

        <QItem clickable v-ripple :to="{ name: RouteName.DASHBOARD }">
          <QItemSection avatar>
            <QIcon color="primary" :name="Icon.DASHBOARD" />
          </QItemSection>
          <QItemSection>Dashboard</QItemSection>
        </QItem>

        <QItem clickable v-ripple :to="{ name: RouteName.SETTINGS }">
          <QItemSection avatar>
            <QIcon color="primary" :name="Icon.SETTINGS" />
          </QItemSection>
          <QItemSection>Settings</QItemSection>
        </QItem>

        <QItem clickable v-ripple :to="{ name: RouteName.ABOUT }">
          <QItemSection avatar>
            <QIcon color="primary" :name="Icon.INFO" />
          </QItemSection>
          <QItemSection>About</QItemSection>
        </QItem>
      </QList>

      <QItem>
        <QItemSection class="text-h6">Data Tables</QItemSection>
      </QItem>

      <QItem clickable v-ripple>
        <QItemSection avatar>
          <QIcon color="primary" :name="Icon.MEASUREMENTS" />
        </QItemSection>
        <QItemSection>Measurements</QItemSection>
      </QItem>

      <QItem clickable v-ripple>
        <QItemSection avatar>
          <QIcon color="primary" :name="Icon.RECORDS" />
        </QItemSection>
        <QItemSection>Measurement Records</QItemSection>
      </QItem>

      <QItem clickable v-ripple>
        <QItemSection avatar>
          <QIcon color="primary" :name="Icon.EXERCISES" />
        </QItemSection>
        <QItemSection>Exercises</QItemSection>
      </QItem>

      <QItem clickable v-ripple>
        <QItemSection avatar>
          <QIcon color="primary" :name="Icon.RECORDS" />
        </QItemSection>
        <QItemSection>Exercise Records</QItemSection>
      </QItem>

      <QItem clickable v-ripple>
        <QItemSection avatar>
          <QIcon color="primary" :name="Icon.LOGS" />
        </QItemSection>
        <QItemSection>Logs</QItemSection>
      </QItem>
    </QDrawer>

    <!-- Router View -->
    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>
