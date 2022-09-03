<script lang="ts">
    export let centered: boolean = false;
</script>

<div class:center={centered}><slot/></div>

<style lang="scss">
div {
    font-size: 20px;
    line-height: 2em;
    font-weight: 300;
}

.center {
    text-align: center;
    padding: 2em;
}

@media screen and (max-width: 600px) {
    div {
        font-size: 17px;
  }
}
</style>