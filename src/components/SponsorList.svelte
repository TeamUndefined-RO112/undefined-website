<script lang="ts">
    import sponsors from './sponsors.json';
    import Sponsor from "./Sponsor.svelte";
    import Title from "./Title.svelte";
    import Content from "./Content.svelte";
    import Title4 from "./Title4.svelte";
    import Title3 from "./Title3.svelte";
    import TextBox from "./TextBox.svelte";
</script>

<Content column big>
    <Title3>
        <b class="h1-style">Why Your Sponsorship <span style="color: rgb(81, 146, 89);">Matters</span></b>
    </Title3>

    <TextBox>
    <div class="benefits-grid">
        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                Take Us to the Next Level
            </h4>
            <p class="benefit-description">We're ready to push boundaries and compete at the highest level. Your sponsorship provides the critical resources we need to transform from a passionate team into championship contenders.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                </div>
                Competition Success
            </h4>
            <p class="benefit-description">Support our journey through FIRST Tech Challenge competitions. Cover equipment, materials, competition fees, and travel expenses that stand between us and victory.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                    </svg>
                </div>
                Level the Playing Field
            </h4>
            <p class="benefit-description">Right now, we're competing against teams with multiple 3D printers and CNC machines. We borrow equipment from friends with HUGE delays and costs. Help us get our own advanced gear.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6"></path>
                    </svg>
                </div>
                Faster Innovation
            </h4>
            <p class="benefit-description">With the right equipment, we can iterate faster, test more designs, and build better robots. No more waiting weeks for parts or compromising on quality due to budget constraints.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                Invest in STEM Future
            </h4>
            <p class="benefit-description">You're not just sponsoring a robotics team - you're investing in the next generation of engineers and innovators. Help us develop critical skills in robotics, software development (C, C++, Java), and teamwork.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                Shape Tomorrow's Leaders
            </h4>
            <p class="benefit-description">Together, we can achieve something incredible - for us, and for the future of technology. Your support today shapes the engineers, programmers, and innovators of tomorrow.</p>
        </div>
    </div>
    </TextBox>
    <br/><br/>

    <Title3>
        <b style="color: rgb(81, 146, 89);">What You Get</b> as Our Sponsor
    </Title3>
    <TextBox>
    <div class="benefits-grid">
        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                </div>
                Maximum Visibility
            </h4>
            <p class="benefit-description">Your logo prominently displayed on our robot, team uniforms, website, and all social media channels. Every competition appearance = brand exposure.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                    </svg>
                </div>
                Active Promotion
            </h4>
            <p class="benefit-description">Dedicated social media posts, mentions at competitions, and recognition in all team communications and presentations.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </div>
                Community Impact
            </h4>
            <p class="benefit-description">Association with STEM education and youth development. Show your commitment to building the next generation of engineers and innovators.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                </div>
                Recognition & Updates
            </h4>
            <p class="benefit-description">Regular updates on team progress, exclusive behind-the-scenes content, and priority recognition at all team events and competitions.</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                    </svg>
                </div>
                Personal Demos
            </h4>
            <p class="benefit-description">We can demo the robots we've built for your employees and teams, on demand, if time allows. Inspire your workforce with cutting-edge robotics!</p>
        </div>

        <div class="benefit-card">
            <h4 class="benefit-title">
                <div class="benefit-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </div>
                Our Eternal Gratitude
            </h4>
            <p class="benefit-description">You'll forever hold a special place in our journey. Your support today shapes our success tomorrow, and we'll never forget those who believed in us.</p>
        </div>
    </div>
    </TextBox>

    <br/><br/>

    <Title3>
        <b style="color: white;">How <span style="color: rgb(81, 146, 89);">Sponsorship Works</span></b>
    </Title3>
    <TextBox>
        <div class="process-section">
            <div class="process-content">
                <div class="process-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <div class="process-text">
                    <h4 class="process-title">Transparent & Tax-Deductible</h4>
                    <p>Team Undefined operates through <b>ASOCIAŢIA PĂRINȚILOR ELEVILOR DIN COLEGIUL NAȚIONAL NICOLAE GRIGORESCU - CÂMPINA</b>, a registered non-profit organization affiliated with our high school. All financial operations are managed by our school's certified accountant, ensuring complete transparency and compliance.</p>
                    <p style="margin-top: 15px;">We provide <b style="color: rgb(81, 146, 89);">official sponsorship contracts</b> and documentation that allow your organization to <b style="color: rgb(81, 146, 89);">deduct sponsorship contributions as business expenses</b>, reducing your taxable income in accordance with Romanian tax legislation.</p>
                    <p style="margin-top: 15px; font-size: 1.1rem;"><b>Ready to become a sponsor?</b> Let's discuss how we can work together to build the future of technology.</p>
                </div>
            </div>
        </div>
    </TextBox>

    <div class="cta-buttons">
        <a href="/contact" class="btn-robotic-primary">
            <span>Contact Us</span>
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
        </a>
        <a href="/donate" class="btn-robotic-secondary">
            <span>Too complicated - Donate instead!</span>
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </a>
    </div>

    <br/><br/>

    <TextBox>
        <br/><p> <b style="color: white; font-weight:800; font-size:2.2rem; font-family: 'Orbitron', monospace; letter-spacing: 0.05em;">Equipment Donations <span style="color: rgb(81, 146, 89);">WE NEED</span>:</b></p>
        Any gear you can contribute with, matters. From laptops, 3d printers, CNCs, raw materials.
