import { CoreType } from '@/constants/table-types/core'
import type { ColumnProps } from '@/constants/table-types/table'
import type { Field } from '@/constants/table-types/field'

export const TypeHelper = {
  get_type_fields(type: CoreType): Field[] {
    return {
      [CoreType.MEASUREMENT_PARENT]: [],
      [CoreType.MEASUREMENT_RECORD]: [],
      [CoreType.EXERCISE_PARENT]: [],
      [CoreType.EXERCISE_RECORD]: [],
    }[type]
  },

  get_type_components(type: CoreType): any[] {
    return {
      [CoreType.MEASUREMENT_PARENT]: [],
      [CoreType.MEASUREMENT_RECORD]: [],
      [CoreType.EXERCISE_PARENT]: [],
      [CoreType.EXERCISE_RECORD]: [],
    }[type]
  },

  get_column_props(type: CoreType): ColumnProps[] {
    return {
      [CoreType.MEASUREMENT_PARENT]: [],
      [CoreType.MEASUREMENT_RECORD]: [],
      [CoreType.EXERCISE_PARENT]: [],
      [CoreType.EXERCISE_RECORD]: [],
    }[type]
  },

  get_visible_columns(type: CoreType): Field[] {
    return {
      [CoreType.MEASUREMENT_PARENT]: [],
      [CoreType.MEASUREMENT_RECORD]: [],
      [CoreType.EXERCISE_PARENT]: [],
      [CoreType.EXERCISE_RECORD]: [],
    }[type]
  },

  get_type_label(type: CoreType, version: 'singular' | 'plural'): string {
    if (version === 'singular') {
      return {
        [CoreType.MEASUREMENT_PARENT]: 'Measurement',
        [CoreType.MEASUREMENT_RECORD]: 'Measurement Record',
        [CoreType.EXERCISE_PARENT]: 'Exercise',
        [CoreType.EXERCISE_RECORD]: 'Exercise Record',
      }[type]
    } else {
      return {
        [CoreType.MEASUREMENT_PARENT]: 'Measurements',
        [CoreType.MEASUREMENT_RECORD]: 'Measurement Records',
        [CoreType.EXERCISE_PARENT]: 'Exercises',
        [CoreType.EXERCISE_RECORD]: 'Exercise Records',
      }[type]
    }
  },
}
