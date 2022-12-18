import { Field, MeasurementCategory, MeasurementInputs, ParentStatus } from '@/constants/model'
import type { IDBMeasurement } from '@/models/Measurement'

/**
 * Typicial measurements.
 * @see
 * Default export at bottom of file
 */
const defaultMeasurements: IDBMeasurement[] = [
  //
  // BMI
  //
  {
    [Field.ID]: '959b92ba-b9ff-4073-9c00-9f2d511715e6',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Height',
    [Field.DESCRIPTION]: 'Measurement of standing height.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BMI,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.FEET, MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: 'b4450018-1506-450f-a429-9903aded5c9b',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Weight',
    [Field.DESCRIPTION]: 'Scale measured body weight.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BMI,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.LBS],
  },
  {
    [Field.ID]: '43e3fc4e-b419-468c-9888-b5e072d81dfb',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Fat',
    [Field.DESCRIPTION]: 'Measured body fat percent.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BMI,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.PERCENT],
  },
  //
  // Heart
  //
  {
    [Field.ID]: '35f0f878-e641-446a-b34f-2606686b01f5',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Beats Per Minute',
    [Field.DESCRIPTION]: 'Measurement of the hearts beats per minute.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.HEART,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.BEATS_PER_MINUTE],
  },
  {
    [Field.ID]: 'df24d32f-be56-4dea-8dbc-5a3ea085ca18',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Blood Pressure',
    [Field.DESCRIPTION]: 'The Systolic/Diastolic measurement of blood pressure.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.HEART,
    [Field.MEASUREMENT_INPUTS]: [
      MeasurementInputs.BLOOD_PRESSURE_SYSTOLIC,
      MeasurementInputs.BLOOD_PRESSURE_DIASTOLIC,
    ],
  },
  //
  // Body
  //
  {
    [Field.ID]: '0090f468-5917-4124-98bd-1e7711ab360e',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Neck',
    [Field.DESCRIPTION]: 'Tape measurement of Neck circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: '222452a2-aa29-460e-85a8-4617092d1ba5',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Shoulders',
    [Field.DESCRIPTION]: 'Tape measurement around both shoulders.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: '880cb344-e537-4f0f-bad4-e212a6df51cd',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Chest',
    [Field.DESCRIPTION]: 'Tape measurement of chest from under armpits.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: '9fddbad2-ba89-4476-95e4-10d9969e782c',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Bicep (Right)',
    [Field.DESCRIPTION]: 'Tape measurement of right bicep circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: 'e126e959-1675-4b3b-866c-261e453d8dae',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Bicep (Left)',
    [Field.DESCRIPTION]: 'Tape measurement of left bicep circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: 'fa4c25c7-e1d5-48bf-975a-4fdfd2305646',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Forearm (Right)',
    [Field.DESCRIPTION]: 'Tape measurement of right forearm circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: '96c7229d-91e8-4470-b0a9-ebb1234fe6e7',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Forearm (Left)',
    [Field.DESCRIPTION]: 'Tape measurement of left forearm circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: 'ed12d669-cffd-45f7-802c-9025426341fa',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Waist',
    [Field.DESCRIPTION]: 'Tape measurement of waist circumference just below belly button.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: '843c6b0f-ce23-4468-9d67-dd1af076b10a',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Thigh (Right)',
    [Field.DESCRIPTION]: 'Tape measurement of right thigh circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: '3e3d0d91-3280-491d-967e-d56dcfc51520',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Thigh (Left)',
    [Field.DESCRIPTION]: 'Tape measurement of left thigh circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: '0ee16da1-3c8d-48fc-9af1-41ec09cf6317',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Calf (Right)',
    [Field.DESCRIPTION]: 'Tape measurement of right calf circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  {
    [Field.ID]: '09108d87-8337-4424-83a1-1ee5be5e8585',
    [Field.CREATED_TIMESTAMP]: 1325394000000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Calf (Left)',
    [Field.DESCRIPTION]: 'Tape measurement of left calf circumference.',
    [Field.MEASUREMENT_CATEGORY]: MeasurementCategory.BODY,
    [Field.MEASUREMENT_INPUTS]: [MeasurementInputs.INCHES],
  },
  //
  // Pain
  //
  /* TODO */

  //
  // Athletics
  //
  /* TODO */
]

export default defaultMeasurements
