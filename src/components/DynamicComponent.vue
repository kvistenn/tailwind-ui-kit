<template>
    <img v-if="localComponent.tag == 'img'" @click="openSettings(localComponent)" :data-key="localComponent.key" :class="localComponent.classes" v-bind="localComponent.attributes" />
    <input v-else-if="localComponent.tag == 'input'" @click="openSettings(localComponent)" :data-key="localComponent.key" :class="localComponent.classes" v-bind="localComponent.attributes" />
    <path v-else-if="localComponent.tag == 'path'" @click="openSettings(localComponent)" :data-key="localComponent.key" :class="localComponent.classes" v-bind="localComponent.attributes" />
    <component v-else :is="localComponent.tag" @click="openSettings(localComponent)" :data-key="localComponent.key" :draggable="preview ? false : true" :droppable="preview ? false : localComponent.droppable" v-on="{ dragover: preview ? null : (localComponent.droppable ? handleDragOver : null), drop: preview ? null : (localComponent.droppable ? handleDrop : null), dragstart: preview ? null : (e) => handleDragStart(e), dragend: preview ? null : (e) => handleDragEnd(e, localComponent) }" :class="localComponent.classes" v-bind="localComponent.attributes">
        <DynamicComponent v-for="(child, index) in localComponent.children" :key="index" @click="openSettings(child)" :data-key="child.key" :component="child" v-if="localComponent.children && localComponent.children.length > 0" :draggable="preview ? false : child.draggable" :droppable="preview ? false : child.droppable" v-on="{ dragover: preview ? null : (child.droppable ? handleDragOver : null), drop: preview ? null : (child.droppable ? handleDrop : null), dragstart: preview ? null : (e) => handleDragStart(e, child), dragend: preview ? null : (e) => handleDragEnd(e, child) }" />
        {{ localComponent.text ? localComponent.text : '' }}
    </component>
</template>

<script>

import { useSettingsStore } from '@/stores/settings.js';

export default {
    name: 'DynamicComponent',
    props: {
        component: {
            type: Object,
            required: true,
        },
        handleDrop: {
            type: Function,
            default: () => {},
        },
        handleDragOver: {
            type: Function,
            default: () => {},
        },
        handleDragStart: {
            type: Function,
            default: () => {},
        },
        handleDragEnd: {
            type: Function,
            default: () => {},
        },
        preview: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const settings = useSettingsStore();
        return {
            openSettings: settings.openSettings,
            closeSettings: settings.closeSettings,
        };
    },
    data() {
        return {
            localComponent: JSON.parse(JSON.stringify(this.component)),
        };
    },
    watch: {
        component: {
            handler(newValue) {
                this.localComponent = JSON.parse(JSON.stringify(newValue));
            },
            deep: true,
        },
    },
};
</script>