<script>
	import { writable } from 'svelte/store';
	import { SvelteFlow, Controls, Background, BackgroundVariant, MiniMap } from '@xyflow/svelte';

	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';

	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	const nodes = writable([
		{
			id: '1',
			type: 'input',
			data: { label: 'Node' },
			position: { x: 0, y: 0 }
		},
		{
			id: '2',
			type: 'default',
			data: { label: 'Node' },
			position: { x: 0, y: 100 }
		},
		{
			id: '3',
			type: 'default',
			data: { label: 'Node' },
			position: { x: 0, y: 200 }
		}
	]);

	// same for edges
	const edges = writable([
		{
			id: '1-2',
			type: 'default',
			source: '1',
			target: '2'
		},
		{
			id: '1-3',
			type: 'default',
			source: '2',
			target: '3'
		}
	]);

	const snapGrid = [20, 15];
</script>

<!--
👇 By default, the Svelte Flow container has a height of 100%.
This means that the parent container needs a height to render the flow.
-->
<div class="">Test</div>
<div class="w-5/6 aspect-video">
	<SvelteFlow
		{nodes}
		{edges}
		{snapGrid}
		fitView
		proOptions={{ hideAttribution: true }}
		class="bg-primary-content"
		on:nodeclick={(event) => console.log('on node click', event.detail.node)}
	>
		<!-- <Controls /> -->
		<Background variant={BackgroundVariant.Dots} />
		<!-- <MiniMap /> -->
	</SvelteFlow>
</div>
