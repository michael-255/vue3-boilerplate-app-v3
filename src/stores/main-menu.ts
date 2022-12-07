import { defineStore } from 'pinia'

/**
 * Tracks state for the MenuLayout.
 */
const useMainMenuStore = defineStore({
  id: 'main-menu',

  state: () => ({
    drawer: false,
  }),
})

export default useMainMenuStore
