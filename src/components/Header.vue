<script setup>
  import { RouterLink } from 'vue-router'
  import Logo from './Logo.vue'
  import Settings from './Settings.vue'
</script>

<template>
  <div class="sticky top-6 z-50 w-full">
    <div class="container mx-auto px-4 mt-6">
      <header class="w-full bg-gray-900 text-white py-2 pl-6 pr-4 rounded-full flex items-center justify-between">
        <Logo classes="h-4 w-auto fill-white" />
        <nav>
          <ul class="flex items-center gap-4">
            <li><RouterLink to="/" class="text-xs uppercase font-bold">Start</RouterLink></li>
            <li><span class="text-white/20 font-light">/</span></li>
            <li><RouterLink to="/components" class="text-xs uppercase font-bold">Components</RouterLink></li>
          </ul>
        </nav>
        <Settings />
      </header>
    </div>
  </div>
</template>