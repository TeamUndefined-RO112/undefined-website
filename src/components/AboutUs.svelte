<script lang="ts">
    import Button from "./Button.svelte";
    import Content from "./Content.svelte";
    import Member from "./Member.svelte";
    import Title from "./Title.svelte";
    import Title2 from "./Title2.svelte";
    import TextBox from "./TextBox.svelte";
    import members from './members.json';

    type Achievement = {
        name: string;
        date: string;
        result?: string;
    };

    type AchievementAward = {
        name: string;
        event: string;
        result?: string;
        image?: string;
        description?: string;
    };

    type AchievementSeason = {
        seasonLabel: string;
        intro: string;
        record?: string;
        competitions: Achievement[];
        awards: AchievementAward[];
        eventsUrl?: string;
    };

    const achievements: { [key: number]: AchievementSeason } = {
        2024: {
            seasonLabel: "2024 Season INTO THE DEEP",
            intro: "We're proud of our achievements in the 2024-2025 FIRST Tech Challenge season! Here's what we accomplished:",
            record: "13 Wins - 3 Losses",
            competitions: [
                { name: "Zilele Roboticii#3", date: "November 23, 2024" },
                { name: "Meet Quantum Robotics", date: "December 15, 2024" },
                { name: "Hansei WaveZ", date: "January 5, 2025" },
                { name: "StarBloom", date: "January 25, 2025" },
                { name: "Meet Eastern Foxes", date: "February 1, 2025" },
                { name: "South Romania League Tournament", date: "February 7-9, 2025", result: "Ranked 18th out of 58 teams" }
            ],
            awards: [
                {
                    name: "Judges' Choice Award",
                    event: "South Romania League Tournament",
                    result: "Winner"
                }
            ],
            eventsUrl: "https://ftc-events.firstinspires.org/2024/team/19112"
        },
        2025: {
            seasonLabel: "2025 Season DECODE",
            intro: "We are proud of the results we managed to achieve during this season (2025-2026 Decode) and especially of the qualifications we only dreamed of in previous seasons. This is the list of results: ",
            competitions: [
                {name: "Zilele Roboticii#4", date: "November 29, 2025"},
                {name: "Eastern Arena", date: "December 13, 2025"},
                {name: "Air's AgeZ", date: "January 25, 2026"},
                {name: "Campina X.I Meet", date: "January 31, 2026"},
                {name: "South-East Romania League Tournament", date: "February 7-8, 2026", result: "Ranked 9th out of 32 teams, Qualified for National Championship"},
                {name: "Ice Breaker Scrimmage", date: "March 7, 2026"},
                {name: "Romanian National Championship - VLAICU Division", date: "March 13-15, 2026", result: "Ranked 2th out of 48 teams, Qualified for European Championship"},
                {name: "European Championship - ESCHER Division", date: "June 17-20, 2026", result: "Ranked 4th out of 52 teams"},
                {name: "European Championship", date: "June 20, 2026", result: "Winning Alliance 1st Pick"}
            ],
            awards: [
                {
                    name: "Innovate Award",
                    event: "South-East Romania League Tournament",
                    result: "Winner",
                    image: "/img/awards/regio innovate.jpg",
                    description: "Recognized for a creative engineering solution and a thoughtful design process during the DECODE season."
                },
                {
                    name: "Innovate Award",
                    event: "Romanian National Championship",
                    result: "3rd Place",
                    image: "/img/awards/natio innovate.jpg",
                    description: "A national-level recognition for engineering iteration, robot design, and the team's ability to solve hard technical problems."
                },
                {
                    name: "Connect Award",
                    event: "European Championship",
                    result: "2nd Place",
                    image: "/img/awards/europene 3.jpg",
                    description: "Awarded for connecting engineering, outreach, and team identity into a strong presence beyond the playing field."
                },
                {
                    name: "Winning Alliance",
                    event: "European Championship",
                    result: "1st Pick",
                    image: "/img/awards/europene.jpg",
                    description: "Selected for the winning alliance at the European Championship after a powerful DECODE season run."
                }
            ],
            eventsUrl: "https://ftc-events.firstinspires.org/2025/team/19112"
        }
    };

    const achievementYears = Object.keys(achievements)
        .map(Number)
        .sort((a, b) => a - b);

    let year: number = 2026;
    let achievementYear: number = 2025;
    let selectedAchievements: AchievementSeason | undefined;
    let selectedAward: AchievementAward | null = null;
    let failedAwardImages = new Set<string>();

    $: selectedAchievements = achievements[achievementYear];

    function openAwardPopup(award: AchievementAward) {
        selectedAward = award;
    }

    function closeAwardPopup() {
        selectedAward = null;
    }

    function handleAwardKeydown(event: KeyboardEvent) {
        if (event.key === "Escape" && selectedAward) {
            closeAwardPopup();
        }
    }

    function markAwardImageFailed(image: string | undefined) {
        if (!image) {
            return;
        }

        failedAwardImages = new Set([...failedAwardImages, image]);
    }

    function previousAchievementYear() {
        const currentIndex = achievementYears.indexOf(achievementYear);
        if (currentIndex > 0) {
            achievementYear = achievementYears[currentIndex - 1];
        }
    }

    function nextAchievementYear() {
        const currentIndex = achievementYears.indexOf(achievementYear);
        if (currentIndex < achievementYears.length - 1) {
            achievementYear = achievementYears[currentIndex + 1];
        }
    }
