<script>
    import { createBubbler } from 'svelte/legacy';

    const bubble = createBubbler();
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<button onclick={bubble('click')}>
    {@render children?.()}
</button>  