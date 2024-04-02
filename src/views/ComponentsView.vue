<template>
	<div class="container my-10 space-y-10">
		<section class="space-y-6">
			<div>
				<h3 class="text-3xl font-bold block mb-3">Buttons</h3>
				<div class="max-w-3xl text-sm space-y-2">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit nibh, sodales a massa sed, varius dignissim est. Integer et tincidunt lectus, non tempor ex.</p>
					<p>Suspendisse vehicula lacus in metus sollicitudin ultrices. Nulla eget faucibus nulla. In hac habitasse platea dictumst.</p>
				</div>
			</div>
			<div class="space-y-4">
				<div class="space-y-2">
					<h4 class="text-xl font-bold block">Outlined</h4>
					<div class="max-w-3xl text-sm space-y-2">
						<p>Suspendisse vehicula lacus in metus sollicitudin ultrices. Nulla eget faucibus nulla. In hac habitasse platea dictumst.</p>
					</div>
				</div>
				<ComponentViewer
					:components="[
						{ component: button, size: 'sm' },
						{ component: button, size: 'md' },
						{ component: button, size: 'lg' }
					]"
				/>
			</div>
		</section>
		
	</div>
</template>

<script>
	import ComponentViewer from '@/components/ComponentViewer.vue'
	import button from '@/kit/button.json';
	import inputtext from '@/kit/inputtext.json';

	export default {
		components: {
			ComponentViewer
		},
		data() {
            return {
                button,
				inputtext
            }
        },
		mounted() {
			console.log(this.button);
			console.log(this.inputtext);
		}
	}
</script>