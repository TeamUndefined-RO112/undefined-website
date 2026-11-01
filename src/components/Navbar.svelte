<script lang="ts">
export let url: URL;

let menuOpen = false;
let y = 0;
let isScrolled = false;
let navElement: HTMLElement;

$: isScrolled = y > 25;

function toggleMenu() {
    menuOpen = !menuOpen;
}

function closeMenu() {
    menuOpen = false;
}

function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && menuOpen) {
        closeMenu();
    }
}

// Click outside listener
function handleClickOutside(e: MouseEvent) {
    if (menuOpen && navElement && !navElement.contains(e.target as Node)) {
        closeMenu();
    }
}

function getPageLabel(pathname: string): { label: string; isSpecial: boolean } {
    if (pathname === "/") return { label: "HOME", isSpecial: false };
    if (pathname.startsWith("/game")) return { label: "BEE SIMULATOR", isSpecial: true };
    if (pathname.startsWith("/team/apply")) return { label: "APPLY", isSpecial: false };
    if (pathname.startsWith("/team/sponsors")) return { label: "SPONSORS", isSpecial: false };
    if (pathname.startsWith("/team")) return { label: "ABOUT US", isSpecial: false };
    if (pathname.startsWith("/robots")) return { label: "ROBOTS", isSpecial: false };
    if (pathname.startsWith("/donate")) return { label: "DONATE", isSpecial: false };
    if (pathname.startsWith("/contact")) return { label: "CONTACT", isSpecial: false };
    return { label: "UNDEFINED", isSpecial: false };
}

$: currentPage = getPageLabel(url.pathname);
</script>

<svelte:window bind:scrollY={y} on:keydown={handleKeydown} on:click={handleClickOutside} />

<nav
    bind:this={navElement}
    class="navbar-nav fixed left-1/2 z-[500] w-[92%]"
    class:is-scrolled={isScrolled && !menuOpen}