</script>

<svelte:window on:keydown={handleAwardKeydown}/>

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
            <img src="/img/gallery/grup_prime.jpg" title="Team Undefined 2024" alt="Team Undefined 2024"/>
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

    <Title2><span style="color: rgb(81, 146, 89);">{selectedAchievements ? selectedAchievements.seasonLabel : `${achievementYear} Season`}</span> Results</Title2>
    <div class="flex justify-center items-center gap-2">
        <b>Year:</b>&nbsp;
        <Button small on:click={previousAchievementYear}>-</Button>
        <p>{achievementYear}</p>
        <Button small on:click={nextAchievementYear}>+</Button>
    </div>
    <br/>
    {#if selectedAchievements}
        <TextBox>
            <p>{selectedAchievements.intro}</p>
            {#if selectedAchievements.record}
                <br/>
                <p><b style="color: rgb(81, 146, 89); font-size: 1.2rem;">Season Record: {selectedAchievements.record}</b></p>
            {/if}

            {#if selectedAchievements.competitions.length > 0}
                <br/>
                <p><b>Competitions Attended:</b></p>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    {#each selectedAchievements.competitions as competition}
                        <li>
                            🏆 <b>{competition.name}</b> ({competition.date})
                            {#if competition.result}
                                - <b style="color: rgb(81, 146, 89);">{competition.result}</b>
                            {/if}
                        </li>
                    {/each}
                </ul>
            {/if}

            {#if selectedAchievements.awards.length > 0}
                <br/>
                <p><b style="color: gold;">Awards:</b></p>
                <div class="awards-grid">
                    {#each selectedAchievements.awards as award}
                        <button
                            type="button"
                            class="award-card"
                            on:click={() => openAwardPopup(award)}
                            aria-label={`View ${award.name} from ${award.event}`}
                        >
                            <span class="award-card-glow"></span>
                            <span class="award-card-icon" aria-hidden="true">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8m-4-4v4m7-17h2v2a5 5 0 01-5 5M5 4H3v2a5 5 0 005 5m0-7h8v5a4 4 0 01-8 0V4z"></path>
                                </svg>
                            </span>
                            <span class="award-card-copy">
                                <span class="award-card-title">{award.name}</span>
                                <span class="award-card-event">{award.event}</span>
                                {#if award.result}
                                    <span class="award-card-result">{award.result}</span>
                                {/if}
                            </span>
                        </button>
                    {/each}
                </div>
            {/if}

            {#if selectedAchievements.eventsUrl}
                <br/>
                <p>Check out our full competition history on <b><a class="linkundefined" href={selectedAchievements.eventsUrl} target="_blank" rel="noreferrer">FIRST Tech Challenge Events</a></b></p>
            {/if}
        </TextBox>
    {:else}
        <TextBox>
            <p>Achievements not yet established!</p>
        </TextBox>
    {/if}
    <br/>
    <br/>

    <Title secondary>Meet Our Team</Title>
    <div class="flex justify-center items-center gap-2">
        <b>Year:</b>&nbsp;
        <Button small on:click={() => {if(year>2018) year--; if(year==2019) year--;if(year==2022) year--;}}>-</Button>
        <p>{year}</p>
        <Button small on:click={() => {if(year<2026) year++; if(year==2019) year++;if(year==2022) year++;}}>+</Button>
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

{#if selectedAward}
    <div class="award-modal-backdrop" role="presentation" on:click|self={closeAwardPopup}>
        <div
            class="award-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="award-modal-title"
        >
            <button class="award-modal-close" type="button" aria-label="Close award popup" on:click={closeAwardPopup}>X</button>
            <div class="award-modal-image-frame">
                {#if selectedAward.image && !failedAwardImages.has(selectedAward.image)}
                    <img
                        src={selectedAward.image}
                        alt={`${selectedAward.name} at ${selectedAward.event}`}
                        on:error={() => markAwardImageFailed(selectedAward?.image)}
                    />
                {:else}
                    <div class="award-photo-placeholder">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-16 6h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span>Award photo coming soon</span>
                    </div>
                {/if}
            </div>
            <div class="award-modal-copy">
                <p class="award-modal-kicker">2025 DECODE Award</p>
                <h3 id="award-modal-title">{selectedAward.name}</h3>
                <p class="award-modal-event">{selectedAward.event}</p>
                {#if selectedAward.result}
                    <p class="award-modal-result">{selectedAward.result}</p>
                {/if}
                {#if selectedAward.description}
                    <p class="award-modal-description">{selectedAward.description}</p>
                {/if}
            </div>
        </div>
    </div>
{/if}

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

.awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
    margin: 18px 0 8px 0;
}

.award-card {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    min-height: 126px;
    padding: 20px;
    overflow: hidden;
    text-align: left;
    color: white;
    background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(12, 16, 13, 0.98) 100%);
    border: 2px solid rgba(81, 146, 89, 0.35);
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.award-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 215, 0, 0.14);
    border-radius: 6px;
    pointer-events: none;
}

.award-card-glow {
    position: absolute;
    top: -40%;
    right: -20%;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, rgba(81, 146, 89, 0.12) 45%, transparent 70%);
    opacity: 0.8;
    pointer-events: none;
}

.award-card:hover,
.award-card:focus-visible {
    transform: translateY(-4px);
    border-color: rgba(81, 146, 89, 0.8);
    box-shadow: 0 12px 35px rgba(81, 146, 89, 0.28), 0 0 22px rgba(255, 215, 0, 0.1);
    outline: none;
}

.award-card-icon {
    position: relative;
    flex: 0 0 54px;
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    color: gold;
    background: rgba(255, 215, 0, 0.08);
    border: 1px solid rgba(255, 215, 0, 0.45);
    border-radius: 8px;
    box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.08);
}

.award-card-icon svg {
    width: 30px;
    height: 30px;
    filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.35));
}

.award-card-copy {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
}

.award-card-title {
    font-family: 'Orbitron', monospace;
    font-size: 1.05rem;
    font-weight: 800;
    line-height: 1.25;
    text-transform: uppercase;
    color: white;
}

.award-card-event {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.78);
}

.award-card-result {
    width: fit-content;
    padding: 4px 10px;
    font-family: 'Rajdhani', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1;
    color: rgb(12, 12, 12);
    background: linear-gradient(135deg, gold, rgb(81, 146, 89));
    border-radius: 999px;
}

.award-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(0, 0, 0, 0.78);
    backdrop-filter: blur(10px);
}

.award-modal {
    position: relative;
    width: min(1040px, 100%);
    max-height: min(760px, 92vh);
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.8fr);
    overflow: hidden;
    background: linear-gradient(135deg, rgb(15, 16, 15) 0%, rgb(24, 24, 24) 52%, rgb(12, 18, 13) 100%);
    border: 2px solid rgba(81, 146, 89, 0.65);
    border-radius: 8px;
    box-shadow: 0 22px 80px rgba(0, 0, 0, 0.65), 0 0 45px rgba(81, 146, 89, 0.22);
}

.award-modal::before {
    content: '';
    position: absolute;
    inset: 14px;
    border: 1px solid rgba(255, 215, 0, 0.16);
    border-radius: 4px;
    pointer-events: none;
    z-index: 2;
}

.award-modal-close {
    position: absolute;
    top: 18px;
    right: 18px;
    z-index: 4;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    color: white;
    font-family: 'Orbitron', monospace;
    font-weight: 800;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.award-modal-close:hover,
.award-modal-close:focus-visible {
    background: rgba(81, 146, 89, 0.35);
    border-color: rgba(81, 146, 89, 0.85);
    transform: translateY(-2px);
    outline: none;
}

.award-modal-image-frame {
    position: relative;
    min-height: 420px;
    background:
        linear-gradient(135deg, rgba(81, 146, 89, 0.1), transparent 45%),
        rgb(8, 8, 8);
}

.award-modal-image-frame img {
    width: 100%;
    height: 100%;
    min-height: 420px;
    max-height: 760px;
    display: block;
    object-fit: cover;
}

.award-photo-placeholder {
    min-height: 420px;
    height: 100%;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 18px;
    padding: 42px;
    color: rgba(255, 255, 255, 0.78);
    background:
        linear-gradient(135deg, rgba(81, 146, 89, 0.14), transparent 50%),
        repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.035) 0, rgba(255, 255, 255, 0.035) 1px, transparent 1px, transparent 14px);
}

.award-photo-placeholder svg {
    width: 78px;
    height: 78px;
    color: rgba(81, 146, 89, 0.9);
    filter: drop-shadow(0 0 15px rgba(81, 146, 89, 0.35));
}

.award-photo-placeholder span {
    font-family: 'Orbitron', monospace;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.award-modal-copy {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    padding: 58px 42px 42px 42px;
}

.award-modal-kicker {
    font-family: 'Orbitron', monospace;
    font-size: 0.82rem;
    font-weight: 800;
    text-transform: uppercase;
    color: gold;
    letter-spacing: 0.05em;
}

.award-modal-copy h3 {
    font-family: 'Orbitron', monospace;
    font-size: clamp(1.7rem, 4vw, 2.6rem);
    font-weight: 900;
    line-height: 1.1;
    text-transform: uppercase;
    color: white;
    text-shadow: 0 0 18px rgba(81, 146, 89, 0.35);
}

.award-modal-event {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.86);
}

.award-modal-result {
    width: fit-content;
    padding: 8px 14px;
    font-family: 'Orbitron', monospace;
    font-size: 0.88rem;
    font-weight: 800;
    text-transform: uppercase;
    color: rgb(9, 12, 9);
    background: linear-gradient(135deg, gold, rgb(81, 146, 89));
    border-radius: 999px;
}

.award-modal-description {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.78);
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

    .awards-grid {
        grid-template-columns: 1fr;
    }

    .award-modal-backdrop {
        padding: 14px;
        align-items: start;
        overflow-y: auto;
    }

    .award-modal {
        grid-template-columns: 1fr;
        max-height: none;
    }

    .award-modal-image-frame,
    .award-modal-image-frame img,
    .award-photo-placeholder {
        min-height: 300px;
    }

    .award-modal-copy {
        padding: 34px 24px 28px 24px;
    }

    .award-modal-copy h3 {
        font-size: 1.7rem;
    }

    .award-modal-event {
        font-size: 1.15rem;
    }
}
</style>
