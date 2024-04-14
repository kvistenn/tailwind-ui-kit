<template>
    <img
        v-if="localComponent.tag == 'img'"
        ref="component"
        :src="localComponent.src"
        :is="localComponent.tag"
        :data-key="localComponent.key"
        :draggable="preview ? false : true"
        :droppable="preview ? false : localComponent.droppable"
        :class="getClasses(localComponent.classes)"
        v-bind="localComponent.attributes"
        v-on="{
            click: (e) => openSettings(e, localComponent),
            dragover: preview ? null : (localComponent.droppable ? handleDragOver : null),
            drop: preview ? null : (localComponent.droppable ? handleDrop : null),
            dragstart: preview ? null : (e) => handleDragStart(e),
            dragend: preview ? null : (e) => handleDragEnd(e, localComponent)
        }"
    />
    
    <input
        v-else-if="localComponent.tag == 'input'"
        ref="component"
        :is="localComponent.tag"
        :data-key="localComponent.key"
        :draggable="preview ? false : true"
        :droppable="preview ? false : localComponent.droppable"
        :class="getClasses(localComponent.classes)"
        v-bind="localComponent.attributes"
        v-on="{
            click: (e) => openSettings(e, localComponent),
            dragover: preview ? null : (localComponent.droppable ? handleDragOver : null),
            drop: preview ? null : (localComponent.droppable ? handleDrop : null),
            dragstart: preview ? null : (e) => handleDragStart(e),
            dragend: preview ? null : (e) => handleDragEnd(e, localComponent)
        }"
    />
    
    <path
        v-else-if="localComponent.tag == 'path'"
        ref="component"
        :is="localComponent.tag"
        :data-key="localComponent.key"
        :draggable="preview ? false : true"
        :droppable="preview ? false : localComponent.droppable"
        :class="getClasses(localComponent.classes)"
        v-bind="localComponent.attributes"
        v-on="{
            click: (e) => openSettings(e, localComponent),
            dragover: preview ? null : (localComponent.droppable ? handleDragOver : null),
            drop: preview ? null : (localComponent.droppable ? handleDrop : null),
            dragstart: preview ? null : (e) => handleDragStart(e),
            dragend: preview ? null : (e) => handleDragEnd(e, localComponent)
        }"
    />
    
    <component
        v-else
        ref="component"
        :is="localComponent.tag"
        :data-key="localComponent.key"
        :draggable="preview ? false : localComponent.draggable"
        :droppable="preview ? false : localComponent.droppable"
        :class="getClasses(localComponent.classes)"
        v-bind="localComponent.attributes"
        v-on="{
            mouseover: (e) => preview ? null : showOverlay(),
            mouseout: (e) => preview ? null : hideOverlay(),
            click: (e) => preview ? null : openSettings(e, localComponent),
            dragover: preview ? null : (localComponent.droppable ? handleDragOver : null),
            drop: preview ? null : (localComponent.droppable ? handleDrop : null),
            dragstart: preview ? null : (e) => handleDragStart(e),
            dragend: preview ? null : (e) => handleDragEnd(e, localComponent)
        }"
    >
        <DynamicComponent
            v-if="localComponent.children && localComponent.children.length > 0"
            v-for="(child, index) in localComponent.children"
            :key="index"
            :component="child"
            :handleDrop="handleDrop"
            :handleDragOver="handleDragOver"
            :handleDragStart="handleDragStart"
            :handleDragEnd="handleDragEnd"
            :preview="preview"
        />
        {{ localComponent.text ? localComponent.text : '' }}
    </component>

    <div
        ref="overlay"
        v-if="component.draggable && !preview"
        :class="{'hidden': !overlay }"
        class="border border-dashed border-blue-600 absolute -translate-y-full pointer-events-none">
        <div class="bg-blue-600 rounded-t text-white font-light text-xs px-1.5 py-1 leading-none w-fit absolute bottom-full left-0">
            {{ localComponent.label }}
        </div>
    </div>

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
    mounted() {
        if(!this.component.draggable || this.preview) return;

        const setOverlayDimensions = () => {
            
            const overlay = this.$refs.overlay;
            const component = this.$refs.component;
            
            if(component.offsetHeight == 0) {
                setTimeout(() => {
                    setOverlayDimensions();
                }, 100);
                return;
            } else {
                overlay.style.width = component.offsetWidth + 'px';
                overlay.style.height = component.offsetHeight + 'px';
            }
        };

        setOverlayDimensions();

    },
    data() {
        return {
            localComponent: JSON.parse(JSON.stringify(this.component)),
            overlay: false,
        };
    },
    methods: {
        getClasses(classes) {
            
            if(!classes) return result;
            
            var result = [];
            var classes = classes.split(' ');
            classes.forEach((item) => {
                if (item.indexOf('hover:') == -1) {
                    result.push(item);
                }
            });

            if(classes.indexOf('cursor-pointer') == -1 && !this.preview) {
                result.push('cursor-pointer');
            }

            return result;
        },
        showOverlay() {
            this.overlay = true;
        },
        hideOverlay() {
            this.overlay = false;
        },
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