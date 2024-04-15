import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        sidebarOpen: false,
    }),
    actions: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
        },
    },
    persist: {
        enabled: true
    }
})
