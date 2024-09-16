<script lang="ts">
    import sponsors from './sponsors.json';
    import Sponsor from "./Sponsor.svelte";
    import Title from "./Title.svelte";
    import PartList from "./PartList.svelte";
    import FieldPartsList from "./FieldPartsList.svelte"; // Import component for field parts
    import parts from './parts.json'; // Import data for robot parts
    import fieldParts from './fieldParts.json'; // Import data for field parts
</script>

<section>
    <!-- Lista de sponsori -->
    <div class="sponsor-list">
        {#if sponsors.length > 0} 
            {#each sponsors as sponsor}
                <Sponsor image={sponsor.src} text={sponsor.name}></Sponsor>
            {/each}
        {:else}
            <Title secondary>No sponsors... :(</Title>
        {/if}
    </div>

    <!-- Lista de piese necesare pentru robot -->
    <h2>Robot Parts Needed</h2>
    <PartList parts={parts}></PartList>

    <!-- Lista de piese de câmpuri necesare -->
    <h2>Field Parts Needed</h2>
    <FieldPartsList fieldParts={fieldParts}></FieldPartsList>
</section>

<style>
    h2 {
        margin-top: 200px;
        font-size: 3em;
        text-align: center;
        font-family: 'Georgia', serif;
        font-weight: bold;
        color: #333;
    }

    .sponsor-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
    }
</style>

