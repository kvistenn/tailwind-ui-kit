<script setup>
    const props = defineProps({
        items: {
            type: Array,
            default: []
        },
        label: {
            type: String,
            default: ''
        },
        setValue: {
            type: Function,
            default: () => {}
        },
        value: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <select class="w-full text-xs uppercase h-7 pl-2 border border-gray-200 rounded-sm outline-none" @change="(e) => setValue(e.target.value)">
        <option value="" disabled selected>{{ label }}</option>
        <option v-for="item in items" :value="item.value">
            {{ item.label }}
        </option>
    </select>
</template>