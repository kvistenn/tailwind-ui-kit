<template>
    <div ref="customizetheme" :class="{ 'open': isOpen }" class="group w-10 h-10 [&.open]:h-9 [&.open]:my-0.5 transition-all relative">
        <button @click="isOpen = !isOpen" class="w-full h-full px-2 appearance-none rounded-xl hover:bg-white/15 group-[&.open]:bg-white group-[&.open]:rounded-b-none transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-full w-full group-[&.open]:text-black transition-colors">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </button>
        <div class="w-[200px] px-5 py-4 bg-white text-black shadow-md absolute top-full right-0 rounded-xl origin-top-right scale-0 opacity-0 pointer-events-none group-[&.open]:scale-100 group-[&.open]:opacity-100 group-[&.open]:pointer-events-auto group-[&.open]:rounded-tr-none transition-all">
            <form class="flex flex-col gap-4">
                <ToggleInput label="Dark mode" :setValue="settings.toggleDarkMode" :value="settings.darkMode" />
                <div class="flex flex-col gap-2">
                    <span class="text-xs uppercase">Colors</span>
                    <ColorInput label="Primary" :setValue="settings.setPrimaryColor" :value="settings.primaryColor" />
                    <ColorInput label="Secondary" :setValue="settings.setSecondaryColor" :value="settings.secondaryColor" />
                </div>
                <label class="flex flex-col gap-2">
                    <span class="text-xs uppercase">Thickness</span>
                    <SelectInput label="Choose" :items="settings.thicknessItems" :setValue="settings.setThickness" :value="settings.thickness" />
                </label>
                <label class="flex flex-col gap-2">
                    <span class="text-xs uppercase">Fonts</span>
                    <SelectInput :items="fonts" label="Headings" />
                    <SelectInput :items="fonts" label="Body" />
                </label>
            </form>
        </div>
    </div>
</template>

<script>
    import ToggleInput from './ToggleInput.vue';
    import ColorInput from './ColorInput.vue';
    import SelectInput from './SelectInput.vue';

    import { useSettingsStore } from '../stores/settings.js';

    export default {
        setup() {
            const settings = useSettingsStore();
            return {
                settings,
            }
        },
        components: {
            ToggleInput,
            ColorInput,
            SelectInput,
        },
        data() {
            return {
                isOpen: false,
                thickness: [
                    { value: 'thin', label: 'Thin' },
                    { value: 'normal', label: 'Normal' },
                    { value: 'thick', label: 'Thick' }
                ],
                fonts: [
                    { value: 'sans-serif', label: 'Sans-serif' },
                    { value: 'serif', label: 'Serif' },
                    { value: 'monospace', label: 'Monospace' }
                ]
            }
        },
        mounted() {
            document.addEventListener('click', this.close);
        },
        beforeUnmount() {
            document.removeEventListener('click', this.close);
        },
        methods: {
            toggleOpen(event) {
                this.isOpen = !this.isOpen;
            },
            close(event) {
                if (!this.$refs.customizetheme.contains(event.target)) {
                    this.isOpen = false;
                }
            },
        },
    }
</script>