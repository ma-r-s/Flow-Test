<script>
	import { writable } from 'svelte/store';
	import Sidebar from './Sidebar.svelte';
	import {
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		useSvelteFlow
	} from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';

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

	const { screenToFlowPosition } = useSvelteFlow();

	const onDragOver = (event) => {
		event.preventDefault();

		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move';
		}
	};

	const onDrop = (event) => {
		event.preventDefault();

		if (!event.dataTransfer) {
			return null;
		}

		const typ = event.dataTransfer.getData('application/svelteflow');
		console.log(event);

		const position = screenToFlowPosition({
			x: event.clientX,
			y: event.clientY
		});

		const newNode = {
			id: `${Math.random()}`,
			typ,
			position,
			data: { label: `${typ} node` },
			origin: [0.5, 0.0]
		};

		$nodes.push(newNode);
		$nodes = $nodes;
	};
</script>

<div class="w-5/6 aspect-video">
	<SvelteFlow
		on:dragover={onDragOver}
		on:drop={onDrop}
		{nodes}
		{edges}
		fitView
		proOptions={{ hideAttribution: true }}
		class="bg-primary-content"
		on:nodeclick={(event) => console.log('on node click', event.detail.node)}
	>
		<Controls />
		<Background variant={BackgroundVariant.Dots} />
	</SvelteFlow>
	<Sidebar />
</div>
