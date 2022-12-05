import type { Icon } from '@/constants/app'
import type { AppTable } from '@/constants/table'

/**
 * Any links you might use throughout the app.
 */
export enum Links {
  GITHUB = 'https://github.com/michael-255',
  MYAPPS = 'https://www.example.com',
}

/**
 * App route name used by Vue router.
 */
export enum RouteName {
  DASHBOARD = 'Dashboard',
  ACTIVE_WORKOUT = 'ActiveWorkout',
  TAKE_MEASUREMENTS = 'TakeMeasurements',
  MEASUREMENTS_DATA = 'MeasurementsData',
  EXERCISES_DATA = 'ExercisesData',
  WORKOUTS_DATA = 'WorkoutsData',
  LOGS_AND_SETTINGS_DATA = 'LogsAndSettingsData',
  SETTINGS = 'Settings',
  ABOUT = 'About',
  NOT_FOUND = 'NotFound',
}

/**
 * Current Vue Router Meta data.
 */
export type RouteMeta = {
  layout: string
  tabs?: RouteTab[]
}

/**
 * Tabs for the Vue Router Meta tabs field.
 */
export type RouteTab = {
  name: string
  icon: Icon
  table: AppTable
}
