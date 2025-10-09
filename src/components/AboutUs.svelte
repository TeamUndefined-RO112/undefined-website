<script lang="ts">
    import Button from "./Button.svelte";
    import Content from "./Content.svelte";
    import Member from "./Member.svelte";
    import Title from "./Title.svelte";
    import Title2 from "./Title2.svelte";
    import TextBox from "./TextBox.svelte";
    import members from './members.json';
    let year: number = 2025;
</script>

<Content column big>
    <Title2> Join Us in <span style="color: rgb(81, 146, 89);">Building the Future</span> with Team Undefined!</Title2>
    <br/>
    <TextBox>
        <p><b>Hey there!</b></p>
        <br/>
        <p>We're <b style="color:darkgreen; font-weight:800">Team Undefined</b>, a high school robotics team from <a class="linkundefined" href="https://www.bing.com/maps?FORM=Z9LH2&cp=45.126142%7E25.734515&lvl=19.8" target="_blank" rel="noreferrer">Campina, Romania, Grigorescu Highschool</a> and we're gearing up for this year's <b><a class="linkundefined" href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noreferrer">FIRST Tech Challenge (FTC)!</a></b> 🚀</p>
        <br/>
        <p>We're a group of passionate students who LOVE building robots and solving tough challenges. This isn't just about competing... it's about learning awesome skills in STEM, working as a team, and finding creative solutions to real-world problems. From coding and designing to hands-on building, we're all in – and having a blast while doing it!</p>
        <br/>
        <div class="robotic-image-container">
            <div class="corner-accent top-left"></div>
            <div class="corner-accent top-right"></div>
            <div class="corner-accent bottom-left"></div>
            <div class="corner-accent bottom-right"></div>
            <div class="accent-border-left"></div>
            <div class="accent-border-right"></div>
            <img src="/img/home/piulitza.jpeg" title="Team Undefined" alt="Team Undefined Robot"/>
            <div class="image-overlay"></div>
        </div>
        <br/>
        <p><b>Our goal?</b></p>
        <p>To make an impact, not just in the competition, but by growing as future engineers, programmers, and innovators.</p>
        <p><b>We're excited, determined, and can't wait to show the world what we can do!</b></p>
        <br />
        <br/>
        <p>Thanks for checking us out – let's build something amazing together!</p>
        <br/>
        <p>– Team Undefined 🤖✨</p>
    </TextBox>
    <br/>
    <br/>

    <Title2><span style="color: rgb(81, 146, 89);">2024 Season</span> Results</Title2>
    <br/>
    <TextBox>
        <p>We're proud of our achievements in the 2024-2025 FIRST Tech Challenge season! Here's what we accomplished:</p>
        <br/>
        <p><b style="color: rgb(81, 146, 89); font-size: 1.2rem;">Season Record: 13 Wins - 3 Losses</b></p>
        <br/>
        <p><b>Competitions Attended:</b></p>
        <ul style="margin-left: 20px; margin-top: 10px;">
            <li>🏆 <b>Zilele Roboticii#3</b> (November 23, 2024)</li>
            <li>🏆 <b>Meet Quantum Robotics</b> (December 15, 2024)</li>
            <li>🏆 <b>Hansei WaveZ</b> (January 5, 2025)</li>
            <li>🏆 <b>StarBloom</b> (January 25, 2025)</li>
            <li>🏆 <b>Meet Eastern Foxes</b> (February 1, 2025)</li>
            <li>🏆 <b>South Romania League Tournament</b> (February 7-9, 2025) - <b style="color: rgb(81, 146, 89);">Ranked 18th out of 58 teams</b></li>
        </ul>
        <br/>
        <p><b style="color: gold;">🏅 Awards:</b></p>
        <p style="margin-left: 20px; margin-top: 10px;"><b>Judges' Choice Award</b> at South Romania League Tournament</p>
        <br/>
        <p>Check out our full competition history on <b><a class="linkundefined" href="https://ftc-events.firstinspires.org/2024/team/19112" target="_blank" rel="noreferrer">FIRST Tech Challenge Events</a></b></p>
    </TextBox>
    <br/>
    <br/>

    <Title secondary>Meet Our Team</Title>
    <div class="flex justify-center items-center gap-2">
        <b>Year:</b>&nbsp;
        <Button small on:click={() => {if(year>2018) year--; if(year==2019) year--;if(year==2022) year--;}}>-</Button>
        <p>{year}</p>
        <Button small on:click={() => {if(year<2025) year++; if(year==2019) year++;if(year==2022) year++;}}>+</Button>
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

<style>
.robotic-image-container {
    position: relative;
    max-width: 600px;
    margin: 2rem auto;
    padding: 20px;
    background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(18, 18, 18, 0.98) 100%);
    border: 2px solid rgba(81, 146, 89, 0.3);
    clip-path: polygon(
        0 0,
        calc(100% - 20px) 0,
        100% 20px,
        100% 100%,
        20px 100%,
        0 calc(100% - 20px)
    );
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
}

.robotic-image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(81, 146, 89, 0.1), transparent);
    transition: left 0.6s ease;
    z-index: 2;
}

.robotic-image-container:hover::before {
    left: 100%;
}

.robotic-image-container:hover {
    transform: translateY(-5px);
    border-color: rgba(81, 146, 89, 0.6);
    box-shadow: 0 15px 50px rgba(81, 146, 89, 0.3),
                0 0 30px rgba(81, 146, 89, 0.15);
}

/* Corner accents */
.corner-accent {
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid rgba(81, 146, 89, 0.5);
    transition: all 0.3s ease;
    z-index: 3;
}

.corner-accent.top-left {
    top: 10px;
    left: 10px;
    border-right: none;
    border-bottom: none;
}

.corner-accent.top-right {
    top: 10px;
    right: 10px;
    border-left: none;
    border-bottom: none;
}

.corner-accent.bottom-left {
    bottom: 10px;
    left: 10px;
    border-right: none;
    border-top: none;
}

.corner-accent.bottom-right {
    bottom: 10px;
    right: 10px;
    border-left: none;
    border-top: none;
}

.robotic-image-container:hover .corner-accent {
    border-color: rgba(81, 146, 89, 0.9);
    width: 20px;
    height: 20px;
}

/* Accent borders on sides */
.accent-border-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: rgba(81, 146, 89, 0.4);
    transition: width 0.3s ease;
    z-index: 2;
}

.accent-border-right {
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: rgba(81, 146, 89, 0.4);
    transition: width 0.3s ease;
    z-index: 2;
}

.robotic-image-container:hover .accent-border-left,
.robotic-image-container:hover .accent-border-right {
    width: 6px;
}

.robotic-image-container img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
    border: 2px solid rgba(81, 146, 89, 0.3);
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
}

.robotic-image-container:hover img {
    border-color: rgba(81, 146, 89, 0.6);
    transform: scale(1.02);
}

.image-overlay {
    position: absolute;
    inset: 20px;
    background: linear-gradient(135deg, rgba(81, 146, 89, 0.15) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 2;
    border-radius: 4px;
}

.robotic-image-container:hover .image-overlay {
    opacity: 1;
}

/* Responsive */
@media screen and (max-width: 640px) {
    .robotic-image-container {
        max-width: 100%;
        margin: 1rem auto;
        padding: 15px;
    }

    .corner-accent {
        width: 12px;
        height: 12px;
    }

    .robotic-image-container:hover .corner-accent {
        width: 15px;
        height: 15px;
    }
}
</style>