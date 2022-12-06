import { RouteName, type RouteMeta, type RouteTab } from '@/constants/router'
import { AppTable } from '@/constants/table'
import { Icon } from '@/constants/app'
import { createRouter, createWebHistory } from 'vue-router'
import useDataTableStore from '@/stores/data-table'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.DASHBOARD,
      meta: { layout: 'MenuLayout' } as RouteMeta,
      component: () => import(`../views/DashboardView.vue`),
    },
    {
      path: '/settings',
      name: RouteName.SETTINGS,
      meta: { layout: 'MenuLayout' } as RouteMeta,
      component: () => import(`../views/SettingsView.vue`),
    },
    {
      path: '/about',
      name: RouteName.ABOUT,
      meta: { layout: 'MenuLayout' } as RouteMeta,
      component: () => import(`../views/AboutView.vue`),
    },
    {
      path: '/active-workout',
      name: RouteName.ACTIVE_WORKOUT,
      meta: { layout: 'ActiveLayout' } as RouteMeta,
      component: () => import(`../views/ActiveWorkoutView.vue`),
    },
    {
      path: '/take-measurements',
      name: RouteName.TAKE_MEASUREMENTS,
      meta: { layout: 'MenuLayout' } as RouteMeta,
      component: () => import(`../views/TakeMeasurementsView.vue`),
    },
    {
      path: '/logs-and-settings-data',
      name: RouteName.LOGS_AND_SETTINGS_DATA,
      meta: {
        layout: 'MenuLayout',
        tabs: [
          {
            name: 'Logs',
            icon: Icon.LOGS,
            table: AppTable.LOGS,
          },
          {
            name: 'Settings',
            icon: Icon.SETTINGS,
            table: AppTable.SETTINGS,
          },
        ],
      } as RouteMeta,
      component: () => import(`../components/data-table/DataTabs.vue`),
    },
    {
      path: '/measurements-data',
      name: RouteName.MEASUREMENTS_DATA,
      meta: {
        layout: 'MenuLayout',
        tabs: [
          {
            name: 'Measurements',
            icon: Icon.MEASUREMENTS,
            table: AppTable.MEASUREMENTS,
          },
          {
            name: 'Records',
            icon: Icon.RECORDS,
            table: AppTable.MEASUREMENT_RECORDS,
          },
        ],
      } as RouteMeta,
      component: () => import(`../components/data-table/DataTabs.vue`),
    },
    {
      path: '/exercises-data',
      name: RouteName.EXERCISES_DATA,
      meta: {
        layout: 'MenuLayout',
        tabs: [
          {
            name: 'Exercises',
            icon: Icon.EXERCISES,
            table: AppTable.EXERCISES,
          },
          {
            name: 'Records',
            icon: Icon.RECORDS,
            table: AppTable.EXERCISE_RECORDS,
          },
        ],
      } as RouteMeta,
      component: () => import(`../components/data-table/DataTabs.vue`),
    },
    {
      path: '/workouts-data',
      name: RouteName.WORKOUTS_DATA,
      meta: {
        layout: 'MenuLayout',
        tabs: [
          {
            name: 'Workouts',
            icon: Icon.WORKOUTS,
            table: AppTable.WORKOUTS,
          },
          {
            name: 'Records',
            icon: Icon.RECORDS,
            table: AppTable.WORKOUT_RECORDS,
          },
        ],
      } as RouteMeta,
      component: () => import(`../components/data-table/DataTabs.vue`),
    },
    {
      path: '/:pathMatch(.*)*', // 404 Not Found
      name: RouteName.NOT_FOUND,
      meta: { layout: 'MenuLayout' },
      component: () => import(`../views/NotFoundView.vue`),
    },
  ],
})

router.afterEach(async (to: any) => {
  // Manages tabs for DataTabs and DataTable
  const dataTableStore = useDataTableStore()
  const tabs = (to?.meta?.tabs || []) as RouteTab[]

  if (tabs.length > 0) {
    dataTableStore.selectedTab = tabs[0].name
    dataTableStore.tabs = tabs
  } else {
    dataTableStore.$reset()
  }
})

export default router
