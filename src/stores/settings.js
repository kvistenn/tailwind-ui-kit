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
        },
        closeSettings() {
            this.settingsOpen = false;
            this.currentSettingsData = null;
        },
        setSettingsData(data) {
            this.currentSettingsData = data;
        }
    },
    persist: {
        enabled: true
    }
})
