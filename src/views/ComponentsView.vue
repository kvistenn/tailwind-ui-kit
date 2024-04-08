<template>
	<div class="container my-10 space-y-8">
		<Playground id="1" :preview="true" />
		<Playground id="2"
			:components="[
				grid
			]"
		/>
	</div>
</template>

<script>
	import Playground from '@/components/Playground.vue'
	import button from '@/uikit/button.json';
	import input from '@/uikit/input.json';
	import grid from '@/uikit/grid.json';

	export default {
		name: 'ComponentsView',
		components: {
			Playground
		},
		data() {
            return {
                button,
				input,
				grid
            }
        }
	}
</script>