<template>
	<div class="container my-10 space-y-8">
		<Viewer
			:components="[
				hero
			]"
		/>
	</div>
</template>

<script>
	import Viewer from '@/components/Viewer.vue'
	import hero from '@/json/layouts/hero.json';

	export default {
		name: 'LayoutsView',
		components: {
			Viewer
		},
		data() {
            return {
                hero,
            }
        }
	}
</script>