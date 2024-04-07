<template>
    <div class="grid grid-cols-3 gap-4">
        <button v-for="item in items" :key="item.name" draggable="true" @dragstart="handleDragStart($event, item)" class="aspect-square flex items-center justify-center rounded-xl border-2 border-gray-200 text-xs uppercase">
            {{ item.name }}
        </button>
    </div>
</template>

<script>
    import { components } from '@/uikit/index.js';

    export default {
        name: 'ComponentList',
        data() {
            return {
                items: components
            }
        },
        methods: {
            handleDragStart(event, item) {
                event.dataTransfer.setData('component', JSON.stringify(item.component))
            },
        }
    }
</script>