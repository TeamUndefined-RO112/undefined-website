<footer>
    <br><hr>
    <div class="content">
        <p>© 2022 Team Undefined</p>
        <ul class="social-list">
            <li><a href="https://www.instagram.com/team_undefined/" target="_blank">Instagram</a></li>
            <li><a href="https://www.facebook.com/teamundefinedcnng/" target="_blank">Facebook</a></li>
            <li><a href="https://www.youtube.com/channel/UCN4OeYg_hz3U1jyXbdKV9cw" target="_blank">Youtube</a></li>
        </ul>
    </div>
</footer>

<style lang="scss">
@use '../main';

footer {
    width: 100%;
    background-color: #f8f9fa;
    height: 150px;
    p {
        width: 200px;
        display: inline;
        font-size: 12px;
    }

    .content {
        color: rgb(77, 77, 77);
        width: 90%;
        margin-left: 5%; 
        ul {
            float: right;
            display: inline;
            margin: 0;
            li {
                padding: 5px;
                padding-top: 0%;
                display: inline-block;
                a {
                    text-decoration: none;
                    color: rgb(77, 77, 77);
                    transition: all 0.2s;
                    &:hover {
                        color: main.$orange;
                    }
                }
            }
        }
    }
    hr {
        width: 90%;
        border-color: #ffffff;
    }
}
</style>