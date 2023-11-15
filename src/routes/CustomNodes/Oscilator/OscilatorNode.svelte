<script>
	import { Handle, Position } from '@xyflow/svelte';
	import Oscilator from './Oscilator.svelte';
</script>

<Oscilator />
<Handle type="source" position={Position.Right} />
<Handle type="target" position={Position.Left} />
