<template>
	<div class="p-6 w-full h-[calc(100%-4rem)]">
		<Playground id="123"
            :fullscreen="true"
		/>
	</div>
</template>

<script>
	import Playground from '@/components/Playground.vue'

	export default {
		name: 'ComponentsView',
		components: {
			Playground
		}
	}
</script>