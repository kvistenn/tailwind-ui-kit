<template>
    <div class="p-6 w-full h-full overflow-y-auto bg-white shadow-xl">
        <slot />
    </div>
</template>

<script>

import ComponentList from '@/components/ComponentList.vue'

export default {
    name: 'Sidebar',
}
</script>