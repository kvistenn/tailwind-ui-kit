<template>
	<div class="container my-10 space-y-8">
		<Playground
			id="hero1"
			:preview="true"
			:components="[
				hero
			]"
		/>
	</div>
</template>

<script>
	import Playground from '@/components/Playground.vue'
	import hero from '@/uikit/layouts/hero.json';

	export default {
		name: 'LayoutsView',
		components: {
			Playground
		},
		data() {
            return {
                hero,
            }
        }
	}
</script>