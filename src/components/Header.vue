<template>
  <header class="w-full h-16 py-2 px-6 flex items-center border-b border-gray-200">
    <div class="flex-1 flex items-center">
      <Logo classes="h-6 w-auto" />
    </div>
    <nav class="flex-auto flex justify-center items-center">
      <ul class="flex items-center gap-4">
        <li><RouterLink to="/" class="text-xs uppercase font-bold">Overview</RouterLink></li>
        <li><span class="text-black/20 font-light">/</span></li>
        <li><RouterLink to="/playground" class="text-xs uppercase font-bold">Playground</RouterLink></li>
        <li><span class="text-black/20 font-light">/</span></li>
        <li><RouterLink to="/layouts" class="text-xs uppercase font-bold">Layouts</RouterLink></li>
        <li><span class="text-black/20 font-light">/</span></li>
        <li><RouterLink to="/components" class="text-xs uppercase font-bold">Components</RouterLink></li>
      </ul>
    </nav>
    <div class="flex-1 flex justify-end items-center">
      <button @click="toggleSidebar" class="w-6 h-6 flex items-center justify-center relative focus:outline-none cursor-pointer">
        <div class="block w-[18px] h-[14px] relative">
          <span aria-hidden="true" class="block w-[18px] h-[1px] absolute top-0 bg-black transition-all origin-center duration-500" :class="{'rotate-45 -translate-y-1/2 top-1/2': sidebarOpen }"></span>
          <span aria-hidden="true" class="block w-[18px] h-[1px] absolute top-1/2 -translate-y-1/2 bg-black transition-transform duration-500" :class="{'scale-x-0': sidebarOpen } "></span>
          <span aria-hidden="true" class="block w-[18px] h-[1px] absolute bottom-0 bg-black transition-all origin-center duration-500" :class="{'-rotate-45 translate-y-1/2 bottom-1/2': sidebarOpen}"></span>
        </div>
      </button>
    </div>
  </header>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import { RouterLink } from 'vue-router'

  export default {
    name: 'Header',
    components: {
      Logo,
      RouterLink
    },
    props: {
      sidebarOpen: Boolean,
      toggleSidebar: Function
    },
  }
</script>