<footer class="premium-footer">
    <div class="footer-shell">
        <div class="footer-top">
            <div class="footer-brand">
                <img src="/logo_undefined_white.svg" alt="Team Undefined" class="footer-logo" />
                <p class="footer-tagline">FTC Team #19112 from Romania</p>
            </div>
            <div class="footer-links">
                <h4>Quick Links</h4>
                <a href="/team">About Us</a>
                <a href="/robots">Robots</a>
                <a href="/team/apply">Apply</a>
                <a href="/team/sponsors">Sponsors</a>
                <a href="/donate">Donate</a>
                <a href="/contact">Contact</a>
            </div>
            <div class="footer-social">
                <h4>Follow Us</h4>
                <div class="social-row">
                    <a href="https://www.instagram.com/team_undefined/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a href="https://www.facebook.com/teamundefinedcnng/" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCN4OeYg_hz3U1jyXbdKV9cw" target="_blank" rel="noreferrer" aria-label="YouTube">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
            <p>© 2026 Team Undefined — FTC #19112</p>
            <p class="footer-credit">Engineering Tomorrow.</p>
        </div>
    </div>
</footer>

<style>
    .premium-footer {
        position: relative;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(22px);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding: clamp(3rem, 6vw, 5rem) 1.5rem 2rem;
    }

    .footer-shell {
        width: min(1180px, 100%);
        margin: 0 auto;
    }

    .footer-top {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr;
        gap: clamp(2rem, 4vw, 4rem);
        align-items: start;
    }

    .footer-brand {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .footer-logo {
        width: 180px;
        opacity: 0.9;
        filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.15));
    }

    .footer-tagline {
        color: #a3a3a3;
        font-size: 0.85rem;
        margin: 0;
    }

    .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .footer-links h4,
    .footer-social h4 {
        font-family: 'Space Grotesk', 'Orbitron', sans-serif;
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #22c55e;
        margin: 0 0 0.5rem;
    }

    .footer-links a {
        color: #a3a3a3;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.25s ease, transform 0.25s ease;
        display: inline-block;
    }

    .footer-links a:hover {
        color: #22c55e;
        transform: translateX(4px);
    }

    .footer-social {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .social-row {
        display: flex;
        gap: 0.75rem;
    }

    .social-row a {
        display: grid;
        width: 42px;
        height: 42px;
        place-items: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.04);
        color: #a3a3a3;
        transition: all 0.3s ease;
    }

    .social-row a:hover {
        border-color: rgba(34, 197, 94, 0.5);
        color: #22c55e;
        box-shadow: 0 0 22px rgba(34, 197, 94, 0.15);
        transform: translateY(-3px);
    }

    .social-row svg {
        width: 18px;
        height: 18px;
    }

    .footer-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.25), transparent);
        margin: clamp(2rem, 4vw, 3rem) 0 1.5rem;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-bottom p {
        margin: 0;
        color: #525252;
        font-size: 0.8rem;
    }

    .footer-credit {
        color: rgba(34, 197, 94, 0.35) !important;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 600;
        letter-spacing: 0.1em;
    }

    @media (max-width: 768px) {
        .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
        }
    }
</style>
