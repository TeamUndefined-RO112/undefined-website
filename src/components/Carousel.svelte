<script lang="ts">
	import Siema from 'siema'
	import { onMount, createEventDispatcher } from 'svelte'
    import CarouselImage from './CarouselImage.svelte';
	import {ChevronLeftIcon, ChevronRightIcon} from 'svelte-feather-icons'

	export let perPage = 3
	export let loop = true
	export let autoplay = 0
	export let duration = 600
	export let easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
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
		<CarouselImage src="/img/home/piulitza.jpeg"/>
		<CarouselImage src="/img/home/vik_blur.jpeg"/>
		<CarouselImage src="/img/home/group photo10.jpeg"/>
		<CarouselImage src="/img/home/festival.jpeg"/>
		<CarouselImage src="/img/home/competition photo.jpeg"/>
		<CarouselImage src="/img/home/selfie_gang.jpeg"/>
		<CarouselImage src="/img/home/vik_natie.jpeg"/>
		<CarouselImage src="/img/home/gang look2.jpeg"/>
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
		width: 50px;
		height: 50px;
		top: 50%;
		z-index: 50;
		margin-top: -25px;
		border: 2px solid rgba(81, 146, 89, 0.5);
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(5px);
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button:hover {
		background-color: rgba(81, 146, 89, 0.3);
		border-color: rgba(81, 146, 89, 1);
		box-shadow: 0 0 20px rgba(81, 146, 89, 0.5);
	}

	button:focus {
		outline: none;
	}

	.left {
		left: 2vw;
		clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
	}

	.right {
		right: 2vw;
		clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 80%);
	}

	ul {
		list-style-type: none;
		position: absolute;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: -40px;
		padding: 0;
		z-index: 50;
	}

	ul li {
		margin: 6px;
		border-radius: 2px;
		background-color: rgba(81, 146, 89, 0.3);
		border: 1px solid rgba(81, 146, 89, 0.5);
		height: 3px;
		width: 40px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	ul li:hover {
		background-color: rgba(81, 146, 89, 0.6);
		box-shadow: 0 0 10px rgba(81, 146, 89, 0.5);
	}

	ul li.active {
		background-color: rgba(81, 146, 89, 1);
		box-shadow: 0 0 15px rgba(81, 146, 89, 0.8);
		height: 4px;
	}

	/* Add overlay effect to carousel images */
	:global(.slides) {
		position: relative;
	}

	:global(.slides::after) {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg,
			rgba(0,0,0,0.3) 0%,
			transparent 30%,
			transparent 70%,
			rgba(0,0,0,0.5) 100%
		);
		pointer-events: none;
		z-index: 1;
	}
</style>