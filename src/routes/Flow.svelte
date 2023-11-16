<script>
	import '@xyflow/svelte/dist/style.css';
	import { nodes, edges, getID } from './nodes-and-edges';
	import OscilatorNode from './CustomNodes/Oscilator/OscilatorNode.svelte';
	import PitchNode from './CustomNodes/Pitch/PitchNode.svelte';
	import TriggerNode from './CustomNodes/Trigger/TriggerNode.svelte';
	import OutNode from './CustomNodes/Out/OutNode.svelte';

	import {
		Position,
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		useSvelteFlow
	} from '@xyflow/svelte';

	const nodeTypes = {
		Oscilator: OscilatorNode,
		Pitch: PitchNode,
		Trigger: TriggerNode,
		Out: OutNode
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

		const type = event.dataTransfer.getData('application/svelteflow');
		console.log(type);

		const position = screenToFlowPosition({
			x: event.clientX,
			y: event.clientY
		});

		const newNode = {
			id: `${getID()}`,
			type,
			position,
			data: { label: `${type} node` },
			origin: [0, 0],
			sourcePosition: Position.Right,
			targetPosition: Position.Left
		};
		console.log(newNode.id);
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
		connectionLineType="smoothstep"
		defaultEdgeOptions={{ type: 'smoothstep' }}
		fitView
		proOptions={{ hideAttribution: true }}
		class="bg-base-100"
		on:nodeclick={(event) => console.log('on node click', event.detail.node)}
	>
		<Controls />
		<Background variant={BackgroundVariant.Dots} />
	</SvelteFlow>
</div>
