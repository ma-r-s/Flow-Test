<script>
	import '@xyflow/svelte/dist/style.css';
	import { nodes, edges } from './nodes-and-edges';
	import Oscilator from './CustomNodes/Oscilator.svelte';
	import {
		Position,
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		useSvelteFlow
	} from '@xyflow/svelte';

	const nodeTypes = {
		oscilator: Oscilator
	};
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
			origin: [0.5, 0.0],
			sourcePosition: Position.Right,
			targetPosition: Position.Left
		};

		$nodes.push(newNode);
		$nodes = $nodes;
	};
</script>

<div class="w-full h-screen">
	<SvelteFlow
		on:dragover={onDragOver}
		on:drop={onDrop}
		{nodes}
		{edges}
		{nodeTypes}
		fitView
		proOptions={{ hideAttribution: true }}
		class="bg-base-100"
		on:nodeclick={(event) => console.log('on node click', event.detail.node)}
	>
		<Controls />
		<Background variant={BackgroundVariant.Dots} />
	</SvelteFlow>
</div>