>
    <!-- Compact Liquid Glass Capsule Bar -->
    <header
        class="liquid-capsule flex items-center justify-between relative rounded-2xl"
    >
        <!-- Ambient Liquid Sheen Layer -->
        <div class="liquid-sheen" aria-hidden="true"></div>

        <!-- Left: Logo & Team Brand (Snug & Compact) -->
        <a
            href="/"
            class="brand-wrap flex items-center gap-2 relative group z-10"
            on:click={closeMenu}
            aria-label="Team Undefined Home"
        >
            <div class="logo-box relative flex items-center justify-center flex-shrink-0">
                <div class="logo-glow absolute inset-0 bg-primary-green/25 blur-md group-hover:bg-primary-green/50 transition-all duration-300"></div>
                <img
                    src="/logo_undefined_white.svg"
                    alt="Team Undefined Logo"
                    class="logo-img relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div class="brand-text flex items-center gap-1.5 leading-none">
                <span class="brand-title font-orbitron font-extrabold text-xs md:text-sm tracking-wider text-white">UNDEFINED</span>
                <span class="brand-team font-rajdhani font-bold text-[11px] md:text-xs tracking-wider text-primary-green">#19112</span>
            </div>
        </a>

        <!-- Middle: Compact Current Location Pill -->
        <div class="location-pill hidden min-[480px]:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full z-10">
            <span class="location-dot {currentPage.isSpecial ? 'bg-amber-400' : 'bg-primary-green'}"></span>
            <span class="location-text font-rajdhani font-semibold text-[11px] md:text-xs tracking-wider uppercase text-white/80">
                {currentPage.label}
            </span>
        </div>

        <!-- Right: Compact Liquid Glass Menu Trigger Button -->
        <button
            class="liquid-menu-trigger z-10 flex items-center gap-1.5 rounded-xl transition-all duration-300 group"
            class:is-active={menuOpen}
            on:click={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle Navigation Menu"
        >
            <span class="trigger-label font-orbitron font-bold text-[11px] md:text-xs uppercase tracking-wider text-white group-hover:text-primary-green transition-colors">
                {menuOpen ? 'CLOSE' : 'MENU'}
            </span>

            <!-- Animated Morphing Hamburger/Close Icon -->
            <div class="burger-bars flex flex-col justify-center items-center gap-0.5 w-3.5 h-3.5" class:open={menuOpen}>
                <span class="burger-line line-1"></span>
                <span class="burger-line line-2"></span>
                <span class="burger-line line-3"></span>
            </div>
        </button>
    </header>

    <!-- Compact Liquid Glass Popup Menu Dropdown -->
    {#if menuOpen}
        <div
            class="liquid-popup-menu mt-2 rounded-2xl p-3 md:p-4 shadow-2xl relative overflow-hidden animate-liquid-pop"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation Menu"
        >
            <!-- Background Liquid Glass Caustics & Reflection -->
            <div class="popup-glass-sheen" aria-hidden="true"></div>
            <div class="popup-ambient-glow" aria-hidden="true"></div>

            <!-- Compact Telemetry Header -->
            <div class="popup-telemetry-row flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-[10px] md:text-[11px] font-rajdhani tracking-wider text-white/50 uppercase">
                <span class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse"></span>
                    <span>NAVIGATION</span>
                </span>
                <span class="hidden sm:inline-block">FTC 2026-2027</span>
                <span class="text-white/40">ESC TO CLOSE</span>
            </div>

            <!-- Compact 2-Column Navigation Grid -->
            <div class="popup-grid grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2 relative z-10">
                <!-- Column 1: Main Team Links -->
                <div class="flex flex-col gap-1.5">
                    <a
                        href="/"
                        class="nav-tile group"
                        class:tile-active={url.pathname === '/'}
                        on:click={closeMenu}
                    >
                        <div class="tile-number">01</div>
                        <div class="tile-info">
                            <span class="tile-name">Home</span>
                            <span class="tile-sub">Team hub & intro</span>
                        </div>
                        <span class="tile-arrow">→</span>
                    </a>

                    <a
                        href="/team"
                        class="nav-tile group"
                        class:tile-active={url.pathname === '/team'}
                        on:click={closeMenu}
                    >
                        <div class="tile-number">02</div>
                        <div class="tile-info">
                            <span class="tile-name">About Us</span>
                            <span class="tile-sub">Values & members</span>
                        </div>
                        <span class="tile-arrow">→</span>
                    </a>

                    <a
                        href="/robots"
                        class="nav-tile group"
                        class:tile-active={url.pathname === '/robots'}
                        on:click={closeMenu}
                    >
                        <div class="tile-number">03</div>
                        <div class="tile-info">
                            <span class="tile-name">Robots</span>
                            <span class="tile-sub">Botzilla, VIK & Frank</span>
                        </div>
                        <span class="tile-arrow">→</span>
                    </a>

                    <a
                        href="https://defined.teamundefined.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="nav-tile group"
                        on:click={closeMenu}
                    >
                        <div class="tile-number">04</div>
                        <div class="tile-info">
                            <span class="tile-name">Defined</span>
                            <span class="tile-sub">Action library ↗</span>
                        </div>
                        <span class="tile-arrow ext">↗</span>
                    </a>
                </div>

                <!-- Column 2: Season Special & Community -->
                <div class="flex flex-col gap-1.5">
                    <!-- SPECIAL SPOTLIGHT TILE: BEE SIMULATOR -->
                    <a
                        href="/game"
                        class="nav-tile featured-bee-tile group"
                        class:tile-bee-active={url.pathname === '/game'}
                        on:click={closeMenu}
                    >
                        <div class="bee-badge">2026</div>
                        <div class="tile-icon-bee">🐝</div>
                        <div class="tile-info">
                            <span class="tile-name-bee">BEE Simulator</span>
                            <span class="tile-sub-bee">Native 3D app · Win/Mac/Linux</span>
                        </div>
                        <span class="tile-arrow bee-arrow">▶</span>
                    </a>

                    <a
                        href="/team/apply"
                        class="nav-tile group"
                        class:tile-active={url.pathname === '/team/apply'}
                        on:click={closeMenu}
                    >
                        <div class="tile-number">05</div>
                        <div class="tile-info">
                            <span class="tile-name">Apply</span>
                            <span class="tile-sub">Join Team Undefined</span>
                        </div>
                        <span class="tile-arrow">→</span>
                    </a>

                    <a
                        href="/team/sponsors"
                        class="nav-tile group"
                        class:tile-active={url.pathname === '/team/sponsors'}
                        on:click={closeMenu}
                    >
                        <div class="tile-number">06</div>
                        <div class="tile-info">
                            <span class="tile-name">Sponsors</span>
                            <span class="tile-sub">Partners & benefits</span>
                        </div>
                        <span class="tile-arrow">→</span>
                    </a>

                    <div class="grid grid-cols-2 gap-1.5">
                        <a
                            href="/donate"
                            class="nav-tile mini group"
                            class:tile-active={url.pathname === '/donate'}
                            on:click={closeMenu}
                        >
                            <div class="tile-info">
                                <span class="tile-name">Donate</span>
                                <span class="tile-sub">Support</span>
                            </div>
                            <span class="tile-arrow">→</span>
                        </a>

                        <a
                            href="/contact"
                            class="nav-tile mini group"
                            class:tile-active={url.pathname === '/contact'}
                            on:click={closeMenu}
                        >
                            <div class="tile-info">
                                <span class="tile-name">Contact</span>
                                <span class="tile-sub">Reach out</span>
                            </div>
                            <span class="tile-arrow">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Compact Footer Bar -->
            <div class="popup-footer mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] md:text-[11px] font-rajdhani tracking-wider text-white/50">
                <span class="text-white/60">TEAM UNDEFINED #19112</span>
                <span class="text-primary-green/80 hover:text-primary-green transition-colors">team-undefined.ro</span>
            </div>
        </div>
    {/if}
</nav>

<style>
    /* ========================================================
       SMOOTH HARDWARE-ACCELERATED SCROLL TRANSITION
       ======================================================== */
    .navbar-nav {
        top: 1.25rem;
        max-width: 38rem;
        transform: translate3d(-50%, 0, 0);
        will-change: top, max-width, transform;
        transition:
            top 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            max-width 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @media (min-width: 768px) {
        .navbar-nav {
            top: 1.5rem;
            max-width: 42rem;
        }
    }

    /* Scrolled State: Smoothly docks closer to top, narrows down into focused dynamic capsule */
    .navbar-nav.is-scrolled {
        top: 0.625rem;
        max-width: 29rem;
    }

    @media (min-width: 768px) {
        .navbar-nav.is-scrolled {
            top: 0.75rem;
            max-width: 31rem;
        }
    }

    /* ========================================================
       1. LIQUID GLASS CAPSULE BAR
       ======================================================== */
    .liquid-capsule {
        height: 3.25rem;
        padding-left: 1.1rem;
        padding-right: 1.1rem;
        background: rgba(10, 14, 20, 0.68);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.12);
        box-shadow:
            0 12px 35px -8px rgba(0, 0, 0, 0.7),
            0 0 20px rgba(34, 197, 94, 0.08),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.22),
            inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4);
        will-change: height, padding, background, border-color, box-shadow;
        transition:
            height 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            padding 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            backdrop-filter 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        overflow: hidden;
    }

    @media (min-width: 768px) {
        .liquid-capsule {
            height: 3.5rem;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
        }
    }

    /* Scrolled State of the Liquid Capsule */
    .navbar-nav.is-scrolled .liquid-capsule {
        height: 2.75rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        background: rgba(7, 10, 15, 0.90) !important;
        backdrop-filter: blur(28px) saturate(210%) !important;
        -webkit-backdrop-filter: blur(28px) saturate(210%) !important;
        border-color: rgba(34, 197, 94, 0.42) !important;
        box-shadow:
            0 16px 45px -8px rgba(0, 0, 0, 0.95),
            0 0 30px rgba(34, 197, 94, 0.22),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 1px 0 rgba(0, 0, 0, 0.5) !important;
    }

    @media (min-width: 768px) {
        .navbar-nav.is-scrolled .liquid-capsule {
            height: 3rem;
            padding-left: 0.875rem;
            padding-right: 0.875rem;
        }
    }

    .liquid-capsule:hover {
        border-color: rgba(34, 197, 94, 0.45);
        box-shadow:
            0 18px 50px -8px rgba(0, 0, 0, 0.85),
            0 0 35px rgba(34, 197, 94, 0.2),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.3);
    }

    @media (prefers-reduced-motion: reduce) {
        .navbar-nav,
        .liquid-capsule,
        .logo-box,
        .logo-img,
        .liquid-menu-trigger {
            transition: none !important;
        }
    }

    /* Logo & icon scaling on scroll */
    .logo-box {
        width: 2rem;
        height: 2rem;
        transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1), height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .navbar-nav.is-scrolled .logo-box {
        width: 1.75rem;
        height: 1.75rem;
    }

    .logo-img {
        width: 1.5rem;
        height: 1.5rem;
        transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1), height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .navbar-nav.is-scrolled .logo-img {
        width: 1.35rem;
        height: 1.35rem;
    }

    /* Specular Liquid Sheen */
    .liquid-sheen {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0.02) 30%,
            transparent 60%,
            rgba(34, 197, 94, 0.05) 100%
        );
    }

    /* Location Pill */
    .location-pill {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    .location-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
    }

    /* Compact Menu Trigger Button */
    .liquid-menu-trigger {
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow:
            0 3px 10px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        cursor: pointer;
        padding: 0.35rem 0.85rem;
        transition:
            padding 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.2s ease;
    }

    .navbar-nav.is-scrolled .liquid-menu-trigger {
        padding: 0.25rem 0.65rem;
    }

    .liquid-menu-trigger:hover {
        background: rgba(34, 197, 94, 0.15);
        border-color: rgba(34, 197, 94, 0.45);
        box-shadow:
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 0 15px rgba(34, 197, 94, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
        transform: translateY(-1px);
    }

    .liquid-menu-trigger.is-active {
        background: rgba(34, 197, 94, 0.2);
        border-color: rgb(34, 197, 94);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.35);
    }

    /* Morphing Burger Bars */
    .burger-line {
        display: block;
        width: 12px;
        height: 1.5px;
        background: rgb(34, 197, 94);
        border-radius: 2px;
        transition: transform 0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6), opacity 0.2s ease;
    }

    .burger-bars.open .line-1 {
        transform: translateY(3.5px) rotate(45deg);
    }

    .burger-bars.open .line-2 {
        opacity: 0;
        transform: scaleX(0);
    }

    .burger-bars.open .line-3 {
        transform: translateY(-3.5px) rotate(-45deg);
    }

    /* ========================================================
       2. COMPACT LIQUID GLASS POPUP MENU
       ======================================================== */
    .liquid-popup-menu {
        background: rgba(10, 14, 22, 0.82);
        backdrop-filter: blur(30px) saturate(200%);
        -webkit-backdrop-filter: blur(30px) saturate(200%);
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow:
            0 24px 80px -10px rgba(0, 0, 0, 0.85),
            0 0 40px rgba(34, 197, 94, 0.12),
            inset 0 1px 2px 0 rgba(255, 255, 255, 0.28),
            inset 0 -1px 2px 0 rgba(0, 0, 0, 0.5);
    }

    .popup-glass-sheen {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            transparent 35%,
            rgba(34, 197, 94, 0.03) 70%,
            rgba(251, 191, 36, 0.02) 100%
        );
    }

    .popup-ambient-glow {
        position: absolute;
        top: -30px;
        right: -30px;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(34, 197, 94, 0.14), transparent 70%);
        pointer-events: none;
    }

    /* Liquid Entrance Animation */
    .animate-liquid-pop {
        animation: liquidPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        transform-origin: top center;
    }

    @keyframes liquidPop {
        0% {
            opacity: 0;
            transform: scale(0.97) translateY(-8px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    /* ========================================================
       3. COMPACT TILES
       ======================================================== */
    .nav-tile {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.55rem 0.75rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.07);
        border-radius: 10px;
        text-decoration: none;
        color: #ffffff;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .nav-tile:hover {
        background: rgba(34, 197, 94, 0.12);
        border-color: rgba(34, 197, 94, 0.4);
        box-shadow:
            0 6px 18px rgba(0, 0, 0, 0.4),
            0 0 16px rgba(34, 197, 94, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        transform: translateY(-1.5px);
    }

    .nav-tile.tile-active {
        background: rgba(34, 197, 94, 0.16) !important;
        border-color: rgb(34, 197, 94) !important;
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
    }

    .tile-number {
        font-family: 'Orbitron', monospace;
        font-size: 0.68rem;
        font-weight: 700;
        color: rgba(34, 197, 94, 0.7);
        letter-spacing: 0.04em;
        flex-shrink: 0;
    }

    .tile-info {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 0;
    }

    .tile-name {
        font-family: 'Orbitron', sans-serif;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #ffffff;
        line-height: 1.2;
        transition: color 0.2s ease;
    }

    .nav-tile:hover .tile-name {
        color: rgb(34, 197, 94);
    }

    .tile-sub {
        font-family: 'Rajdhani', sans-serif;
        font-size: 0.72rem;
        color: rgba(255, 255, 255, 0.5);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
    }

    .tile-arrow {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.25);
        transition: transform 0.2s ease, color 0.2s ease;
        flex-shrink: 0;
    }

    .nav-tile:hover .tile-arrow {
        color: rgb(34, 197, 94);
        transform: translateX(2px);
    }

    .tile-arrow.ext {
        font-size: 0.75rem;
    }

    /* Mini Tile variant */
    .nav-tile.mini {
        padding: 0.5rem 0.7rem;
    }

    .nav-tile.mini .tile-name {
        font-size: 0.75rem;
    }

    /* ========================================================
       4. FEATURED BEE SIMULATOR TILE (COMPACT)
       ======================================================== */
    .featured-bee-tile {
        background: rgba(251, 191, 36, 0.07) !important;
        border-color: rgba(251, 191, 36, 0.3) !important;
        box-shadow:
            0 6px 18px rgba(0, 0, 0, 0.35),
            0 0 20px rgba(251, 191, 36, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.18) !important;
    }

    .featured-bee-tile:hover {
        background: rgba(251, 191, 36, 0.16) !important;
        border-color: rgb(251, 191, 36) !important;
        box-shadow:
            0 8px 22px rgba(0, 0, 0, 0.45),
            0 0 25px rgba(251, 191, 36, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
        transform: translateY(-1.5px);
    }

    .featured-bee-tile.tile-bee-active {
        background: rgba(251, 191, 36, 0.22) !important;
        border-color: rgb(251, 191, 36) !important;
        box-shadow: 0 0 25px rgba(251, 191, 36, 0.4) !important;
    }

    .bee-badge {
        position: absolute;
        top: -6px;
        right: 10px;
        font-family: 'Orbitron', monospace;
        font-size: 0.52rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        background: rgb(251, 191, 36);
        color: #05070a;
        padding: 1px 5px;
        border-radius: 3px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    }

    .tile-icon-bee {
        font-size: 1.15rem;
        filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.5));
        flex-shrink: 0;
    }

    .tile-name-bee {
        font-family: 'Orbitron', sans-serif;
        font-size: 0.82rem;
        font-weight: 800;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: rgb(251, 191, 36);
        line-height: 1.2;
    }

    .tile-sub-bee {
        font-family: 'Rajdhani', sans-serif;
        font-size: 0.72rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.2;
    }

    .bee-arrow {
        color: rgb(251, 191, 36) !important;
        font-size: 0.7rem !important;
    }
</style>
