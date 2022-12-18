import { Field } from '@/constants/model'
import { RouteName, type RouteMeta } from '@/constants/router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.DASHBOARD,
      meta: { layout: 'MenuLayout' } as RouteMeta,
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/settings',
      name: RouteName.SETTINGS,
      meta: { layout: 'MenuLayout' } as RouteMeta,
      component: () => import('../views/SettingsView.vue'),
    },
    {
      path: '/about',
      name: RouteName.ABOUT,
      meta: { layout: 'MenuLayout' } as RouteMeta,
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: `/take-measurements/:${Field.MEASUREMENT_CATEGORY}`,
      name: RouteName.TAKE_MEASUREMENTS,
      meta: { layout: 'MenuLayout' } as RouteMeta,
      component: () => import('../views/TakeMeasurementsView.vue'),
    },
    {
      path: '/:pathMatch(.*)*', // 404 Not Found
      name: RouteName.NOT_FOUND,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
