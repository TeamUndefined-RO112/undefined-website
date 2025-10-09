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
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 245, 245, 0.98) 100%);
    border: 2px solid rgba(81, 146, 89, 0.3);
    clip-path: polygon(
        0 0,
        calc(100% - 15px) 0,
        100% 15px,
        100% 100%,
        15px 100%,
        0 calc(100% - 15px)
    );
    padding: 30px 20px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
    width: 100%;
    max-width: 420px;
}

.sponsor-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(81, 146, 89, 0.1), transparent);
    transition: left 0.6s ease;
    z-index: 1;
}

.sponsor-card:hover::before {
    left: 100%;
}

.sponsor-card:hover {
    transform: translateY(-8px);
    border-color: rgba(81, 146, 89, 0.6);
    box-shadow: 0 15px 50px rgba(81, 146, 89, 0.25),
                0 0 30px rgba(81, 146, 89, 0.15);
}

/* Corner accents */
.corner-accent {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(81, 146, 89, 0.5);
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
    border-color: rgba(81, 146, 89, 0.9);
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
    border-radius: 4px;
    margin-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    z-index: 1;
}

img {
    max-width: 100%;
    max-height: 160px;
    width: auto;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
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
    font-family: 'Rajdhani', sans-serif;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
}

.sponsor-card:hover .sponsor-name {
    color: rgb(81, 146, 89);
}

.sponsor-description {
    font-size: 0.95rem;
    font-family: 'Rajdhani', sans-serif;
    color: #555;
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
