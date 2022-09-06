<script lang="ts">
import { page } from '$app/stores';
import '../main.scss'
type pageType = "/" | "/team" | "/team/apply" | "/team/sponsors" | "/championship" | "/contact";
export let path: pageType = '/';
$: path = $page.url.pathname as pageType;
</script>

<nav>
    <a href="/"><img src="/img/logo-small.png" alt="team logo"></a>
    <div class="divider"></div>
    <a href="/"><p class:active={path == "/"}>Home</p></a>
    <a href="/team"><p class:active={path == "/team"}>About Us</p></a>
    <a href="/team/apply"><p class:active={path == "/team/apply"}>Apply</p></a>
    <a href="/team/sponsors"><p class:active={path == "/team/sponsors"}>Sponsors</p></a>
    <div class="divider"></div>
    <a href="/contact"><p class:active={path == "/contact"}>Contact</p></a>
</nav>

<style lang="scss">
    @use '../main';
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

    @media screen and (max-width: 720px) {
  nav {
    p {
        margin: 0 0.4em;
        font-size: small;
    }

    .divider {
        margin: 0;
    }
}
}
</style>