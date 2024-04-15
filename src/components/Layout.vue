<template>

    <div class="w-full h-screen">
        <div class="flex w-full h-full group overflow-hidden" :class="{ 'openSidebar': sidebarOpen, 'openSettings': settingsOpen }">
            <div class="w-full h-full flex-auto overflow-y-auto">
                <Header :sidebarOpen="sidebarOpen" :toggleSidebar="toggleSidebar" />
                <router-view />
            </div>
            <div class="w-0 flex-none h-full group-[&.openSidebar]:w-[320px] border-gray-200 group-[&.openSidebar]:border-l transition-all overflow-x-hidden">
                <div class="p-6 w-[320px] h-full overflow-y-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptates.</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Header from '@/components/Header.vue'
    import { computed } from 'vue';
    import { useSettingsStore } from '@/stores/settings.js';

    export default {
        name: 'Layout',
        components: {
            Header,
        },
        setup() {
            const settings = useSettingsStore();
            return {
                sidebarOpen: computed(() => settings.sidebarOpen),
                toggleSidebar: settings.toggleSidebar,
            };
        },
    }
</script>