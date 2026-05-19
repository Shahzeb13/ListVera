import styles from "./WhyChooseUs.module.css";

const smallCards = [
  { 
    icon: "🤝", 
    title: "Trusted Industry Network", 
    desc: "Direct connections with exchange listing committees, market makers, and Web3 key opinion leaders." 
  },
  { 
    icon: "⚡", 
    title: "Fast Communication", 
    desc: "24/7 dedicated Telegram desk. We bridge the gap between your founders and exchange teams instantly." 
  },
  { 
    icon: "🏛️", 
    title: "Strategic Exchange Access", 
    desc: "Direct, vetted application routes to Tier-1 and Tier-2 centralized exchanges without middleman fees." 
  },
  { 
    icon: "🚀", 
    title: "Global Growth Support", 
    desc: "End-to-end post-listing marketing, PR campaigns, community scaling, and market-making support." 
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Why Projects Choose <span className={styles.gold}>Us</span></h2>
          <p className={styles.sub}>We are a full-service Web3 growth partner — from securing your first listing to scaling your global community and brand presence.</p>
        </div>

        <div className={styles.grid}>
          {/* Featured left card */}
          <div className={styles.featured}>
            <div className={styles.featuredInner}>
              <div className={styles.featuredTag}>⭐ #1 Token Listing Agency</div>
              <h3 className={styles.featuredTitle}>Guaranteed Tier-1 Listing Support</h3>
              <p className={styles.featuredDesc}>
                We have established direct relationships with listing managers at Binance, OKX, Bybit, KuCoin, Gate.io and more. Skip the queue — get listed faster with a proven success rate.
              </p>
              <div className={styles.featuredIllo} aria-hidden="true">
                <div className={styles.illoCircle}>
                  <span className={styles.illoIcon}>🏛️</span>
                </div>
                <div className={styles.illoRings}>
                  <div className={styles.ring1} />
                  <div className={styles.ring2} />
                </div>
              </div>
              <a href="#contact" className={styles.featuredBtn}>Start Listing →</a>
            </div>
          </div>

          {/* 2×2 small cards grid */}
          <div className={styles.cards}>
            {smallCards.map((c, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>{c.icon}</div>
                <h4 className={styles.cardTitle}>{c.title}</h4>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Quote Block */}
        <div className={styles.quoteBlock}>
          <div className={styles.quoteIcon}>“</div>
          <p className={styles.quoteText}>
            We focus on long-term strategic growth, not just listings.
          </p>
          <div className={styles.quoteAuthor}>
            <span className={styles.authorLine} />
            <span className={styles.authorName}>
              <span className="listvera-text">List<span className="listvera-v">V</span>era</span> Founder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
