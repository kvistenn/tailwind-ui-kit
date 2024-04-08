<template>
    <div class="space-y-4">
        <div v-for="setting in currentSettingsData.settings">
            <label class="space-y-1">
                <strong>{{ setting.label }}</strong>
                <select class="h-10 px-4 text-sm border border-gray-200 rounded w-full">
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="outlined">Outlined</option>
                </select>
            </label>
        </div>
    </div>
</template>

<script>

import { computed } from 'vue';
import { useSettingsStore } from '@/stores/settings.js';

export default {
    name: 'ComponentSettings',
    setup() {
        const settings = useSettingsStore();
        return {
            setSettingsData: settings.setSettingsData,
            currentSettingsData: computed(() => settings.currentSettingsData),
        };
    },
}
</script>