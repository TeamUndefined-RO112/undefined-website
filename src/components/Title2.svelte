<script lang="ts">
    export let secondary: boolean = false;
</script>

<h1 class:secondary={secondary}><slot/></h1>
<style>
    h1 {
        color: var(--default);
        margin: 0;
        font-size: 2rem;
        color: inherit;
        font-weight: 600;
    }

    .secondary {
        font-size: 1.2rem;
        color: inherit;
        font-weight: 300;
    }
</style>