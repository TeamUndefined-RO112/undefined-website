<script lang="ts">
import Button from "../components/Button.svelte";
import Content from "../components/Content.svelte";
import Member from "../components/Member.svelte";
import TextBox from "../components/TextBox.svelte";
import Title from "../components/Title.svelte";
import members from '../members.json';
import {scale} from 'svelte/transition'
let year: number = 2021;



</script>



<Content column uncentered big>
    <Title>Our Team</Title>
    <Title secondary>Meet us!</Title>
    <TextBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TextBox>
</Content>


<Content column>
    <Title secondary>Year</Title>
    <Content>
        <Button small on:click={() => {if(year>2018) year--; if(year==2019) year--;}}>-</Button>
        <p>{year}</p>
        <Button small on:click={() => {if(year<2023) year++; if(year==2019) year++;}}>+</Button>
    </Content>
</Content>

<Content big wrap>
    {#if members[year]}
        {#each members[year] as member }
        <div in:scale out:scale>
            <Member member={member}></Member>
        </div>
        {/each}
    {/if}

</Content>

<style lang="scss">

</style>