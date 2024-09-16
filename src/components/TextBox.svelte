<script lang="ts">
    export let centered: boolean = false;
</script>

<div class:center={centered}><slot/></div>

<style>
div {
    font-size: 20px;
    line-height: 1.5em;
    font-weight: 300;
}

.center {
    text-align: center;
    padding: 4em;
}

@media screen and (max-width: 600px) {
    div {
        font-size: 10px;
  }
}
</style>