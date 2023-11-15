<script>
	import Pitch from './Pitch.svelte';
	import { Handle, Position } from '@xyflow/svelte';
</script>

<Pitch />
<Handle type="source" position={Position.Right} />
<Handle type="target" position={Position.Left} />
