import { defineStore } from 'pinia'

export const ADD_SELECTED_ORGANIZATION = 'ADD_SELECTED_ORGANIZATION'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    selectedOrganizations: []
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true
    },
    logoutUser() {
      this.isLoggedIn = false
    },
    [ADD_SELECTED_ORGANIZATION](organizations) {
      this.selectedOrganizations = organizations
    }
  }
})
