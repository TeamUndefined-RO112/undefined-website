<script lang="ts">
import Carousel from 'svelte-carousel'

const scrollPage = () => {
    console.log("tt")
    window.scroll({
        top: window.innerHeight-57,
        left: 0,
        behavior: 'smooth'
    });
}

</script>

<Carousel autoplay
duration={1000}
autoplayDuration={5000}
let:showPrevPage
let:showNextPage>

    <div slot="prev" on:click={showPrevPage} class="custom-arrow">⮜</div>

    <img src="/img/support_labs06.jpg" class="slide-content" alt="bg">
    <img src="/img/support_labs06.jpg" class="slide-content" alt="bg">
    <img src="/img/support_labs06.jpg" class="slide-content" alt="bg">

    <div slot="next" on:click={showNextPage} class="custom-arrow right-0">⮞</div>
</Carousel>

<div class="hero">
    <img src="/img/long-logo.png" class="image" alt="bg">
    <div class="description">Cea mai jmek echipa de robo evăr!!</div>
</div>

<p class="down-arrow" on:click|preventDefault="{scrollPage}">⮟</p>
<content>
    <div class="cont">
        <h1>What is Team UNDEFINED?</h1>
        <div class="textbox"><p>UNDEFINED is a community FIRST Tech Challenge robotics team from Câmpina, Prahova. Our team was founded in October 2018 and it was composed of 15 students, 2 co-mentors and one mentor; now, our team consists of 15 members, a co-mentor, a mentor and 3 volunteers who try their best to help the team. We were happy to find out that many people were interested. So many that we had to choose carefully the main 15 members while creating a large community of volunteers. </p></div>
        <a href="./team/"><button>Our Team »</button></a>
    </div>
</content>

<div class="divider"></div>
<content>
    <div class="cont">
        <h1>What is FTC?</h1>
        <div class="textbox"><p>FIRST (For Inspiration Recognition of Science and Technology) is an international youth organization, founded in 1989 by Dean Kamen, to inspire young people’s interest and participation in science and technology. <br><br> Guided by adult coaches and mentors, students develop STEM skills and practice engineering principles, while realizing the value of hard work, innovation, and working as a team. </p></div>
        <a href="https://www.firstinspires.org/robotics/ftc" target="_blank"><button>FTC Website »</button></a>
    </div>
    <img src="/img/ftc-logo.png" alt="team logo">
</content>
<div class="divider"></div>
<content>
    <img src="/img/support_labs06.jpg" alt="team logo">
    <div class="cont">
        <div class="textbox">
            <p>All of us work hard towards our common goal, which is improving our skills, learning something new from each other every time we meet, gaining new interesting experiences and (hopefully) winning the FIRST TECH CHALLENGE contest. <br><br> So if you consider yourself capable enough to be a part of our team, you can apply below. </p>
            
        </div>
        <a href="./team/apply/"><button>Apply »</button></a>
    </div>
</content>
<div class="divider"></div>

<style lang="scss">

.down-arrow {
    position: absolute;
    top: 85%;
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
    .image {
        width: 40vmax;
    }
    .description {
        color: white;
        font-size: 1.5em;
    }
}

.custom-arrow {
    height: 100%;
    position: absolute;
    width: 40px;
    color: white;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    user-select: none;
}

.right-0 {
    right:0;
}

.slide-content {
    height:calc(100vh - 3.5rem - 20px);
    background-color: bisque;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
}

nav {
    background-color: aqua;
}

//-------------------------

content {
    height: 30em;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 80%;
        width: 35%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0px 4px 10px gray;
    }

    .cont {
        height: 400px;
        
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .textbox {
            text-align: center;
            width: 80%;
            font-size: 20px;
        }

        button {
            padding-left: 40px;
            padding-right: 40px;
            height: 50px;
            border-color: rgb(65, 139, 71);
            border-style: solid;
            border-radius: 8px;
            background: none;
            font-size: 20px;
            font-family: 'League Spartan';
            color: rgb(92, 92, 92);
            &:hover {
                background-color: rgb(65, 139, 71);
                color: white;
                transition: background-color 0.5s;
            }
        }
    }
}

.divider{
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
}

@media screen and (max-width: 600px) {
  div.textbox p {
    font-size: 14px;
  }
}

</style>