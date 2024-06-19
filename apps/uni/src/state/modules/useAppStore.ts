import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentTabBar: 0
  }),
  actions: {}
})
