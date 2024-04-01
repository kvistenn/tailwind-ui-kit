<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: ''
        },
        setValue: {
            type: Function,
            default: () => {}
        },
        value: {
            type: Boolean,
            default: ''
        },
    })
</script>

<template>
    <label class="flex gap-2 cursor-pointer">
        <div class="relative w-[42px] h-6 flex items-center px-1 border border-gray-200 rounded-full">
            <input type="checkbox" class="absolute w-0 h-0 opacity-0 peer" :checked="value" @change="(e) => setValue(e.target.checked)" />
            <div class="w-4 h-4 bg-gray-300 rounded-full top-1 left-1 peer-checked:translate-x-full peer-checked:bg-gray-900 transition-all"></div>
        </div>
        <span v-if="label != ''" class="py-1 text-xs uppercase">{{ label }}</span>
    </label>
</template>