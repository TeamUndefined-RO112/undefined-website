<script lang="ts">
    export let secondary: boolean = false;
</script>

<h1 class:secondary={secondary}><slot/></h1>

<style>
    h1 {
        color: --default;
        margin: 0;
    }

    .secondary {
        font-size: 1.4em;
        color: inherit;
    }
</style>