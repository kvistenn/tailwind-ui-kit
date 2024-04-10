<template>
    <div class="space-y-4">
        <div v-for="setting in currentSettingsData.settings" v-if="currentSettingsData">
            <label class="space-y-1">
                <strong>{{ setting.label }}</strong>
                <select class="h-10 px-4 text-sm border border-gray-200 rounded w-full" v-if="setting.type == 'select'">
                    <option v-for="option in setting.options" :value="option.value">{{ option.label }}</option>
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