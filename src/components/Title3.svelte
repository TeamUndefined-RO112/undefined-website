<script lang="ts">
    export let secondary: boolean = false;
</script>

<h1 class:secondary={secondary}><slot/></h1>
<style>
    h1 {
        color: var(--default);
        margin: 0;
        font-size: 3.5rem;
        color: inherit;
        font-weight: 600;
        line-height: 1.2;
    }

    .secondary {
        font-size: 1.4rem;
        color: inherit;
        font-weight: 300;
    }

    @media only screen and (max-width: 550px) {
        h1 {
            line-height: 1.1;
        }
    }
</style>