<script lang="ts">
    import sponsors from './sponsors.json';
    import Sponsor from "./Sponsor.svelte";
    import Title from "./Title.svelte";
</script>

{#if sponsors.length>0} 
{#each sponsors as sponsor }
    <Sponsor image={sponsor.src} text={sponsor.name}></Sponsor>
{/each}
{:else}
<Title secondary>No sponsors... :(</Title>
{/if}