Most important is the immediate acquisition of these parts so we can build this year theme:
    </TextBox>

    <div class="equipment-grid">
        <a href="https://www.prusa3d.com/product/prusa-core-one-kit/" target="_blank" rel="noopener noreferrer" class="equipment-card">
            <div class="equipment-image-container">
                <img src="/img/prusa-core-one.jpg" alt="PRUSA CORE ONE 3D Printer" />
            </div>
            <h4 class="equipment-title">PRUSA CORE ONE 3D Printer</h4>
            <p class="equipment-description">
                We would really love to have our own 3d printer: The CORE One is a fully enclosed CoreXY 3D printer with active temperature control designed for top print quality and speed. Easy to set up and made to last, this rugged machine is perfect for beginners and professionals alike. Designed and manufactured in the EU.
            </p>
            <div class="equipment-link">
                <span>View Product</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </div>
        </a>

        <a href="https://swyftrobotics.com/products/80w-27-x-20-co2-laser-cutter-recommended-for-ftc-teams" target="_blank" rel="noopener noreferrer" class="equipment-card">
            <div class="equipment-image-container">
                <img src="/img/vevor-laser.webp" alt="Laser CO2 engraver" />
            </div>
            <h4 class="equipment-title">Laser CO2 Engraver</h4>
            <p class="equipment-description">
                Help us prototype faster: CO2 Laser Cutter: The Ultimate Build Season Advantage. Tired of outsourcing parts and waiting for deliveries? Take control of your build season with a CO2 Laser Cutter.
            </p>
            <div class="equipment-link">
                <span>View Product</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </div>
        </a>
    </div>

    <div class="cta-buttons">
        <a href="/donate" class="btn-robotic-primary">
            <span>Donate Now</span>
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </a>
    </div>

    <br/><br/>
    <Title3> <b style="color:gold; font-weight:800">Top Sponsor</b></Title3>
    
    <!-- WAM Top Sponsor Card -->
    <div class="top-sponsor-card">
        <div class="corner-accent top-left"></div>
        <div class="corner-accent top-right"></div>
        <div class="corner-accent bottom-left"></div>
        <div class="corner-accent bottom-right"></div>

        <a href="https://wamgroup.ro/ro-RO/WAMRO/home" target="_blank" rel="noopener noreferrer" class="top-sponsor-link">
            <div class="top-sponsor-image-container">
                <img src="/img/sponsor/wam romania.jpg" alt="WAMGROUP Romania" />
            </div>
            <h3 class="top-sponsor-name">WAMGROUP Romania</h3>
        </a>
        <p class="top-sponsor-description">
            The multinational WAMGROUP Corporation, a global leader in the development and production of equipment and installations for bulk materials handling, has been present in Romania since 2002. Starting in 2008, WAMGROUP Romania has two production facilities in Prahova County, near Ploiești, an industrial city located 50 kilometers north of Bucharest. The WAMGROUP subsidiary in Romania not only distributes WAMGROUP equipment nationally and in the Republic of Moldova, but represents one of the Group's most important production sites in Europe.
        </p>
    </div>
    <br/><br/>
    <Title3> Important sponsors</Title3>
