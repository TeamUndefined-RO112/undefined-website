<script lang="ts">
    export let href:string="/";
    export let path: string;
</script>
<a href={href} class="mx-2 md:mx-4 text-gray-300 font-normal hover:text-darkdefault transition-colors"><p class:text-default={path==href}><slot/></p></a>