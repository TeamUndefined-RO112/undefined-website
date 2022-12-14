<script lang="ts">
    import '../main.scss'
    import Button from '../components/Button.svelte';
    import Content from '../components/Content.svelte';
    import HomeImage from '../components/HomeImage.svelte';
    import TextBox from '../components/TextBox.svelte';
    import Title from '../components/Title.svelte';
    import Carousel from '../components/Carousel.svelte'
    import { ChevronLeftIcon, ChevronRightIcon, ChevronsDownIcon } from 'svelte-feather-icons'
    import { base } from '$app/paths';
    const scrollPage = () => {
        window.scroll({
            top: window.innerHeight-57,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    </script>
    <span>
    <Carousel
    autoplay={5000}
    perPage={1}
    duration={1000}>
        <span class="control" slot="left-control"><ChevronLeftIcon /></span>
        <img src="{base}/img/home/Grup_Demo.jpeg" class="slide-content" alt="bg">
        <img src="{base}/img/home/Robot_Drop_1.jpeg" class="slide-content" alt="bg">
        <img src="{base}/img/home/Robot_Drop_2.jpeg" class="slide-content" alt="bg">
        <!--<img src="{base}/img/home/grup.jpg" class="slide-content" alt="bg">-->
        <img src="{base}/img/home/2.jpeg" class="slide-content" alt="bg">
        <img src="{base}/img/home/piulitza.jpg" class="slide-content" alt="bg">
        <img src="{base}/img/home/piulitza2.jpg" class="slide-content" alt="bg">
        <img src="{base}/img/home/3.jpeg" class="slide-content" alt="bg">
        <img src="{base}/img/home/robot.jpg" class="slide-content" alt="bg">
        <span class="control" slot="right-control"><ChevronRightIcon /></span>
    </Carousel>
    </span>
    
    <div class="hero">
        <img src="{base}/img/long-logo.png" class="image" alt="bg">
        <div class="description">WE CAN BE ANYTHING</div>
    </div>
    
    <div class="down-arrow" on:click|preventDefault="{scrollPage}"><ChevronsDownIcon size="0.7x"/></div>
    
    
    <Content big column uncentered>
        <Title>Our Team</Title>
        <Title secondary>What is Team UNDEFINED?</Title>
        <TextBox><p>UNDEFINED is a community FIRST Tech Challenge robotics team from Câmpina, Prahova. Our team was founded in October 2018. Our team consists of 15 members, a co-mentor, a mentor and 3 volunteers who try their best to help the team. We were happy to find out that many people were interested. So many that we had to choose carefully the main 15 members while creating a large community of volunteers. </p></TextBox>
        <Content><a href="{base}/team"><Button noclick>Our Team »</Button></a></Content>
    
    </Content>
    
    <Content big>
        <Content column uncentered>
            <Title>The First Tech Challenge</Title>
            <Title secondary>What is FTC?</Title>
            <TextBox><p>FIRST (For Inspiration Recognition of Science and Technology) is an international youth organization, founded in 1989 by Dean Kamen, to inspire young people’s interest and participation in science and technology. <br><br> Guided by adult coaches and mentors, students develop STEM skills and practice engineering principles, while realizing the value of hard work, innovation, and working as a team. </p></TextBox>
            <Content><a href="https://www.firstinspires.org/robotics/ftc" target="_blank"><Button noclick>FTC Website »</Button></a></Content>
        </Content>
    
        <HomeImage src="{base}/img/ftc-logo.png" alt="team logo"/>
    
    </Content>
    
    
    <Content big>
        <HomeImage src="{base}/img/home/robot.jpg" alt="team logo"/>
        <Content column>
            <TextBox centered>
                <p>Team UNDEFINED is looking to not only participate in the FIRST TECH CHALLENGE, but to also teach others and give insights into the industry, as well as connect people.<br><br>If you want to take part in our adventure, you can apply below! It takes 2 minutes to complete our form.</p>
            </TextBox>
            <a href="{base}/team/apply"><Button noclick>Apply Today! »</Button></a>
        </Content>
    </Content>
    
    <svelte:head>
        <title>Team Undefined</title>
    </svelte:head>
    
<style lang="scss">

.control {
    color: white;
}
    .down-arrow {
        position: absolute;
        top: 93%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 3em;
        color: white;
    }
    
    .hero {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
    
        display: flex;
        align-items: center;
        flex-direction: column;
        user-select: none;
        .image {
            width: 40vmax;
        }
        .description {
            color: white;
            font-size: 1.5em;
            font-weight: 400;
        }
    }
    
    .slide-content {
        height:calc(100vh - 3.5rem);
        width: 100%;
        object-fit: cover;
        overflow: hidden;
    }
    
    </style>