<script lang="ts">
    export let small:boolean = false;
    export let noclick:boolean = false;
</script>
{#if noclick}
<button class:small={small}><slot/></button>
{:else}
<button class:small={small} on:click|preventDefault><slot/></button>
{/if}

<style>

button {
    padding: 15px 30px;

    border-color: var(--default);
    border-style: solid;
    border-radius: 8px;
    border-width: 1px;


    background-color: rgb(65, 139, 71);
    color: white;

    
    font-size: 1em;
    font-family: 'Noto Sans';
    font-weight: 300;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.2s;
}

button:hover {
        background: none;
        color:initial;
    }

.small {
    padding: 5px 15px;
}
</style>