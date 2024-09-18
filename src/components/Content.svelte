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
    
    gap: 20px;
    background: none;
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
    padding: 3em 10%;
}

@media screen and (max-width: 1100px) {
  content {
    flex-direction: column;
  }
}
</style>