</Content>

<section>
    <!-- Lista de sponsori -->
    <div class="sponsor-list">
        {#if sponsors.length > 0}
            {#each sponsors as sponsor}
                <Sponsor
                    image={sponsor.src}
                    text={sponsor.name}
                    url={sponsor.url || ""}
                    description={sponsor.description || ""}
                ></Sponsor>
            {/each}
        {:else}
            <Title secondary>No sponsors... :(</Title>
        {/if}
    </div>

    <br/><br/><br/>
    <Content column big>
        <Title3>
            <b class="thank-you-title">THANK YOU!</b>
        </Title3>
    </Content>
    <br/><br/><br/>
</section>

<style>
    section {
        max-width: 100%;
        overflow-x: hidden;
    }

    h2 {
        font-size: 2.5rem;
        text-align: center;
        font-family: 'Orbitron', monospace;
        font-weight: 700;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        text-shadow: 0 0 15px rgba(81, 146, 89, 0.4);
    }

    .sponsor-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        touch-action: pan-y pan-x;
    }

    /* Thank You Title Styling */
    .thank-you-title {
        font-size: 4rem;
        font-weight: 900;
        color: rgb(81, 146, 89);
        text-transform: uppercase;
        letter-spacing: 0.15em;
        text-shadow:
            0 0 20px rgba(81, 146, 89, 0.6),
            0 0 40px rgba(81, 146, 89, 0.4),
            0 0 60px rgba(81, 146, 89, 0.2);
        animation: thank-you-glow 2s ease-in-out infinite;
        text-align: center;
        font-family: 'Orbitron', monospace;
    }

    @keyframes thank-you-glow {
        0%, 100% {
            text-shadow:
                0 0 20px rgba(81, 146, 89, 0.6),
                0 0 40px rgba(81, 146, 89, 0.4),
                0 0 60px rgba(81, 146, 89, 0.2);
            transform: scale(1);
        }
        50% {
            text-shadow:
                0 0 30px rgba(81, 146, 89, 0.8),
                0 0 60px rgba(81, 146, 89, 0.6),
                0 0 90px rgba(81, 146, 89, 0.4);
            transform: scale(1.02);
        }
    }

    @media only screen and (max-width: 768px) {
        .thank-you-title {
            font-size: 2.5rem;
            letter-spacing: 0.1em;
        }
    }

    @media only screen and (max-width: 480px) {
        .thank-you-title {
            font-size: 2rem;
            letter-spacing: 0.08em;
        }
    }

    /* Define the style for both desktop and mobile */
    .h1-style {
        font-size: 2rem; /* Default size, will apply to desktop */
        text-align: center;
        /* color: darkgreen; */
        font-weight: 800;
        line-height: 1.2;
        /* margin: 20px 0; */
    }

    /* Mobile specific styles */
    @media only screen and (max-width: 550px) {
        .h1-style {
            font-size: 1.5rem; /* Smaller font for mobile */
            line-height: 1.1;
            /* color: red; */
            /* margin: 10px 0; */
        }
    }

    /* Top Sponsor Card Styling */
    .top-sponsor-card {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 245, 245, 0.98) 100%);
        border: 3px solid rgba(81, 146, 89, 0.4);
        clip-path: polygon(
            0 0,
            calc(100% - 20px) 0,
            100% 20px,
            100% 100%,
            20px 100%,
            0 calc(100% - 20px)
        );
        padding: 40px;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        overflow: hidden;
    }

    .top-sponsor-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(81, 146, 89, 0.15), transparent);
        transition: left 0.8s ease;
        z-index: 1;
    }

    .top-sponsor-card:hover::before {
        left: 100%;
    }

    .top-sponsor-card:hover {
        transform: translateY(-10px);
        border-color: rgba(81, 146, 89, 0.7);
        box-shadow: 0 20px 60px rgba(81, 146, 89, 0.3),
                    0 0 40px rgba(81, 146, 89, 0.2);
    }

    /* Corner accents for top sponsor */
    .top-sponsor-card .corner-accent {
        position: absolute;
        width: 18px;
        height: 18px;
        border: 3px solid rgba(81, 146, 89, 0.6);
        transition: all 0.3s ease;
        z-index: 2;
    }

    .top-sponsor-card .corner-accent.top-left {
        top: 12px;
        left: 12px;
        border-right: none;
        border-bottom: none;
    }

    .top-sponsor-card .corner-accent.top-right {
        top: 12px;
        right: 12px;
        border-left: none;
        border-bottom: none;
    }

    .top-sponsor-card .corner-accent.bottom-left {
        bottom: 12px;
        left: 12px;
        border-right: none;
        border-top: none;
    }

    .top-sponsor-card .corner-accent.bottom-right {
        bottom: 12px;
        right: 12px;
        border-left: none;
        border-top: none;
    }

    .top-sponsor-card:hover .corner-accent {
        border-color: rgba(81, 146, 89, 1);
        width: 24px;
        height: 24px;
    }

    .top-sponsor-link {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 1;
    }

    .top-sponsor-image-container {
        width: 100%;
        max-width: 700px;
        padding: 30px;
        background: white;
        border-radius: 8px;
        border: 2px solid rgba(0, 0, 0, 0.08);
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top-sponsor-image-container img {
        max-width: 100%;
        height: auto;
        max-height: 250px;
        object-fit: contain;
        transition: transform 0.3s ease;
    }

    .top-sponsor-card:hover .top-sponsor-image-container img {
        transform: scale(1.05);
    }

    .top-sponsor-name {
        font-size: 2rem;
        font-weight: 800;
        font-family: 'Orbitron', monospace;
        color: #1a1a1a;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0;
        transition: color 0.3s ease;
    }

    .top-sponsor-card:hover .top-sponsor-name {
        color: rgb(81, 146, 89);
    }

    .top-sponsor-description {
        font-size: 1.1rem;
        font-family: 'Rajdhani', sans-serif;
        color: #333;
        line-height: 1.7;
        margin-top: 25px;
        text-align: center;
        max-width: 700px;
        position: relative;
        z-index: 1;
    }

    @media only screen and (max-width: 768px) {
        .top-sponsor-card {
            padding: 25px 20px;
        }

        .top-sponsor-image-container {
            padding: 20px;
        }

        .top-sponsor-image-container img {
            max-height: 180px;
        }

        .top-sponsor-name {
            font-size: 1.5rem;
        }

        .top-sponsor-description {
            font-size: 1rem;
        }
    }

    /* IBAN Container Styling */
    .iban-container,
    .payment-container {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin: 15px 0;
        background: linear-gradient(135deg, rgba(24, 24, 24, 0.95) 0%, rgba(18, 18, 18, 0.95) 100%);
        border: 2px solid rgba(81, 146, 89, 0.4);
        border-radius: 4px;
        padding: 12px 16px;
        clip-path: polygon(
            0 0,
            calc(100% - 8px) 0,
            100% 8px,
            100% 100%,
            8px 100%,
            0 calc(100% - 8px)
        );
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .payment-container:hover {
        border-color: rgba(81, 146, 89, 0.7);
        box-shadow: 0 4px 15px rgba(81, 146, 89, 0.25);
        transform: translateY(-2px);
    }

    a.payment-container {
        cursor: pointer;
    }

    .iban-box,
    .payment-box {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .payment-logo {
        width: 24px;
        height: 24px;
        object-fit: contain;
        flex-shrink: 0;
    }

    .patreon-logo {
        fill: rgb(81, 146, 89);
    }

    .external-icon {
        width: 18px;
        height: 18px;
        color: rgb(81, 146, 89);
        flex-shrink: 0;
        opacity: 0.7;
        transition: all 0.3s ease;
    }

    a.payment-container:hover .external-icon {
        opacity: 1;
        transform: translateX(2px) translateY(-2px);
    }

    .iban-label,
    .payment-label {
        font-family: 'Rajdhani', sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .iban-value,
    .payment-value {
        font-family: 'Orbitron', monospace;
        font-size: 1.1rem;
        font-weight: 700;
        color: rgb(81, 146, 89);
        letter-spacing: 0.1em;
        text-shadow: 0 0 10px rgba(81, 146, 89, 0.3);
    }

    .copy-btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: rgba(81, 146, 89, 0.15);
        border: 1px solid rgba(81, 146, 89, 0.4);
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.2s ease;
        padding: 0;
        clip-path: polygon(
            0 0,
            calc(100% - 6px) 0,
            100% 6px,
            100% 100%,
            6px 100%,
            0 calc(100% - 6px)
        );
    }

    .copy-btn:hover {
        background: rgba(81, 146, 89, 0.25);
        border-color: rgba(81, 146, 89, 0.7);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(81, 146, 89, 0.3);
    }

    .copy-btn:active {
        transform: translateY(0);
    }

    .copy-btn.copied {
        background: rgba(81, 146, 89, 0.3);
        border-color: rgb(81, 146, 89);
    }

    .copy-btn .icon {
        width: 18px;
        height: 18px;
        color: rgb(81, 146, 89);
        transition: all 0.2s ease;
    }

    .copy-btn.copied .icon {
        color: rgb(81, 146, 89);
        animation: checkmark 0.3s ease;
    }

    @keyframes checkmark {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @media only screen and (max-width: 640px) {
        .iban-container,
        .payment-container {
            flex-direction: column;
            align-items: flex-start;
            padding: 10px 12px;
            max-width: calc(100vw - 40px);
        }

        .iban-value,
        .payment-value {
            font-size: 0.9rem;
            letter-spacing: 0.05em;
            word-break: break-all;
        }

        .copy-btn,
        .external-icon {
            align-self: center;
            margin-top: 8px;
        }
    }

    /* CTA Buttons */
    .cta-buttons {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 25px;
    }

    .btn-robotic-primary,
    .btn-robotic-secondary {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 14px 28px;
        font-family: 'Orbitron', monospace;
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        text-decoration: none;
        border: 2px solid rgb(81, 146, 89);
        transition: all 0.3s ease;
        cursor: pointer;
        clip-path: polygon(
            0 0,
            calc(100% - 10px) 0,
            100% 10px,
            100% 100%,
            10px 100%,
            0 calc(100% - 10px)
        );
    }

    .btn-robotic-primary {
        background: rgb(81, 146, 89);
        color: white;
    }

    .btn-robotic-primary:hover {
        background: white;
        color: rgb(81, 146, 89);
        box-shadow: 0 8px 25px rgba(81, 146, 89, 0.4);
        transform: translateY(-3px);
    }

    .btn-robotic-secondary {
        background: transparent;
        color: rgb(81, 146, 89);
    }

    .btn-robotic-secondary:hover {
        background: rgb(81, 146, 89);
        color: white;
        box-shadow: 0 8px 25px rgba(81, 146, 89, 0.4);
        transform: translateY(-3px);
    }

    .btn-icon {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
    }

    .btn-robotic-primary:hover .btn-icon,
    .btn-robotic-secondary:hover .btn-icon {
        transform: translateX(3px);
    }

    /* Support Section Styling */
    .support-section {
        position: relative;
        background: linear-gradient(135deg, rgba(81, 146, 89, 0.08) 0%, rgba(24, 24, 24, 0.95) 50%, rgba(81, 146, 89, 0.08) 100%);
        border: 2px solid rgba(81, 146, 89, 0.3);
        border-left: 4px solid rgb(81, 146, 89);
        border-right: 4px solid rgb(81, 146, 89);
        padding: 20px 20px;
        margin: 40px 0;
        box-shadow: 0 0 40px rgba(81, 146, 89, 0.15),
                    inset 0 0 60px rgba(81, 146, 89, 0.05);
        scroll-margin-top: 100px;
    }

    .support-section::before,
    .support-section::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgb(81, 146, 89), transparent);
        left: 0;
    }

    .support-section::before {
        top: 0;
    }

    .support-section::after {
        bottom: 0;
    }

    .support-title {
        font-size: 2.5rem;
        color: rgb(81, 146, 89);
        text-shadow: 0 0 20px rgba(81, 146, 89, 0.5);
        animation: pulse-glow 3s ease-in-out infinite;
    }

    @keyframes pulse-glow {
        0%, 100% {
            text-shadow: 0 0 20px rgba(81, 146, 89, 0.5);
        }
        50% {
            text-shadow: 0 0 30px rgba(81, 146, 89, 0.8);
        }
    }

    @media only screen and (max-width: 768px) {
        .cta-buttons {
            flex-direction: column;
            align-items: stretch;
        }

        .btn-robotic-primary,
        .btn-robotic-secondary {
            justify-content: center;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }

        .support-section {
            padding: 10px 15px;
            margin: 30px 0;
        }

        .support-title {
            font-size: 1.8rem;
        }
    }

    /* Equipment Grid */
    .equipment-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        margin: 40px 0;
        padding: 0 20px;
    }

    @media only screen and (max-width: 500px) {
        .equipment-grid {
            grid-template-columns: 1fr;
            padding: 0 10px;
        }
    }

    .equipment-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(18, 18, 18, 0.98) 100%);
        border: 2px solid rgba(81, 146, 89, 0.3);
        clip-path: polygon(
            0 0,
            calc(100% - 15px) 0,
            100% 15px,
            100% 100%,
            15px 100%,
            0 calc(100% - 15px)
        );
        padding: 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        overflow: hidden;
        text-decoration: none;
        cursor: pointer;
    }

    .equipment-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(81, 146, 89, 0.1), transparent);
        transition: left 0.6s ease;
        z-index: 1;
    }

    .equipment-card:hover::before {
        left: 100%;
    }

    .equipment-card:hover {
        transform: translateY(-8px);
        border-color: rgba(81, 146, 89, 0.6);
        box-shadow: 0 15px 50px rgba(81, 146, 89, 0.3),
                    0 0 30px rgba(81, 146, 89, 0.15);
    }

    .equipment-image-container {
        width: 100%;
        height: 280px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-bottom: 2px solid rgba(81, 146, 89, 0.3);
        overflow: hidden;
    }

    .equipment-image-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
    }

    .equipment-card:hover .equipment-image-container img {
        transform: scale(1.05);
    }

    .equipment-title {
        font-family: 'Orbitron', monospace;
        font-size: 1.25rem;
        font-weight: 700;
        color: rgb(81, 146, 89);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 20px 20px 15px 20px;
        position: relative;
        z-index: 2;
    }

    .equipment-description {
        font-family: 'Rajdhani', sans-serif;
        font-size: 1rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.85);
        margin: 0 20px 20px 20px;
        flex-grow: 1;
        position: relative;
        z-index: 2;
    }

    .equipment-link {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        padding: 15px 20px;
        background: rgba(81, 146, 89, 0.1);
        border-top: 1px solid rgba(81, 146, 89, 0.3);
        font-family: 'Orbitron', monospace;
        font-size: 0.9rem;
        font-weight: 600;
        color: rgb(81, 146, 89);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        transition: all 0.3s ease;
        position: relative;
        z-index: 2;
    }

    .equipment-card:hover .equipment-link {
        background: rgba(81, 146, 89, 0.2);
    }

    .equipment-link svg {
        width: 18px;
        height: 18px;
        transition: transform 0.3s ease;
    }

    .equipment-card:hover .equipment-link svg {
        transform: translateX(3px) translateY(-3px);
    }

    @media only screen and (max-width: 640px) {
        .equipment-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0;
        }

        .equipment-image-container {
            height: 220px;
            padding: 15px;
        }

        .equipment-title {
            font-size: 1.1rem;
        }

        .equipment-description {
            font-size: 0.95rem;
        }
    }

    /* Benefits Grid */
    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        margin: 30px 0;
    }

    @media only screen and (max-width: 1024px) {
        .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .benefit-card {
        background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(18, 18, 18, 0.98) 100%);
        border: 2px solid rgba(81, 146, 89, 0.3);
        border-radius: 8px;
        padding: 25px;
        transition: all 0.3s ease;
    }

    .benefit-card:hover {
        border-color: rgba(81, 146, 89, 0.7);
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(81, 146, 89, 0.3);
    }

    .benefit-icon {
        width: 40px;
        height: 40px;
        margin-right: 12px;
        flex-shrink: 0;
        color: rgb(81, 146, 89);
    }

    .benefit-icon svg {
        width: 100%;
        height: 100%;
    }

    .benefit-title {
        font-family: 'Orbitron', monospace;
        font-size: 1.2rem;
        font-weight: 700;
        color: white;
        margin-bottom: 12px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
    }

    .benefit-description {
        font-family: 'Rajdhani', sans-serif;
        font-size: 1rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.85);
    }

    @media only screen and (max-width: 768px) {
        .benefits-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }

    /* Process Section */
    .process-section {
        padding: 20px 0;
    }

    .process-content {
        display: flex;
        gap: 30px;
        align-items: flex-start;
        max-width: 900px;
        margin: 0 auto;
    }

    .process-icon {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        color: rgb(81, 146, 89);
        background: rgba(81, 146, 89, 0.1);
        border: 2px solid rgba(81, 146, 89, 0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px;
    }

    .process-icon svg {
        width: 100%;
        height: 100%;
    }

    .process-text {
        flex: 1;
    }

    .process-title {
        font-family: 'Orbitron', monospace;
        font-size: 1.5rem;
        font-weight: 700;
        color: rgb(81, 146, 89);
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .process-text p {
        font-family: 'Rajdhani', sans-serif;
        font-size: 1.05rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.9);
    }

    @media only screen and (max-width: 768px) {
        .process-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .process-icon {
            width: 60px;
            height: 60px;
        }

        .process-title {
            font-size: 1.2rem;
        }

        .process-text p {
            font-size: 1rem;
        }
    }

    /* Contact Section */
    .contact-section {
        scroll-margin-top: 100px;
    }

    .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 600px;
        margin: 0 auto;
    }

    .contact-method {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        background: linear-gradient(135deg, rgba(24, 24, 24, 0.95) 0%, rgba(18, 18, 18, 0.95) 100%);
        border: 2px solid rgba(81, 146, 89, 0.4);
        border-radius: 8px;
        padding: 25px;
        transition: all 0.3s ease;
    }

    .contact-method:hover {
        border-color: rgba(81, 146, 89, 0.7);
        box-shadow: 0 5px 20px rgba(81, 146, 89, 0.2);
        transform: translateX(5px);
    }

    .contact-icon {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        color: rgb(81, 146, 89);
    }

    .contact-icon svg {
        width: 100%;
        height: 100%;
    }

    .contact-info {
        flex: 1;
    }

    .contact-label {
        font-family: 'Orbitron', monospace;
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 8px;
    }

    .contact-value {
        font-family: 'Rajdhani', sans-serif;
        font-size: 1.3rem;
        font-weight: 700;
        color: rgb(81, 146, 89);
        text-decoration: none;
        display: block;
        transition: color 0.3s ease;
    }

    .contact-value:hover {
        color: rgba(81, 146, 89, 0.8);
    }

    .contact-note {
        font-family: 'Rajdhani', sans-serif;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 5px;
        font-style: italic;
    }

    @media only screen and (max-width: 640px) {
        .contact-method {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .contact-value {
            font-size: 1.1rem;
        }
    }

</style>

