<script lang="ts">
    export let image: string;
    export let text: string;
    export let url: string = "";
    export let description: string = "";
</script>

<div class="sponsor-card">
    <div class="corner-accent top-left"></div>
    <div class="corner-accent top-right"></div>
    <div class="corner-accent bottom-left"></div>
    <div class="corner-accent bottom-right"></div>

    {#if url}
        <a href={url} target="_blank" rel="noopener noreferrer" class="sponsor-link">
            <div class="sponsor-image-container">
                <img src={image} alt={text}>
            </div>
            <p class="sponsor-name">{text}</p>
        </a>
    {:else}
        <div class="sponsor-image-container">
            <img src={image} alt={text}>
        </div>
        <p class="sponsor-name">{text}</p>
    {/if}

    {#if description}
        <p class="sponsor-description">{description}</p>
    {/if}
</div>

<style>
.sponsor-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 30px 20px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
    width: 100%;
    max-width: 420px;
    pointer-events: auto;
    touch-action: auto;
    backdrop-filter: blur(22px);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
}

.sponsor-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.08), transparent);
    transition: left 0.6s ease;
    z-index: 1;
}

.sponsor-card:hover::before {
    left: 100%;
}

.sponsor-card:hover {
    transform: translateY(-6px);
    border-color: rgba(34, 197, 94, 0.42);
    box-shadow: 0 26px 90px rgba(34, 197, 94, 0.12);
}

/* Corner accents */
.corner-accent {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(34, 197, 94, 0.4);
    transition: all 0.3s ease;
    z-index: 2;
}

.corner-accent.top-left {
    top: 8px;
    left: 8px;
    border-right: none;
    border-bottom: none;
}

.corner-accent.top-right {
    top: 8px;
    right: 8px;
    border-left: none;
    border-bottom: none;
}

.corner-accent.bottom-left {
    bottom: 8px;
    left: 8px;
    border-right: none;
    border-top: none;
}

.corner-accent.bottom-right {
    bottom: 8px;
    right: 8px;
    border-left: none;
    border-top: none;
}

.sponsor-card:hover .corner-accent {
    border-color: rgba(34, 197, 94, 0.8);
    width: 16px;
    height: 16px;
}

.sponsor-image-container {
    position: relative;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: white;
    border-radius: 12px;
    margin-bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 1;
}

img {
    max-width: 100%;
    max-height: 160px;
    width: auto;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.sponsor-card:hover img {
    transform: scale(1.05);
}

.sponsor-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.sponsor-name {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Space Grotesk', 'Orbitron', sans-serif;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
}

.sponsor-card:hover .sponsor-name {
    color: rgb(34, 197, 94);
}

.sponsor-description {
    font-size: 0.95rem;
    font-family: 'Inter', sans-serif;
    color: #cfcfcf;
    line-height: 1.5;
    margin-top: 15px;
    padding: 0 10px;
    text-align: center;
    position: relative;
    z-index: 1;
}

/* Responsive */
@media screen and (max-width: 640px) {
    .sponsor-card {
        max-width: 100%;
        padding: 20px 15px;
    }

    .sponsor-image-container {
        height: 160px;
        padding: 15px;
    }

    img {
        max-height: 130px;
    }

    .sponsor-name {
        font-size: 1rem;
    }
}
</style>
