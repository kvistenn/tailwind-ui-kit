<template>
    <img v-if="localComponent.tag == 'img'" @click="(e) => openSettings(e, localComponent)" :data-key="localComponent.key" class="pointer-cursor" :class="getClasses(localComponent.classes)" v-bind="localComponent.attributes" />
    <input v-else-if="localComponent.tag == 'input'" @click="(e) => openSettings(e, localComponent)" :data-key="localComponent.key" class="pointer-cursor" :class="getClasses(localComponent.classes)" v-bind="localComponent.attributes" />
    <path v-else-if="localComponent.tag == 'path'" @click="(e) => openSettings(e, localComponent)" :data-key="localComponent.key" class="pointer-cursor" :class="getClasses(localComponent.classes)" v-bind="localComponent.attributes" />
    <component v-else :is="localComponent.tag" @click="(e) => openSettings(e, localComponent)" :data-key="localComponent.key" class="pointer-cursor" :draggable="preview ? false : true" :droppable="preview ? false : localComponent.droppable" v-on="{ dragover: preview ? null : (localComponent.droppable ? handleDragOver : null), drop: preview ? null : (localComponent.droppable ? handleDrop : null), dragstart: preview ? null : (e) => handleDragStart(e), dragend: preview ? null : (e) => handleDragEnd(e, localComponent) }" :class="getClasses(localComponent.classes)" v-bind="localComponent.attributes">
        <DynamicComponent v-for="(child, index) in localComponent.children" :key="index" @click="(e) => openSettings(e, child)" :data-key="child.key" class="pointer-cursor" :component="child" v-if="localComponent.children && localComponent.children.length > 0" :draggable="preview ? false : child.draggable" :droppable="preview ? false : child.droppable" v-on="{ dragover: preview ? null : (child.droppable ? handleDragOver : null), drop: preview ? null : (child.droppable ? handleDrop : null), dragstart: preview ? null : (e) => handleDragStart(e, child), dragend: preview ? null : (e) => handleDragEnd(e, child) }" />
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
    methods: {
        getClasses(classes) {
            var result = [];
            var classes = classes.split(' ');
            classes.forEach((item) => {
                if (item.indexOf('hover:') == -1) {
                    result.push(item);
                }
            });

            return result;
        },
    },
    setup() {
        const settings = useSettingsStore();

        const openSettings = (event, component) => {
            event.stopPropagation();
            if (event.target.getAttribute('draggable') !== null && component.settings !== undefined) {
                settings.openSettings();
                settings.setSettingsData(component);
            }
        };

        return {
            openSettings,
            closeSettings: settings.closeSettings
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