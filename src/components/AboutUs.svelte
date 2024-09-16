<script lang="ts">
    import Button from "./Button.svelte";
    import Content from "./Content.svelte";
    import Member from "./Member.svelte";
    import Title from "./Title.svelte";
    import members from './members.json';
    let year: number = 2024;
</script>

<Content column big>
    <Title>Our Team</Title>
    <Title secondary>Year</Title>
    <div class="flex justify-center items-center gap-2">
        <Button small on:click={() => {if(year>2018) year--; if(year==2019) year--;if(year==2022) year--;}}>-</Button>
        <p>{year}</p>
        <Button small on:click={() => {if(year<2024) year++; if(year==2019) year++;if(year==2022) year++;}}>+</Button>
    </div>
</Content>


<Content wrap big>
    {#if members[year]}
        {#each members[year] as member }
            <Member member={member}></Member>
        {/each}
    {:else}
     <p>Members not yet established!</p>
    {/if}

</Content>