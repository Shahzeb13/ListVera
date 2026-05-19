"use client";
import Image from "next/image";
import styles from "./Hero.module.css";

const RING1_LOGOS = [
  { src: "/listvera_logos_high_quality/bybit.png", alt: "Bybit", angle: 0 },
  { src: "/listvera_logos_high_quality/gate.png", alt: "Gate.io", angle: 60 },
  { src: "/listvera_logos_high_quality/kucoin.png", alt: "KuCoin", angle: 120 },
  { src: "/listvera_logos_high_quality/mexc.png", alt: "MEXC", angle: 180 },
  { src: "/listvera_logos_high_quality/bitget.png", alt: "Bitget", angle: 240 },
  { src: "/listvera_logos_high_quality/htx.png", alt: "HTX", angle: 300 }
];

const RING2_LOGOS = [
  { src: "/listvera_logos_high_quality/lbank.png", alt: "LBank", angle: 30 },
  { src: "/listvera_logos_high_quality/bingx.png", alt: "BingX", angle: 90 },
  { src: "/listvera_logos_high_quality/bitmart.png", alt: "BitMart", angle: 150 },
  { src: "/listvera_logos_high_quality/ascendex.png", alt: "AscendEX", angle: 210 },
  { src: "/listvera_logos_high_quality/biconomy.png", alt: "Biconomy", angle: 270 },
  { src: "/listvera_logos_high_quality/xt.png", alt: "XT.com", angle: 330 }
];

export default function Hero() {
  const getPosition = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`
    };
  };

  return (
    <section className={styles.hero}>
      {/* Background effects */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      {/* Main content */}
      <div className={styles.content}>
        {/* Orbital Ring System */}
        <div className={styles.orbitContainer} aria-hidden="true">
          {/* Ring 1 (Inner) */}
          <div className={styles.ring1}>
            {RING1_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className={styles.logoBubble}
                style={getPosition(logo.angle, 250)}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={36}
                  height={36}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>

          {/* Ring 2 (Outer) */}
          <div className={styles.ring2}>
            {RING2_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className={styles.logoBubble}
                style={getPosition(logo.angle, 350)}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={36}
                  height={36}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.badge}>
          <span className={styles.dot} />
          Get Your Token Listed on Tier-1 Exchanges
        </div>

        <h1 className={styles.heading}>
          <span className={styles.line1}>LAUNCH, LIST & GROW</span>
          <span className={styles.line2}>YOUR WEB3 PROJECT</span>
        </h1>

        <div className={styles.taglineBox}>
          <span className={styles.taglineWord}>LIST</span>
          <span className={styles.taglineDot}>•</span>
          <span className={styles.taglineWord}>LAUNCH</span>
          <span className={styles.taglineDot}>•</span>
          <span className={styles.taglineWord}>GROW</span>
        </div>

        <p className={styles.sub}>
          Where Web3 Projects Scale. Connecting vision with liquidity & providing strategic access to global exchanges.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>List Your Project</a>
          <a href="#services" className={styles.btnSecondary}>Our Services</a>
        </div>
      </div>

      {/* Responsive mobile exchange logo grid (Collapsed fallback) */}
      {/* <div className={styles.mobileLogos}>
        <p className={styles.mobileLogosPre}>Our Centralized Exchange Partners</p>
        <div className={styles.mobileLogosGrid}>
          {RING1_LOGOS.concat(RING2_LOGOS).map((logo, idx) => (
            <div key={idx} className={styles.mobileLogoItem}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={30}
                height={30}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
