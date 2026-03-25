<script>
    import "../app.css";
    import "$lib/style/default.css"
    import "$lib/style/monochromatic.css"
    import "$lib/style/CUSTOM.css"
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

{@render children?.()}