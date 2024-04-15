<template>
	<div class="container my-10 space-y-8">
		<Viewer
			:components="[
				button,
			]"
		/>
	</div>
</template>

<script>
	import Viewer from '@/components/Viewer.vue'
	import button from '@/json/components/button.json';
	import input from '@/json/components/input.json';

	export default {
		name: 'ComponentsView',
		components: {
			Viewer
		},
		data() {
            return {
                button,
				input,
            }
        }
	}
</script>