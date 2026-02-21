import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-grid" />
            <div className="hero-glow" />
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="dot" />
                    Compliance Intelligence Platform
                </div>
                <h1 className="hero-title">
                    <span className="hero-title-reg">Reg</span><span className="hero-title-via">Via</span>
                </h1>
                <p className="hero-tagline">The Risk-Aware Compliance OS</p>
                <p className="hero-description">
                    We help companies quantify penalty risk and fix compliance issues
                    proactively&mdash;before regulators come knocking.
                </p>
                <div className="hero-actions">
                    <a href="mailto:info@regvia.ai" className="hero-cta hero-cta--primary">
                        Request a Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#solution" className="hero-cta hero-cta--secondary">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
