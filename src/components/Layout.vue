<template>

    <div class="w-full h-screen">
        <div class="flex w-full h-full group overflow-hidden" :class="{ 'openSidebar': sidebarOpen, 'openSettings': settingsOpen }">
            <div class="w-0 flex-none h-full group-[&.openSettings]:w-[320px] border-gray-200 group-[&.openSettings]:border-r transition-all overflow-x-hidden">
                <div class="p-6 w-[320px] h-full overflow-y-auto bg-white shadow-xl relative pt-16">
                    <div class="w-full h-16 flex items-center justify-between pl-6 absolute top-0 left-0">
                        <h1 class=" font-bold block">Component Settings</h1>
                        <button class="w-16 h-16 flex items-center justify-center" @click="closeSettings">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ComponentSettings />
                </div>
            </div>
            <div class="w-full h-full flex-auto overflow-y-auto">
                <Header :sidebarOpen="sidebarOpen" :toggleSidebar="toggleSidebar" />
                <router-view />
            </div>
            <div class="w-0 flex-none h-full group-[&.openSidebar]:w-[320px] border-gray-200 group-[&.openSidebar]:border-l transition-all overflow-x-hidden">
                <div class="p-6 w-[320px] h-full overflow-y-auto">
                    <ComponentList />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Header from '@/components/Header.vue'
    import ComponentList from '@/components/ComponentList.vue'
    import ComponentSettings from '@/components/ComponentSettings.vue'
    import { computed } from 'vue';
    import { useSettingsStore } from '@/stores/settings.js';

    export default {
        name: 'Layout',
        components: {
            Header,
            ComponentList,
            ComponentSettings
        },
        setup() {
            const settings = useSettingsStore();
            return {
                sidebarOpen: computed(() => settings.sidebarOpen),
                settingsOpen: computed(() => settings.settingsOpen),
                toggleSidebar: settings.toggleSidebar,
                closeSettings: settings.closeSettings,
            };
        },
    }
</script>