<script lang="ts">
import { Link } from "svelte-routing";

type pageType = "/" | "/team" | "/team/apply" | "/team/sponsors" | "/championship" | "/contact";
export let page: pageType = '/';

function getProps({ location }) {
    console.log(location)
    page=location.pathname
    return {}
}

</script>

<nav>
    <Link to="/" getProps="{getProps}"><img src="/img/logo-small.png" alt="team logo"></Link>
    <div class="divider"></div>
    <Link to="/"><p class:active={page == "/"}>Home</p></Link>
    <Link to="team"><p class:active={page == "/team"}>About Us</p></Link>
    <Link to="team/apply"><p class:active={page == "/team/apply"}>Apply</p></Link>
    <Link to="team/sponsors"><p class:active={page == "/team/sponsors"}>Sponsors</p></Link>
    <Link to="championship"><p class:active={page == "/championship"}>Championship</p></Link>
    <div class="divider"></div>
    <Link to="contact"><p class:active={page == "/contact"}>Contact</p></Link>
</nav>

<style lang="scss">
    @use "../main.scss";

    nav {
        position: fixed;
        top: 0;

        width: 100%;
        height: 3.5rem;

        background-color: main.$default;
        box-shadow: 0px 0px 10px black;
        font-family: 'Noto Sans';
        font-weight: 400;
        
        z-index: 500;

        display: flex;
        align-items: center;
        justify-content: center;

        .divider {
            width: 1px;
            height: 60%;
            margin: 0 24px;
            flex: 0 0 auto;
            background-color: rgba($color: #a5a5a5, $alpha: 0.6);
        }

        img {
            width: 3rem;
            height: 3rem;
            float: left;
            margin-right: 8px;
        }

        p {
            float: left;
            margin: 0 1.5em;
            color: white;
            text-align: center;
            text-decoration: none;
            font-size: 1em;

            &:hover:not(.active) {
                color: main.$secondary;
                transition: color 0.4s;
            }
        }
        .active {
            color: main.$active;
        }
    }
</style>