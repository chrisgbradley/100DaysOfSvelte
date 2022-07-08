<script lang="ts">
    import { onMount } from 'svelte';
    import { fly, fade } from 'svelte/transition';

    export let refresh;

</script>


{#key refresh}
    <div 
        in:fly={{ delay: 300, duration: 250, x: 50, }} 
        out:fly={{ duration: 250,  x: -50, }} >
        <slot />
    </div>
{/key}