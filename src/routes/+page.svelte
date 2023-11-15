<script>
	import { SvelteFlowProvider } from '@xyflow/svelte';
	import Sidebar from './Sidebar.svelte';

	import Flow from './Flow.svelte';
</script>

<SvelteFlowProvider>
	<div class="flex">
		<div class="w-60">
			<Sidebar />
		</div>
		<div class="grow">
			<Flow />
		</div>
	</div>
</SvelteFlowProvider>
