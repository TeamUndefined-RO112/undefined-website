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
            <img src="/img/gallery/team2024.png" title="Team Undefined 2024" alt="Team Undefined 2024"/>
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

    <Title2>💫 FTC Core Values</Title2>
    <Title secondary>What Guides Team Undefined</Title>
    <br/>
    <TextBox>
        <p style="text-align: center; font-size: 1.1rem; line-height: 1.8;">
            At <b style="color: rgb(81, 146, 89);">Team Undefined (#19112)</b>, we believe success means more than winning matches —
            it means learning, collaborating, and inspiring others through every build, code, and match.
            We live by the <b>FIRST® Tech Challenge Core Values</b>, which define how we work, learn, and compete.
        </p>
    </TextBox>
    <br/>

    <div class="core-values-grid">
        <!-- Discovery -->
        <div class="core-value-card">
            <div class="core-value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
            </div>
            <h3 class="core-value-title">Discovery</h3>
            <p class="core-value-subtitle">We explore new skills and ideas.</p>
            <p class="core-value-description">Curiosity drives innovation. Every challenge is a chance to learn something new — about robotics, about teamwork, and about ourselves.</p>
        </div>

        <!-- Innovation -->
        <div class="core-value-card">
            <div class="core-value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
            </div>
            <h3 class="core-value-title">Innovation</h3>
            <p class="core-value-subtitle">We use creativity and persistence to solve problems.</p>
            <p class="core-value-description">We don't just build robots — we build solutions. Every obstacle is an opportunity to experiment, iterate, and invent.</p>
        </div>

        <!-- Impact -->
        <div class="core-value-card">
            <div class="core-value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h3 class="core-value-title">Impact</h3>
            <p class="core-value-subtitle">We apply what we learn to improve our world.</p>
            <p class="core-value-description">We bring our knowledge beyond the field, inspiring others in our community to dream big, think bold, and make a difference.</p>
        </div>

        <!-- Inclusion -->
        <div class="core-value-card">
            <div class="core-value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            </div>
            <h3 class="core-value-title">Inclusion</h3>
            <p class="core-value-subtitle">We respect each other and embrace our differences.</p>
            <p class="core-value-description">Every voice matters. Every team member counts. We listen, respect, and build on each other's ideas to reach our best.</p>
        </div>

        <!-- Teamwork -->
        <div class="core-value-card">
            <div class="core-value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            </div>
            <h3 class="core-value-title">Teamwork</h3>
            <p class="core-value-subtitle">We are stronger when we work together.</p>
            <p class="core-value-description">We win together, we fail together, we grow together. Teamwork is how ideas become reality.</p>
        </div>

        <!-- Fun -->
        <div class="core-value-card">
            <div class="core-value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h3 class="core-value-title">Fun</h3>
            <p class="core-value-subtitle">We enjoy and celebrate what we do!</p>
            <p class="core-value-description">Because if you're not having fun, you're missing the best part of robotics. Energy, laughter, and creativity power every meeting.</p>
        </div>
    </div>
    <br/>

    <!-- Gracious Professionalism -->
    <div class="special-values">
        <div class="special-value-card">
            <h3 class="special-value-title">🤝 Gracious Professionalism®</h3>
            <p class="special-value-subtitle">Doing high-quality work while valuing others and respecting the community.</p>
            <p class="special-value-description">We lift each other up — even our opponents — and celebrate learning as much as victory. We aim to embody professionalism with empathy, integrity, and pride in our craft.</p>
        </div>

        <!-- Coopertition -->
        <div class="special-value-card">
            <h3 class="special-value-title">⚙️ Coopertition®</h3>
            <p class="special-value-subtitle">Displaying unqualified kindness and respect in the face of fierce competition.</p>
            <p class="special-value-description">We help other teams even as we compete. We share ideas, tools, and time because true growth happens when everyone levels up together.</p>
        </div>
    </div>
    <br/>

    <TextBox>
        <p style="text-align: center; font-size: 1.3rem; font-weight: 700; line-height: 1.8; color: rgb(81, 146, 89);">
            🧭 In short:<br/>
            <span style="color: white; font-size: 1.1rem;">
                We design. We build. We code.<br/>
                We compete fiercely.<br/>
                And we stay <b style="color: rgb(81, 146, 89);">#Undefined</b> in how far we can go.
            </span>
        </p>
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

/* Core Values Grid */
.core-values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.core-value-card {
    background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(18, 18, 18, 0.98) 100%);
    border: 2px solid rgba(81, 146, 89, 0.3);
    border-radius: 8px;
    padding: 30px 25px;
    transition: all 0.3s ease;
    text-align: center;
}

.core-value-card:hover {
    border-color: rgba(81, 146, 89, 0.7);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(81, 146, 89, 0.3);
}

.core-value-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 15px auto;
    color: rgb(81, 146, 89);
}

.core-value-icon svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 10px rgba(81, 146, 89, 0.3));
}

.core-value-title {
    font-family: 'Orbitron', monospace;
    font-size: 1.5rem;
    font-weight: 700;
    color: rgb(81, 146, 89);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.core-value-subtitle {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    font-style: italic;
    margin-bottom: 15px;
    line-height: 1.4;
}

.core-value-description {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
}

/* Special Values (Gracious Professionalism & Coopertition) */
.special-values {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
    margin: 30px 0;
}

.special-value-card {
    background: linear-gradient(135deg, rgba(81, 146, 89, 0.15) 0%, rgba(24, 24, 24, 0.98) 50%, rgba(81, 146, 89, 0.15) 100%);
    border: 3px solid rgba(81, 146, 89, 0.5);
    border-radius: 8px;
    padding: 35px 30px;
    transition: all 0.3s ease;
    text-align: center;
    box-shadow: 0 0 20px rgba(81, 146, 89, 0.2);
}

.special-value-card:hover {
    border-color: rgba(81, 146, 89, 0.9);
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(81, 146, 89, 0.4);
}

.special-value-title {
    font-family: 'Orbitron', monospace;
    font-size: 1.8rem;
    font-weight: 800;
    color: rgb(81, 146, 89);
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-shadow: 0 0 15px rgba(81, 146, 89, 0.5);
}

.special-value-subtitle {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    font-style: italic;
    margin-bottom: 18px;
    line-height: 1.5;
}

.special-value-description {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
}

@media only screen and (max-width: 768px) {
    .core-values-grid,
    .special-values {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .core-value-title {
        font-size: 1.3rem;
    }

    .special-value-title {
        font-size: 1.5rem;
    }

    .core-value-icon {
        font-size: 2.5rem;
    }
}
</style>