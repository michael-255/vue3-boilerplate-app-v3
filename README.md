# Vue 3 Boilerplate App v3

_Project Archived_

Please use the following version as a template: <https://github.com/michael-255/vue3-web-app-template-2023>

This Vue 3 Typescript project can be used as a template to help you get started developing smaller
projects. Read through this README to have a better understanding of how this project is setup.

## TODO

Menu Drawer:

**_Reference all the many ideas in `ideas-scratch`_**

- [x] Data Converter in `Settings`

- [ ] Build `Take Measurements` pages

  - [ ] `BMI`
  - [ ] `BODY`
  - [ ] `HEART`
  - [ ] `PAIN` (need to create parents for this)

- [ ] Implement Data Tables

  - [ ] Logs
  - [ ] Measurements
  - [ ] Exercises
  - [ ] Measurement Records
  - [ ] Exercise Records

Select Box options for data tables:

- [ ] `type` = Measurements or Records
- [ ] `status` = All options

Take-Measurement Page:

- [ ] Collect inputs into groups (`BMI`, `Heart`, etc.)
- [ ] Page for `BMI`
- [ ] Page for `Body`
- [ ] Page for `Heart`
- [ ] Page for `Pain`

Endgame:

- [ ] `Post Cloning Steps` (+cleanup)

## Post Cloning Steps

- [ ] Update `package.json`

  - [ ] `name`
  - [ ] `description`
  - [ ] `version`
  - [ ] `repository`
  - [ ] `bugs`
  - [ ] `homepage`

- [ ] Update certain code files

  - [ ] Update `base` in `~/vite.config.ts` to your repository name for deployments to work
  - [ ] Update `AppString` enums in `~/src/constants/ui/string-enums.ts` to represent your app
  - [ ] Update `title` in `~/index.html` to reflect the app name you use in `ui-enums.ts`
  - [ ] Update `name` and `short_name` in `~/public/site.webmanifest` the app name
  - [ ] Update `start_url` in `~/public/site.webmanifest` to deployed website address (home)

- [ ] Update `GitHub` repository settings

  - [ ] Add a Description
  - [ ] Add the Website
  - [ ] Add Topics
  - [ ] Update the `Include in the home page` section

    - [ ] Uncheck `Releases`
    - [ ] Uncheck `Packages`
    - [ ] Uncheck `Environments`

- [ ] Generate a new Favicon here: <https://favicon.io/> (credit original artists)

- [ ] Update `README.md`

  - [ ] Change README main heading to your project name
  - [ ] Add detailed project description
  - [ ] Update the `Credits` section as needed
  - [ ] Remove unneeded sections (even this one once you are done)

## Table of Contents

- [Usage](#usage)
- [Project Creation Steps](#project-creation-steps)
- [Package JSON Changes](package-json-changes)
- [ES2020 Support](#es2020-support)
- [Misc Setup Notes](#misc-setup-notes)
- [Additional Notes](#additional-notes)
- [Credits](#credits)

## Usage

Install the project dependencies.

```sh
npm i
```

Launch the dev server site.

```sh
npm run dev
```

Build the project `dist` directory.

```sh
npm run build
```

Run tests and coverage report (press `q` to quit).

```sh
npm test
```

Build and deploy the `dist` directory.

```sh
npm run deploy
```

Check for outdated packages.

```sh
npm outdated
```

Update packages based on `package.json` version settings. Test updates to ensure they worked.

```sh
npm upgrade
```

## Project Creation Steps

These are the general steps I took to create the initial project (vue3-boilerplate-app).

- `npm init vue@latest` (in your projects folder, must use Typescript)
- cd to the project you created
- `npm i uuid` (random ids)
- `npm i -D @types/uuid`
- `npm i luxon` (Javascript date utilities)
- `npm i -D @types/luxon`
- `npm i dexie` (IndexedDB wrapper)
- `npm i -D gh-pages` (GitHub Pages deployment)
- `npm i -D @vitest/coverage-c8` (test coverage output)
- `npm i @vueuse/core` (Vue component utilities)
- `npm i chart.js vue-chart-3` (charts with a Vue wrapper)
- `npm i quasar @quasar/extras` (Vue component framework)
- `npm i -D @quasar/vite-plugin`

Use the configurator tool to help setup Quasar for your specific project. It generates the files
you'll need to copy over based on your selections.

<https://quasar.dev/start/vite-plugin>

These following files will need to be updated based on the configurator tool.

- `mains.ts`
- `vite.config.ts`

## Package JSON Changes

Updated or added lines for testing and deployment. The deployment script makes a copy of the
`index.html` in `dist` as `404.html` to address complications related to routing. This let's you
avoid using hash based routing.

```json
{
  "scripts": {
    "test": "vitest --environment jsdom --root src/",
    "test:coverage": "vitest --environment jsdom --coverage --root src/",
    "deploy": "npm run build && cd dist && cp index.html 404.html && cd .. && gh-pages -d dist -m Deployment"
  }
}
```

## ES2020 Support

Support for ES2020 language features was achieved by adding `es2020` to the following files.

- `tsconfig.vitest.json`
- `tsconfig.app.json`

## Misc Setup Notes

Please note the setup of the following when using this project.

- `.gitignore`
- `.eslintrc.cjs`
- `.prettierignore`
- `.prettierre.json`
- `/.vscode/extensions.json`

## Additional Notes

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) +
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) +
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI
with `vue-tsc` for type checking. In editors, we need
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a
[Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)
that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select
      `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Credits

Recognize the work of anyone whose material you used in the project here.
