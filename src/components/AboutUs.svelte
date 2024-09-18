<script lang="ts">
    import Button from "./Button.svelte";
    import Content from "./Content.svelte";
    import Member from "./Member.svelte";
    import Title from "./Title.svelte";
    import Title2 from "./Title2.svelte";
    import members from './members.json';
    let year: number = 2024;
</script>

<Content column big>
    <Title2> Join Us in Building the Future with Team Undefined!</Title2>
    <br/>
    <Title2 secondary>
        <p><b>Hey there!</b></p>
        <br/>
        <p>We're <b style="color:darkgreen; font-weight:800">Team Undefined</b>, a high school robotics team from <a class="linkundefined" href="https://www.bing.com/maps?FORM=Z9LH2&cp=45.126142%7E25.734515&lvl=19.8" target="_blank" rel="noreferrer">Campina, Romania, Grigorescu Highschool</a> and we're gearing up for this year's <b><a class="linkundefined" href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noreferrer">FIRST Tech Challenge (FTC)!</a></b> 🚀</p> 
        <br/>
        <p>We're a group of passionate students who LOVE building robots and solving tough challenges. This isn't just about competing... it's about learning awesome skills in STEM, working as a team, and finding creative solutions to real-world problems. From coding and designing to hands-on building, we’re all in – and having a blast while doing it!</p>
        <br/>
        <div class="divcenter"><img src="/img/home/piulitza.jpeg" title="Team Undefined" width="500" style="align:center"/></div>
        <br/>
        <p><b>Our goal?</b></p>
        <p>To make an impact, not just in the competition, but by growing as future engineers, programmers, and innovators.</p>
        <p><b>We’re excited, determined, and can’t wait to show the world what we can do!</b></p>
        <br />
        <br/>
        <p>Thanks for checking us out – let’s build something amazing together!</p>
        <br/>
        <p>– Team Undefined 🤖✨</p>
    </Title2>
    <br/>
    <Title secondary>Meet Our Team</Title>
    <div class="flex justify-center items-center gap-2">
        <b>Year:</b>&nbsp;
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