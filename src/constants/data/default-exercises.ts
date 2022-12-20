import { ExerciseInputs, Field, ParentStatus } from '@/constants/model'
import type { IDBExercise } from '@/models/Exercise'

/**
 * Typicial exercises.
 * @see
 * Default export at bottom of file
 */
const defaultExercises: IDBExercise[] = [
  //
  // Reminders
  //
  {
    [Field.ID]: '7d8ebfc8-c9d2-48f0-9abd-99411d0d5cbe',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Warm-up',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: '3df82a9d-9ebc-4816-9a26-994f33ef892e',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Cool-down',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  //
  // Stretches
  //
  {
    [Field.ID]: 'c73120b7-0c70-4248-8441-b7263e7f11e8',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Chin Tucks',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: 'b1db0af2-a077-403a-9ca0-9892af3f911e',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Hip Flexor Stretch (30 seconds each)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: '1e5e8ca5-9dd3-4de9-88b3-ad197aecf980',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Calf Stretch (30 seconds each)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: '44a1a5d4-9b41-4f40-b513-fd7c90339c9b',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Doorway Chest Stretch (30 seconds)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: '4f742060-bc1b-4dc8-ab9f-578fc3724681',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'IT Band Stretch (90 seconds each)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: '5a22d2ce-d94e-4ef1-838a-785a74364044',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Lying Glute Stretch (30 seconds each)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: 'a7eb02e6-90e4-466f-9d23-e59c6617f1cb',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Standing Quad Stretch (30 seconds each)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: 'd9738508-4f59-45a9-8bf4-f28b5c6c7b76',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Toe Touch Stretch (30 seconds)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: 'f701c325-8f3c-48bc-bef3-9228bea28faa',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Perpendicular Spinal Foam Role (90 seconds)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: '73df6ff8-da81-49ea-93e3-dbed7d61cdcd',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Parallel Spinal Foam Role (90 seconds)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  //
  // Wrist
  //
  {
    [Field.ID]: '1bbf1694-c437-4d74-ac96-11c2be5f59db',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Median Nerve Sliders',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: 'b338a362-384e-47de-a28c-fb8ac7e0a27f',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Fist, Knuckles, Open Hand',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: 'e0dbb528-534b-4496-a53b-1997d4cd0d09',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Finger Tip Bends',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: '4de05952-0e6b-4cb5-9ac8-9436aca2497e',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Finger Knuckle Bends',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: '4505c250-0dfa-491a-985f-df562fdde4ff',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Bent To Open Wrist Stretch',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: '97af1cdc-b18b-490d-ba01-e97f971ef094',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Open/Closed Thumbs',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  //
  // Chest
  //
  {
    [Field.ID]: '5def6f0c-3e42-4387-aeee-df49d7c4b691',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Wide Push-ups',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'd681459e-10c8-40ae-94e9-9b06b7c40367',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Bench Press',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'c4da853a-2a01-4dd1-87b8-81b418c42395',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Diamond Push-ups',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'cbbf4ef8-d9e5-4b72-9cf5-42d6d4ba3c34',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Standard Push-ups',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'd03c4ffa-f40c-4851-8bf0-042616edeae0',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Military Push-ups',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '5aeaa5bd-7a60-404f-82b1-4ab95663c08d',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Decline Chest Press',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '6e921d7e-a244-4224-8ea5-2c77473b1b7e',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Chest Press',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '02085377-263d-4327-bd6c-d859b91e4315',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Incline Chest Press',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '0e91d1fa-3b5b-4e29-961a-659c2e4db1e7',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Incline Bench Press',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '47ef3bd5-dd0f-4cf6-a1a6-299d934db22f',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Decline Bench Press',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '51614637-5848-44ce-95fa-40b56c259452',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Pike Push-ups',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  //
  // Arms
  //
  {
    [Field.ID]: '8a122c71-57f5-4765-bed8-1d85c626229b',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Farmers Walk',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'c76bbb38-d537-49b0-9c33-cc3339a56718',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Tricep Pulldowns',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'dfef3f6c-e8ea-4ea9-a521-ed653f67d6b0',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Overhand Bicep Curls',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'e6a59544-17d2-4fd5-9458-907297d4bd24',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Hammer Bicep Curls',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '4d461fb6-f705-4246-84dc-2d3952cc4976',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Tricep Kickbacks',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '311df83a-1be8-46ad-a31d-58343552d9ac',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Standard Bicep Curls',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '29abad49-443c-4e6e-8003-a2a63816c30f',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Tricep Overhead Extentions',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '22ef8c5c-1b4f-496d-b28c-dde777f7bb86',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Dips',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: '14d81138-a414-4504-8929-cfeeb3d29f4a',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Lying Tricep Extension',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  //
  // Shoulders
  //
  {
    [Field.ID]: 'cc279615-91a6-42ac-a073-4339e7c2034f',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Overhead Press',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '4f931a11-b6c2-408d-827a-7e4e8aca9ded',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Front Arm Raises',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '8b4baa5b-65b6-455c-9d59-b4b785ee4966',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Side Arm Raises',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '2fe5999e-404c-481d-a3fa-f5a72a4ac39f',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Shrugs',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  //
  // Back
  //
  {
    [Field.ID]: 'b381ee00-edd7-499c-83f5-358e36a572b1',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Cable Lat Pulldowns',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'b8f1a60e-7f21-4f62-8757-d9b371bffd45',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Deadlift',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '56b4c658-5e9b-47f2-a695-e13bcc961bcb',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Face Pulls',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '4976dbac-8bce-4ad4-b9d6-27edeecb93d0',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Band Scapular Retractions',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: '3af92ca9-66e9-4e97-88d9-f70af00251f1',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Romanian Deadlift',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '23f2ed58-085e-4928-a8c9-cdd7cbf0f3e3',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Hammer Grip Pull-ups',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: '8c103b3b-dd21-4d67-a0c9-1cd1b6451046',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Standard Pull-ups',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '7f56b90f-5c5a-4ff7-97c1-7c64ba668223',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Wide Overhand Pull-ups',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '9907b74a-36cc-45a9-8ab7-fb6a571ded3d',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Chin-ups',
    [Field.DESCRIPTION]: 'Close grip underhand pull up.',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '08b12cc1-d4b9-4d22-82db-9e33b3e5c3fa',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Bent Over Rows',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '093c1896-b6dd-4ec7-9d4e-10c02f01b3c3',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'T-Rows',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '10e2dd01-9f6f-4c0a-a9c1-b7c738f4c476',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Bent Over Back Flyes',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  //
  // Legs
  //
  {
    [Field.ID]: 'dd856a31-bb05-40ab-9684-91aec544a543',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Leg Curls',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '5bf68f4c-8324-4db7-a682-5fed5549abfa',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Wall Sit (30 seconds)',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.CONFIRMATION],
  },
  {
    [Field.ID]: '56be9ba9-11d0-4dbc-a58e-3bcb949d3177',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Band Hip Extension',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: '50c1fc75-0975-45f8-8177-ff4988b00de2',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Squats',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '4e4bdeb5-61e6-4dcd-8b5c-9a94e5cc087a',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Straight Lunges',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '378d89a9-e972-4e11-b5a5-766b2c75b686',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Leg Extensions',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '2489bb27-e4c3-4e75-9b0d-df3a4b68b9c6',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Calf Raises',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '01e6cede-9a86-48a6-8199-47a033635082',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Side Lunges',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '15fbfa18-18c0-4c94-9a8f-93eb96a4a95d',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Hip Thrusters',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  //
  // Core
  //
  {
    [Field.ID]: '76af9305-f3a9-4abd-abe2-bfeacf6e4f0e',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Abdominal Crunch',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'c2faa48b-f16e-49fe-a6e3-ff688439544b',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Russian Twist',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: 'ab3091fe-1882-4f56-8ddc-4262c536e2f4',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Knee Bridges',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: 'e19c8ed4-a54d-41a5-a79e-794339fb60a6',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Alternating Torso Twist',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '38a27068-8ad1-4726-a26e-e7b582a9f112',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Oblique Side Bends',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  //
  // Cardio
  //
  {
    [Field.ID]: 'a49932ad-f07c-4529-8d77-faf7f3145ee9',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Mountain Climbers',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: 'adc82c70-683c-4594-b9fc-cfa0c5e73eeb',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Jumping Jacks',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
  {
    [Field.ID]: '3d5ad916-8f1e-4266-bcf0-b9283a2acf2a',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'High Arms, Alternating Knees',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [
      ExerciseInputs.MULTIPLE_SETS,
      ExerciseInputs.WEIGHT_LBS,
      ExerciseInputs.REPS,
    ],
  },
  {
    [Field.ID]: '1e01e67c-48ea-431d-a438-ac0de56d3e56',
    [Field.CREATED_TIMESTAMP]: 1546318800000,
    [Field.PARENT_STATUS]: ParentStatus.ENABLED,
    [Field.NAME]: 'Burpees',
    [Field.DESCRIPTION]: 'TODO DESCRIPTION',
    [Field.EXERCISE_INPUTS]: [ExerciseInputs.MULTIPLE_SETS, ExerciseInputs.REPS],
  },
]

export default defaultExercises
