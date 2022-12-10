<script lang="ts">
    import Content from "../../../components/Content.svelte";
import Sponsor from "../../../components/Sponsor.svelte";
    import TextBox from "../../../components/TextBox.svelte";
    import Title from "../../../components/Title.svelte";
    import sponsors from './sponsors.json';
</script>

<Content column uncentered big>
    <Title>Our Sponsors</Title>
    <Title secondary>We can't thank them enough!</Title>
    <TextBox>Our sponsors help us reach our goals and aid in developing our robot!</TextBox>
</Content>

<Content wrap>
    {#if sponsors.length>0} 
    {#each sponsors as sponsor }
        <Sponsor image={sponsor.src} text={sponsor.name}></Sponsor>
    {/each}
    {:else}
    <Title secondary>No sponsors... :(</Title>
    {/if}
</Content>

<Content big></Content>

<svelte:head>
    <title>Team Undefined - Sponsors</title>
</svelte:head>

<style lang="scss">
</style>
