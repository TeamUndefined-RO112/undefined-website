<script lang="ts">
    export let secondary: boolean = false;
</script>

<h1 class:secondary={secondary}><slot/></h1>

<style>
    h1 {
        color: var(--default);
        margin: 0;
        
    }

    .secondary {
        font-size: 2.2rem;
        color: inherit;
        font-weight: 600;
    }
</style>