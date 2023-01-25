<script lang="ts">
	import Siema from 'siema'
	import { onMount, createEventDispatcher } from 'svelte'
    import CarouselImage from './CarouselImage.svelte';
	import {ChevronLeftIcon, ChevronRightIcon} from 'svelte-feather-icons'

	export let perPage = 3
	export let loop = true
	export let autoplay = 0
	export let duration = 200
	export let easing = 'ease-out'
	export let startIndex = 0
	export let draggable = true
	export let multipleDrag = true	
	export let threshold = 20
	export let rtl = false
	let currentIndex = startIndex;
	
	let siema: HTMLDivElement;
	let controller: Siema;
	let timer: NodeJS.Timer
	const dispatch = createEventDispatcher()
	
	$: pips = controller ? controller.innerElements : []
	$: currentPerPage = controller ? controller.perPage : perPage
	$: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : []
	
	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
  			duration,
  			easing,
  			startIndex,
  			draggable,
 			multipleDrag,
  			threshold,
  			rtl,
			onChange: handleChange
		})
		
		if(autoplay) {
			timer = setInterval(right, autoplay);
		}
		return () => {
			if(autoplay > 0) clearInterval(timer)
		}
	})
	
	export function isDotActive (currentIndex: any, dotIndex: any) {
        if (currentIndex < 0) currentIndex = pips.length + currentIndex;
        return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
    }
	
	export function left () {
		controller.prev()
	}
	
	export function right () {
		controller.next()
		console.log(controller)
	}
	
	export function go (index: number) {
		controller.goTo(index)
	}
	
	export function pause() {
		clearInterval(timer);
	}
	
	export function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}
	
	function handleChange (_event: any) {
		currentIndex = controller.currentSlide
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		} )
	}
	
	function resetInterval(node: any, condition: any) {
		function handleReset(_event: any) {
			pause();
			resume();
		}
		
		if(condition) {
			node.addEventListener('click', handleReset);
		}
		
		return {
		  destroy() {
			  node.removeEventListener('click', handleReset);
		  }
	  }
  }
</script>


<div class="relative w-full justify-center items-center">
	<div class="slides" bind:this={siema}>
		<CarouselImage src="/img/home/Grup_Demo.jpeg"/>
		<CarouselImage src="/img/home/Robot_Drop_1.jpeg"/>
		<CarouselImage src="/img/home/Robot_Drop_2.jpeg"/>
		<CarouselImage src="/img/home/2.jpeg"/>
		<CarouselImage src="/img/home/piulitza.jpg"/>
		<CarouselImage src="/img/home/piulitza2.jpg"/>
		<CarouselImage src="/img/home/3.jpeg"/>
		<CarouselImage src="/img/home/robot.jpg"/>
	</div>
	<button class="left" on:click={left} use:resetInterval={autoplay} aria-label="left">
		<span class="text-white"><ChevronLeftIcon /></span>
	</button>
	<button class="right" on:click={right} use:resetInterval={autoplay} aria-label="right">
		<span class="text-white"><ChevronRightIcon /></span>
	</button>
	<ul>
		{#each {length: totalDots} as _, i}
		<li on:click={() => go(i*currentPerPage)} class={isDotActive(currentIndex, i) ? "active" : ""}></li>
		{/each}
	</ul>
</div>

<style>
	
	button {
		position: absolute;
		width: 40px;
		height: 40px;
		top: 50%;
		z-index: 50;
		margin-top: -20px;
		border: none;
		background-color: transparent;
	}
  button:focus {
    outline: none;
  }
	
	.left {
		left: 2vw;
	}
	
	.right {
		right: 2vw;
	}
	ul {
		list-style-type: none;
		position: absolute;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: -30px;
		padding: 0;
	}
	ul li {
		margin: 6px;
		border-radius: 100%;
		background-color: rgba(255,255,255,0.5);
		height: 8px;
		width: 8px;
	}
	ul li:hover {
		background-color: rgba(255,255,255,0.85);
	}
	ul li.active {
		background-color: rgba(255,255,255,1);
	}
</style>