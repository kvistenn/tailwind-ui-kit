<template>

    <div class="flex flex-col border border-gray-200 rounded-lg p-2 gap-2">
        <div class="flex justify-between leading-none">
            <div class="flex gap-2">
                <button @click="toggle = !toggle" :class="toggle ? ' open' : null" class="w-8 h-8 overflow-hidden rounded-md border border-gray-200 appearance-none group hover:border-gray-400 transition-colors">
                    <span class="block w-full h-full p-2 group-[&.open]:-translate-y-full transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </span>
                    <span class="block w-full h-full p-2 group-[&.open]:-translate-y-full transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </span>
                </button>
                <button @click="copyCode" :class="copied ? ' copied' : ''" class="h-8 px-3 overflow-hidden leading-none rounded-md border border-gray-200 appearance-none group hover:border-gray-400 transition-colors">
                    <span class="text-xs leading-none uppercase flex items-center h-full group-[&.copied]:-translate-y-full transition-transform">
                        Copy
                    </span>
                    <span class="text-xs leading-none uppercase flex items-center justify-center h-full w-full group-[&.copied]:-translate-y-full transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </span>
                </button>
            </div>
            <div class="flex gap-2">
                <button @click="device = 0" :class="device == 0 ? ' open' : null" class="w-8 h-8 rounded-md border border-gray-200 appearance-none hover:border-gray-400 [&.open]:border-black transition-colors">
                    <span class="block w-full h-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                    </span>
                </button>
                <button @click="device = 1" :class="device == 1 ? ' open' : null" class="w-8 h-8 rounded-md border border-gray-200 appearance-none hover:border-gray-400 [&.open]:border-black transition-colors">
                    <span class="block w-full h-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </span>
                </button>
                <button @click="device = 2" :class="device == 2 ? ' open' : null" class="w-8 h-8 rounded-md border border-gray-200 appearance-none hover:border-gray-400 [&.open]:border-black transition-colors">
                    <span class="block w-full h-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        <div v-show="!toggle" @dragover="conditionalPreventDragover" :droppable="!preview" @drop="handleDrop" class="block p-4 viewer min-h-36 rounded-md border border-gray-200 dark:border-none dark:bg-gray-900">
            <div ref="preview" class="w-full h-full flex flex-wrap items-start mx-auto transition-all" :class="[' ' + gap, device == 0 ? ' max-w-screen-xl' : device == 1 ? ' max-w-screen-md' : device == 2 ? ' max-w-screen-xs' : null]">
                <dynamic-component v-for="item in items" :component="item" :preview="preview" v-if="items" :handleDrop="preview ? null : handleDrop" :handleDragOver="preview ? null : handleDragOver" :handleDragStart="preview ? null : handleDragStart" :handleDragEnd="preview ? null : handleDragEnd" :draggable="preview ? false : true" :droppable="preview ? false : true" />
            </div>
        </div>
        <div v-show="toggle" class="block">
            <VCodeBlock
                :code="htmlCode"
                highlightjs
                lang="html"
                codeBlockRadius="0.375rem"
            />
        </div>
    </div>

</template>

<script>

    import DynamicComponent from '@/components/DynamicComponent.vue';
    import VCodeBlock from '@wdns/vue-code-block';
    import { useSettingsStore } from '@/stores/settings.js';

    export default {
        name: 'Playground',
        props: {
            id: {
                type: String,
                default: '',
            },
            components: {
                type: Array,
                default: () => [],
            },
            gap: {
                type: String,
                default: 'gap-4',
            },
            preview: {
                type: Boolean,
                default: false,
            },
        },
        components: {
            DynamicComponent,
        },
        setup() {
            const settings = useSettingsStore();
            return {
                closeSettings: settings.closeSettings,
            };
        },
        data() {
            return {
                toggle: false,
                device: 0,
                htmlCode: '',
                copied: false,
                items: [],
                dragOverTarget: null,
            }
        },
        methods: {
            toggleDevice(device) {
                this.device = device;
            },
            toggleCode() {
                this.toggle = !this.toggle;
            },
            copyCode() {
                navigator.clipboard.writeText(this.htmlCode).then(() => {
                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 1000);
                });
            },
            handleDragOver(e) {
                e.preventDefault();

                const target = e.target;
                const targetKey = target.getAttribute('data-key');
                
                if(target.hasAttribute('droppable')) {
                    this.dragOverTarget = targetKey;
                } else {
                    this.dragOverTarget = null;
                }
            },
            handleDrop(e) {
                e.stopPropagation();
                
                const data = e.dataTransfer.getData('component');
                const component = JSON.parse(data);
                const targetKey = this.dragOverTarget;

                this.addUniqueKey([component]);

                if(targetKey == e.target.getAttribute('data-key')) {

                    // Search for item.key == targetKey in components and children
                    const findItem = (items, targetKey) => {
                        for(let i = 0; i < items.length; i++) {
                            if(items[i].key == targetKey) {
                                return items[i];
                            }
                            if(items[i].children) {
                                const found = findItem(items[i].children, targetKey);
                                if(found) {
                                    return found;
                                }
                            }
                        }
                    }

                    const target = findItem(this.items, targetKey);
                    
                    if(target) {
                        if(target.children) {
                            target.children.push(component);
                        } else {
                            target.children = [component];
                        }
                    }
                } else {
                    this.items.push(component);
                }

                this.saveItemsToLocalStorage();
            },
            handleDragStart(e) {
                e.stopPropagation();
                
                const dragKey = e.target.getAttribute('data-key');

                // Find dragKey in items[x].key and items[x].children[x].key
                const findKey = (items, dragKey) => {
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].key === dragKey) {
                            return items[i];
                        }
                        if (items[i].children) {
                            const found = findKey(items[i].children, dragKey);
                            if (found) {
                                return found;
                            }
                        }
                    }
                }

                const targetItem = findKey(this.items, dragKey);
                e.dataTransfer.setData('component', JSON.stringify(targetItem));
            },
            handleDragEnd(e) {
                e.preventDefault();
                const dragKey = e.target.getAttribute('data-key');
                const findKeyAndRemove = (items, dragKey) => {
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].key === dragKey) {
                            return items.splice(i, 1);
                        }
                        if (items[i].children) {
                            const found = findKeyAndRemove(items[i].children, dragKey);
                            if (found) {
                                return found;
                            }
                        }
                    }
                }
                findKeyAndRemove(this.items, dragKey);

                this.saveItemsToLocalStorage();
            },
            randomizeUniqueKey() {
                return Math.random().toString(36).substr(2, 9);
            },
            addUniqueKey(components) {
                components.forEach((component, index) => {
                    component.key = this.randomizeUniqueKey();
                    if (component.children) {
                        for(let i = 0; i < component.children.length; i++) {
                            component.children[i].key = this.randomizeUniqueKey();
                        }
                    }
                });
            },
            saveItemsToLocalStorage() {
                localStorage.setItem('playground_' + this.id, JSON.stringify(this.items));
            },
            conditionalPreventDragover(e) {
                if (!this.preview) {
                    e.preventDefault();
                }
            },
        },
        mounted() {

            const components = this.components;

            this.addUniqueKey(components);

            if(localStorage.getItem('playground_' + this.id)) {
                this.items = JSON.parse(localStorage.getItem('playground_' + this.id));
            } else {
                this.items = components;
            }
        },
    }
</script>