<script>
	import Oscilator from './CustomNodes/Oscilator/Oscilator.svelte';
	import Pitch from './CustomNodes/Pitch/Pitch.svelte';
	import Trigger from './CustomNodes/Trigger/Trigger.svelte';
	import Out from './CustomNodes/Out/Out.svelte';
	const nodeTypes = [Oscilator, Pitch, Trigger, Out];

	const onDragStart = (event, nodeType) => {
		if (!event.dataTransfer) {
			return null;
		}
		event.dataTransfer.setData('application/svelteflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};
</script>

<div class="bg-base-200 p-4 h-screen flex flex-col items-center">
	<div class="text-sm mb-4">Drag nodes from here:</div>
	{#each nodeTypes as type}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			id={'drag-oscilator}'}
			class=" mb-2 cursor-move w-fit"
			draggable="true"
			on:dragstart={(event) => onDragStart(event, type.name.split('<')[1].split('>')[0])}
		>
			<svelte:component this={type} />
		</div>
	{/each}
</div>
