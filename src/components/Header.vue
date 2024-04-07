<template>
  <div class="sticky top-6 z-30 w-full">
    <div class="container">
      <header class="w-full bg-gray-900 h-14 text-white py-2 px-6 rounded-full flex items-center">
        <div class="flex-1 flex items-center">
          <Logo classes="h-5 w-auto fill-white" />
        </div>
        <nav class="flex-auto flex justify-center items-center">
          <ul class="flex items-center gap-4">
            <li><RouterLink to="/" class="text-xs uppercase font-bold">Start</RouterLink></li>
            <li><span class="text-white/20 font-light">/</span></li>
            <li><RouterLink to="/components" class="text-xs uppercase font-bold">Components</RouterLink></li>
          </ul>
        </nav>
        <div class="flex-1 flex justify-end items-center">
          <button @click="toggleSidebar" class="w-6 h-6 flex items-center justify-center relative focus:outline-none cursor-pointer">
            <div class="block w-5 h-[14px] relative">
              <span aria-hidden="true" class="block w-5 h-[1px] absolute top-0 bg-white transition-all origin-center duration-500" :class="{'rotate-45 -translate-y-1/2 top-1/2': sidebarOpen }"></span>
              <span aria-hidden="true" class="block w-5 h-[1px] absolute top-1/2 -translate-y-1/2 bg-white transition-transform duration-500" :class="{'scale-x-0': sidebarOpen } "></span>
              <span aria-hidden="true" class="block w-5 h-[1px] absolute bottom-0 bg-white transition-all origin-center duration-500" :class="{'-rotate-45 translate-y-1/2 bottom-1/2': sidebarOpen}"></span>
            </div>
          </button>
        </div>
      </header>
    </div>
  </div>
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