<script lang="ts">
    import sponsors from './sponsors.json';
    import Sponsor from "./Sponsor.svelte";
    import Title from "./Title.svelte";
    import PartList from "./PartList.svelte";
    import FieldPartsList from "./FieldPartsList.svelte"; // Import component for field parts
    import parts from './parts.json'; // Import data for robot parts
    import fieldParts from './fieldParts.json'; // Import data for field parts
    import Content from "./Content.svelte";
    import Title4 from "./Title4.svelte";
    import Title3 from "./Title3.svelte";
    import TextBox from "./TextBox.svelte";

    let copyIBANSuccess = false;
    let copyRevolutSuccess = false;

    function copyIBAN() {
        const iban = "RO11 BRMA 0999 1000 4423 0153";
        navigator.clipboard.writeText(iban).then(() => {
            copyIBANSuccess = true;
            setTimeout(() => {
                copyIBANSuccess = false;
            }, 2000);
        });
    }

    function copyRevolut() {
        navigator.clipboard.writeText('+40731813166').then(() => {
            copyRevolutSuccess = true;
            setTimeout(() => {
                copyRevolutSuccess = false;
            }, 2000);
        });
    }
</script>

<Content column big>
    <Title3>
        <b class="h1-style">Why Your Sponsorship <span style="color: rgb(81, 146, 89);">Matters</span></b>
    </Title3>

    <TextBox>
    <p>We need <b>your help</b> to take <b style="color:darkgreen; font-weight:800">Team Undefined</b> to the next level! 🛠️ <br/>
    <br/> </p> As we prepare for the <b><a class="linkundefined" href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noreferrer">FIRST Tech Challenge (FTC)</a></b>, we're looking for <b style="color:tomato; font-weight:800">sponsors</b> to support us in getting the tools and resources we need, like equipment, materials, competition fees, and travel expenses. <br/>
    <br/>Right now, we're working hard, but we're up against many teams with <b>advanced gear</b> like multiple 3D printers, CNC machines, and more. We are using 3D printers from friends and order CNC prints where we can.<br/>
    <br/> <p> With the right support, we can keep pushing boundaries and showing what we're capable of.</p> <br/>
     By sponsoring us, your brand will gain <b>visibility</b> at competitions, on our website and on our social media but it's <b>more than just that!</b> You'll be investing in the future of <b><a class="linkundefined" href="https://www.snhu.edu/about-us/newsroom/stem/what-does-stem-mean-for-you#:~:text=STEM%20is%20a%20common%20abbreviation,%2C%20technology%2C%20engineering%20and%20mathematics." target="_blank" rel="noreferrer">STEM</a></b>, helping young minds like ours develop critical skills in robotics, software development (C, C++, Java), and teamwork. Your support will directly contribute to shaping the next generation of engineers and innovators.<br/>
    <br/><b>Together, we can achieve something incredible for us, and for the future of technology!</b>
    <br/><br/>
    <div class="cta-buttons">
        <a href="#support" class="btn-robotic-primary">
            <span>Donate Now</span>
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </a>
        <a href="#support" class="btn-robotic-secondary">
            <span>Contact Us</span>
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
        </a>
    </div>
    </TextBox>
    <br/><br/>
    <br/><br/>
    <Title3> <b style="color:gold; font-weight:800">Our Top Sponsor</b></Title3>
    <br/><br/>

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
    <br/><br/>
    <br/><br/>
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

    <div id="support" class="support-section">
        <Content column big>
            <Title3>
                <b class="support-title">Ways to Support Team Undefined</b>
                <br/><br/>
            </Title3>
            <TextBox>
            <p>Robotics is not cheap. We need money to purchase parts for our robots, transport ourselves to each of the competitions phases and for the branding of the team.</p><br/>
            <br/><b style="color:darkgreen; font-weight:800; font-size:2rem">Monetary Donations:</b>
            <br/><br/>
            <p>- Bank transfer:</p>
            <div class="iban-container">
                <div class="iban-box">
                    <span class="iban-label">IBAN:</span>
                    <span class="iban-value">RO11 BRMA 0999 1000 4423 0153</span>
                </div>
                <button class="copy-btn" on:click={copyIBAN} class:copied={copyIBANSuccess}>
                    {#if copyIBANSuccess}
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    {:else}
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                    {/if}
                </button>
            </div>
            <p>- Beneficiary: ASOCIAŢIA PĂRINȚILOR ELEVILOR DIN COLEGIUL NAȚIONAL NICOLAE GRIGORESCU - CÂMPINA</p>
            <br/>
            <p>- Patreon:</p>
            <a href="https://www.patreon.com/TeamUndefined" target="_blank" rel="noopener noreferrer" class="payment-container">
                <div class="payment-box">
                    <svg class="payment-logo patreon-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436 476">
                        <path d="M436 143c-.084-60.778-47.57-110.591-103.285-128.565C263.528-7.884 172.279-4.649 106.214 26.424 26.142 64.089.988 146.596.051 228.883c-.77 67.653 6.004 245.841 106.83 247.11 74.917.948 86.072-95.279 120.737-141.623 24.662-32.972 56.417-42.285 95.507-51.929C390.309 265.865 436.097 213.011 436 143Z"></path>
                    </svg>
                    <span class="payment-label">Patreon:</span>
                    <span class="payment-value">Team-Undefined</span>
                </div>
                <svg class="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </a>
            <br/>
            <p>- Revolut:</p>
            <div class="payment-container">
                <div class="payment-box">
                    <img src="/img/revolut-512.png" alt="Revolut" class="payment-logo" />
                    <span class="payment-label">Revolut:</span>
                    <span class="payment-value">+40731813166</span>
                </div>
                <button class="copy-btn" on:click={copyRevolut} class:copied={copyRevolutSuccess}>
                    {#if copyRevolutSuccess}
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    {:else}
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                    {/if}
                </button>
            </div>
            <br/><br/>
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


        <Title3>
            <br/><br/>
            <b>Sponsor Benefits and Recognition</b>
        </Title3>
        <TextBox>
            <p> <b>Logo placement:</b> We will display your logo on our website, team uniforms, social accounts, competitions and robot.</p>
            <p> <b>Media Promotion:</b> Social media shout-outs from the team accounts.</p>
            <p> <b>Mentions:</b>    We will mention you at competitions and events.</p>
        </TextBox>
        <Title3>
            <br/><br/>
            <b>Get in touch
            </b>
        </Title3>
        <TextBox>
            We have all the time in the world for our sponsors. Please email us at: <b><a class="linkundefined" href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"> teamundefined2021@gmail.com</a></b>  or give us a phone call at: +40729094750 (please call after 3 PM as we have classes too)
        </TextBox>
        </Content>
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
    }

    /* Define the style for both desktop and mobile */
    .h1-style {
        font-size: 2rem; /* Default size, will apply to desktop */
        text-align: center;
        /* color: darkgreen; */
        font-weight: 800;
        /* margin: 20px 0; */
    }

    /* Mobile specific styles */
    @media only screen and (max-width: 550px) {
        .h1-style {
            font-size: 1.5rem; /* Smaller font for mobile */
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
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
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
        }

        .iban-value,
        .payment-value {
            font-size: 0.9rem;
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
        padding: 60px 20px;
        margin: 80px 0;
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
            padding: 40px 15px;
            margin: 40px 0;
        }

        .support-title {
            font-size: 1.8rem;
        }
    }

    /* Equipment Grid */
    .equipment-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 30px;
        margin: 40px 0;
        padding: 0 20px;
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
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
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

</style>

