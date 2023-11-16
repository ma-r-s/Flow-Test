<script>
	import Trigger from './Trigger.svelte';
	import { Handle, Position } from '@xyflow/svelte';
	let target;
</script>

<Trigger />
<Handle
	type="source"
	on:connectend={(params) => {
		target = console.log(params.detail.connection.target);
	}}
	position={Position.Right}
/>
