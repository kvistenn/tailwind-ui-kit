import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        sidebarOpen: false,
        settingsOpen: false,
        currentSettingsData: null
    }),
    actions: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
        },
        openSettings(item) {
            this.settingsOpen = true;
            this.currentSettingsData = item;
        },
        closeSettings() {
            this.settingsOpen = false;
            this.currentSettingsData = null;
        }
    },
    persist: {
        enabled: true
    }
})
