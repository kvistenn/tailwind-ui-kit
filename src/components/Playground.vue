<template>

    <div class="flex flex-col border border-gray-200 rounded-lg p-2 gap-2" :class="{ 'h-full': fullscreen }">
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
        <div v-show="!toggle" @dragover="conditionalPreventDragover" :droppable="!preview" @drop="handleDrop" class="block flex-auto p-4 viewer min-h-36 rounded-md border border-gray-200 dark:border-none dark:bg-gray-900">
            <div ref="preview" @contextmenu.prevent="openContextMenu($event)" class="w-full h-full flex-wrap mx-auto transition-all" :class="[' ' + gap, device == 0 ? ' max-w-full' : device == 1 ? ' max-w-screen-md' : device == 2 ? ' max-w-screen-xs' : null]">
                <dynamic-component v-for="item in items" :component="item" :openContextMenu="openContextMenu" :preview="preview" v-if="items" :handleDrop="preview ? null : handleDrop" :handleDragOver="preview ? null : handleDragOver" :handleDragStart="preview ? null : handleDragStart" :handleDragEnd="preview ? null : handleDragEnd" :draggable="preview ? false : true" :droppable="preview ? false : true" />
                <div v-if="showContextMenu" :style="{ top: `${contextMenuPosition.y}px`, left: `${contextMenuPosition.x}px` }" class="absolute z-50 bg-white rounded-md shadow-lg text-sm text-gray-700 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <ul v-if="this.contextMenuComponent" class="flex">
                        <li>
                            <button class="p-2 hover:bg-gray-50 transition-colors" @click="deleteComponent" aria-label="Delete component">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button class="p-2 hover:bg-gray-50 transition-colors" @click="() => { console.log('duplicate') }" aria-label="Duplicate component">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                </svg>

                            </button>
                        </li>
                        <li>
                            <button class="py-2 px-1 hover:bg-gray-50 transition-colors" @click="() => { console.log('settings') }" aria-label="Duplicate component">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-show="toggle" class="block flex-auto">
            <VCodeBlock
                :code="htmlCode"
                highlightjs
                lang="html"
                codeBlockRadius="0.375rem"
                :class="{ 'fullscreen h-full': fullscreen }"
                :height="fullscreen ? '100%' : 'auto'"
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
                default: [],
            },
            gap: {
                type: String,
                default: 'gap-4',
            },
            preview: {
                type: Boolean,
                default: false,
            },
            fullscreen: {
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
                showContextMenu: false,
                contextMenuComponent: null,
                contextMenuEvent: null,
                contextMenuPosition: { x: 0, y: 0 },
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

                if(targetKey == e.target.getAttribute('data-key') && targetKey != null) {

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
                
                const targetKey = e.target.getAttribute('data-key');

                // Find targetKey in items[x].key and items[x].children[x].key
                const findKey = (items, targetKey) => {
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].key === targetKey) {
                            return items[i];
                        }
                        if (items[i].children) {
                            const found = findKey(items[i].children, targetKey);
                            if (found) {
                                return found;
                            }
                        }
                    }
                }

                const targetItem = findKey(this.items, targetKey);
                e.dataTransfer.setData('component', JSON.stringify(targetItem));
            },
            handleDragEnd(e) {
                e.stopPropagation();

                const targetKey = e.target.getAttribute('data-key');

                const findKeyAndRemove = (items, targetKey) => {
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].key === targetKey) {
                            return items.splice(i, 1);
                        }
                        if (items[i].children) {
                            const found = findKeyAndRemove(items[i].children, targetKey);
                            if (found) {
                                return found;
                            }
                        }
                    }
                }
                findKeyAndRemove(this.items, targetKey);

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
            openContextMenu(event, component) {
                /* let target = event.target;
                while(target && target.getAttribute('draggable') !== 'true') {
                    target = target.parentElement;
                }

                if(target && target.getAttribute('draggable') == 'true') {
                    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
                    this.showContextMenu = true;
                    this.contextMenuComponent = component;
                    this.contextMenuEvent = event;
                    
                    window.addEventListener('click', this.closeContextMenu);
                } */

                this.contextMenuPosition = { x: event.clientX, y: event.clientY };
                this.showContextMenu = true;
                this.contextMenuComponent = component;
                this.contextMenuEvent = event;
                window.addEventListener('click', this.closeContextMenu);
            },
            closeContextMenu() {
                this.showContextMenu = false;
                this.contextMenuComponent = null;
                this.contextMenuEvent = null;

                window.removeEventListener('click', this.closeContextMenu);
            },
            deleteComponent() {
                var targetKey = this.contextMenuComponent.key;
                const findKeyAndRemove = (items, targetKey) => {
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].key === targetKey) {
                            return items.splice(i, 1);
                        }
                        if (items[i].children) {
                            const found = findKeyAndRemove(items[i].children, targetKey);
                            if (found) {
                                return found;
                            }
                        }
                    }
                }

                findKeyAndRemove(this.items, targetKey);
                this.saveItemsToLocalStorage();
                this.closeContextMenu();

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