<script lang="ts">
import Button from "../components/Button.svelte";
import Content from "../components/Content.svelte";
import Member from "../components/Member.svelte";
import Title from "../components/Title.svelte";
import members from '../members.json';
let year: number = 2021;

/*
PHOTOS
APP FORM
*/
</script>



<Content column big>
    <Title>Our Team</Title>
    <Title secondary>Year</Title>
    <div>
        <Button small on:click={() => {if(year>2018) year--; if(year==2019) year--;}}>-</Button>
        <p>{year}</p>
        <Button small on:click={() => {if(year<2022) year++; if(year==2019) year++;}}>+</Button>
    </div>
</Content>


<Content wrap>
    {#if members[year]}
        {#each members[year] as member }
            <Member member={member}></Member>
        {/each}
    {:else}
     <p>Members not yet established!</p>
    {/if}

</Content>

<svelte:head>
    <title>Team Undefined - About Us</title>
</svelte:head>

<style lang="scss">
    div {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
</style>

