<script lang="ts">
    import Content from "./Content.svelte";
    import Title3 from "./Title3.svelte";
    import TextBox from "./TextBox.svelte";
    import FieldPartsList from "./FieldPartsList.svelte";
    import PartList from "./PartList.svelte";
    import fieldParts from './fieldParts.json';
    import parts from './parts.json';

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
        <b class="support-title"><span style="color: white;">Ways to Support</span> Team Undefined</b>
    </Title3>
    <TextBox>
        <p style="text-align: center; font-size: 1.1rem;">Robotics is not cheap. We need money to purchase parts for our robots, transport ourselves to each of the competitions phases and for the branding of the team.</p>
    </TextBox>
</Content>

<div id="support" class="support-section">
    <Content column big>
        <TextBox>
        <br/><b style="color: white; font-weight:800; font-size:2.2rem; font-family: 'Orbitron', monospace; letter-spacing: 0.05em;">Monetary Donations <span style="color: rgb(81, 146, 89);">YOU CAN MAKE</span>:</b>
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
        </TextBox>
    </Content>
</div>

<Content column big>
    <TextBox>
        <br/><p> <b style="color: white; font-weight:800; font-size:2.2rem; font-family: 'Orbitron', monospace; letter-spacing: 0.05em;">Sponsorship <span style="color: rgb(81, 146, 89);">OPPORTUNITIES</span></b></p>
        <br/>
        <p style="text-align: center; font-size: 1.1rem; line-height: 1.8;">
            Looking to make a bigger impact? <b style="color: rgb(81, 146, 89);">Become a sponsor!</b> Your company's support helps us compete at the highest level while gaining valuable visibility in the robotics community. From logo placement to event appearances, we offer multiple sponsorship tiers to match your goals.
        </p>
        <br/>
        <div style="text-align: center;">
            <a href="/team/sponsors" class="btn-robotic-primary">
                <span>Explore Sponsorship</span>
                <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </a>
        </div>
        <br/>
    </TextBox>
</Content>
<br/><br/>

<Content column big>
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
</Content>

<section>
    <div class="donation-info">
        <p style="text-align: center; font-size: 1.15rem; line-height: 1.8; max-width: 800px; margin: 0 auto 40px auto; color: rgba(255, 255, 255, 0.9);">
            <b style="color: rgb(81, 146, 89);">Two ways to help:</b> You can make a monetary donation using the methods above, <b>or</b> you can purchase items from our parts list and ship them directly to our high school.
            <br/><br/>
            Find our <a href="/contact" class="inline-link">shipping address on the contact page</a>.
        </p>
    </div>

    <h2>Robot Parts Needed</h2>
    <PartList parts={parts}></PartList>

    <h2>Field Parts Needed</h2>
    <FieldPartsList fieldParts={fieldParts}></FieldPartsList>
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

    /* CTA Button */
    .btn-robotic-primary {
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
        background: rgb(81, 146, 89);
        color: white;
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

    .btn-robotic-primary:hover {
        background: white;
        color: rgb(81, 146, 89);
        box-shadow: 0 8px 25px rgba(81, 146, 89, 0.4);
        transform: translateY(-3px);
    }

    .btn-icon {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
    }

    .btn-robotic-primary:hover .btn-icon {
        transform: translateX(3px);
    }

    /* Donation Info */
    .donation-info {
        padding: 30px 20px;
        background: linear-gradient(135deg, rgba(81, 146, 89, 0.05) 0%, rgba(24, 24, 24, 0.5) 100%);
        border-left: 3px solid rgb(81, 146, 89);
        border-right: 3px solid rgb(81, 146, 89);
        margin-bottom: 40px;
    }

    .inline-link {
        color: rgb(81, 146, 89);
        text-decoration: none;
        font-weight: 700;
        border-bottom: 2px solid rgba(81, 146, 89, 0.3);
        transition: all 0.3s ease;
        padding-bottom: 2px;
    }

    .inline-link:hover {
        border-bottom-color: rgb(81, 146, 89);
        color: rgba(81, 146, 89, 0.8);
    }
</style>
