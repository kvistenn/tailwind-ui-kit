<template>
    <div class="grid grid-cols-3 gap-4">
        <button v-for="component in components" :key="component.name" draggable="true" @dragstart="handleDragStart($event, component)" class="p-3 flex flex-col items-center justify-center rounded-xl border border-gray-200 text-xs uppercase">
            <img :src="component.icon" class="w-full h-auto">
            <span class="text-[10px]">{{ component.label }}</span>
        </button>
    </div>
    <hr class="my-8" />
    <div class="grid grid-cols-3 gap-4">
        <button v-for="layout in layouts" :key="layout.name" draggable="true" @dragstart="handleDragStart($event, layout)" class="p-3 flex flex-col items-center justify-center rounded-xl border border-gray-200 text-xs uppercase">
            <img :src="layout.icon" class="w-full h-auto">
            <span class="text-[10px]">{{ layout.label }}</span>
        </button>
    </div>
</template>

<script>
    import { components, layouts } from '@/uikit/index.js';

    export default {
        name: 'ComponentList',
        data() {
            return {
                components: components,
                layouts: layouts,
            }
        },
        methods: {
            handleDragStart(event, item) {
                event.dataTransfer.setData('component', JSON.stringify(item))
            },
        }
    }
</script>