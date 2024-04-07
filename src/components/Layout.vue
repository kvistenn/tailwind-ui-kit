<template>

    <div class="w-full h-screen">
        <div class="flex w-full h-full group overflow-hidden" :class="{ 'openSidebar': sidebarOpen, 'openSettings': settingsOpen }">
            <div class="w-[320px] flex-none h-full -translate-x-full group-[&.openSidebar]:translate-x-0 transition-transform">
                <Sidebar>
                    <ComponentList />
                </Sidebar>
            </div>
            <div class="w-full h-full flex-auto overflow-y-auto">
                <Header :sidebarOpen="sidebarOpen" :toggleSidebar="toggleSidebar" />
                <router-view />
            </div>
            <div class="w-[320px] flex-none h-full translate-x-full group-[&.openSettings]:translate-x-0 transition-transform">
                <Sidebar>
                    
                </Sidebar>
            </div>
        </div>
    </div>

</template>

<script>
    import Header from '@/components/Header.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import ComponentList from '@/components/ComponentList.vue'
    import { computed } from 'vue';
    import { useSettingsStore } from '@/stores/settings.js';

    export default {
        name: 'Layout',
        components: {
            Header,
            Sidebar,
            ComponentList
        },
        setup() {
            const settings = useSettingsStore();
            return {
                sidebarOpen: computed(() => settings.sidebarOpen),
                settingsOpen: computed(() => settings.settingsOpen),
                currentSettingsData: settings.currentSettingsData,
                toggleSidebar: settings.toggleSidebar,
            };
        },
    }
</script>