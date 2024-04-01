<script setup>
    const props = defineProps({
        setValue: {
            type: Function,
            default: () => {}
        },
        value: {
            type: String,
            default: '#000000'
        }
    })
</script>

<template>
    <label class="flex items-center gap-2 px-1 h-7 border-gray-200 rounded-full cursor-pointer">
        <div class="overflow-hidden w-5 h-5 rounded-full relative">
            <input type="color" :value="value" @input="(e) => setValue(e.target.value)" class="w-full h-full absolute top-0 left-0 p-0" />
        </div>
        <span class="text-xs uppercase">{{ value }}</span>
    </label>
</template>