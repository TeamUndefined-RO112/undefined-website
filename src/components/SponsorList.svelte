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
</script>

<Content column big>
    <Title3>
        <b>Why Your Sponsorship Matters</b> 
    </Title3>    
    <br/>
    <Title3 secondary>
    <p>We need <b>your help</b> to take <b style="color:darkgreen; font-weight:800">Team Undefined</b> to the next level! 🛠️ <br/>
    <br/> </p> As we prepare for the <b><a class="linkundefined" href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noreferrer">FIRST Tech Challenge (FTC)</a></b>, we're looking for <b style="color:tomato; font-weight:800">sponsors</b> to support us in getting the tools and resources we need, like equipment, materials, competition fees, and travel expenses. <br/>
    <br/>Right now, we're working hard, but we're up against many teams with <b>advanced gear</b> like multiple 3D printers, CNC machines, and more. We are using 3D printers from friends and order CNC prints where we can.<br/>
    <br/> <p> With the right support, we can keep pushing boundaries and showing what we're capable of.</p> <br/>
     By sponsoring us, your brand will gain <b>visibility</b> at competitions, on our website and on our social media but it's <b>more than just that!</b> You'll be investing in the future of <b><a class="linkundefined" href="https://www.snhu.edu/about-us/newsroom/stem/what-does-stem-mean-for-you#:~:text=STEM%20is%20a%20common%20abbreviation,%2C%20technology%2C%20engineering%20and%20mathematics." target="_blank" rel="noreferrer">STEM</a></b>, helping young minds like ours develop critical skills in robotics, software development (C, C++, Java), and teamwork. Your support will directly contribute to shaping the next generation of engineers and innovators.<br/>
    <br/><b>Together, we can achieve something incredible for us, and for the future of technology!</b>
    <br/><br/>
    <br/><br/>
    <br/><br/>
    <Title3> <b style="color:gold; font-weight:800">Our top sponsor</b></Title3>
    <br/><br/>
    <div class="divcenter"><img src="/img/sponsor/wam romania.jpg" title="Team Undefined" width="600" style="align:center"/></div>
    </Title3>
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
                <Sponsor image={sponsor.src} text={sponsor.name}></Sponsor>
            {/each}
        {:else}
            <Title secondary>No sponsors... :(</Title>
        {/if}
    </div>

    <Content column big>
        <Title3>
            <br/><br/>
            <b>Ways to Support Team Undefined</b> 
            <br/><br/>
        </Title3>  
        <Title3 secondary>
            <p>Robotics is not cheap. We need money to purchase parts for our robots, transport ourselves to each of the competitions phases and for the branding of the team.</p><br/>
            <br/><b style="color:darkgreen; font-weight:800; font-size:2rem">Monetary Donations:</b>
            <br/><br/>
            <p>- Bank transfer: IBAN: <b>RO11 BRMA 0999 1000 4423 0153 <p/></b> - SWIFTCODE: BRMAROBUXXX, <p>- Beneficiary: ASOCIAŢIA PĂRINȚILOR ELEVILOR DIN COLEGIUL NAȚIONAL NICOLAE
            GRIGORESCU - CÂMPINA </p>
            - Patreon: <b><a class="linkundefined" href="https://www.patreon.com/TeamUndefined" target="_blank" rel="noreferrer">Team-Undefined</a></b>
            <p>- Revolut: <u>+40731813166</u></p>
            <br/><br/>
            <br/><p> <b style="color:darkgreen; font-weight:800; font-size:2rem">Equipment Donations:</b></p>
            Any gear you can contribute with, matters. From laptops, 3d printers, CNCs, raw materials.
Most important is the immediate acquisition of these parts so we can build this year theme:


            <Title3>
                <br/><br/>
                <b>Sponsor Benefits and Recognition</b>
            </Title3>
        </Title3>
        <Title3 secondary>
            <p1 style="align-left"> <b>Logo placement:</b> We will display your logo on our website, team uniforms, social accounts, competitions and robot.<p/><p1/>
            <p2 style="align-left"> <b>Media Promotion:</b> Social media shout-outs from the team accounts.<p/></p2>
            <p3 style="align-left"> <b>Mentions:</b>    We will mention you at competitions and events.</p3> 
        </Title3>
        <Title3>
            <br/><br/>
            <b>Get in touch
            </b>
        </Title3>
        <Title3 secondary>
            We have all the time in the world for our sponsors. Please email us at: <b><a class="linkundefined" href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"> teamundefined2021@gmail.com</a></b>  or give us a phone call at: +40729094750 (please call after 3 PM as we have classes too)
        </Title3>
    </Content>

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
        font-size: 3em;
        text-align: center;
        font-family: 'Georgia', serif;
        font-weight: bold;
        color: #333;
    }

    .sponsor-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
    }
</style>

