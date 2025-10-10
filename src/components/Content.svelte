<script lang="ts">
    export let uncentered: boolean = false;
    export let column: boolean = false;
    export let big: boolean = false;
    export let wrap: boolean = false;
</script>

<content class:center={!uncentered} class:column={column} class:big={big} class:wrap={wrap}><slot/></content>

<style>
content {
    display: flex;
    justify-content: center;
    max-width: 100vw;
    box-sizing: border-box;
    gap: 20px;
    background: url("/img/home/perlinbg.svg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

.center {
    align-items: center;
}

.column {
    flex-direction: column;
}

.wrap {
    flex-wrap: wrap;
}

.big {
    padding: 0.5em 10%;
}

@media screen and (max-width: 1100px) {
  content {
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {
  .big {
    padding: 0.2em 5%;
  }
}
</style>