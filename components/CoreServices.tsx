import styles from "./CoreServices.module.css";

const services = [
  { icon: "🏛️", title: "Exchange Listing", desc: "End-to-end CEX application management. We handle legal reviews, technical integration, and launch coordination on tier-1 platforms.", tag: "Most Popular" },
  { icon: "⚙️", title: "Market Making", desc: "Algorithmic trading solutions to maintain optimal market depth, minimize spreads, and manage price stability on all primary exchanges.", tag: "" },
  // { icon: "👛", title: "Wallet Listing", desc: "Secure integration into major Web3 wallets — Trust Wallet, MetaMask, Safe and more — ensuring your token is globally accessible.", tag: "" },
  { icon: "📢", title: "PR & Media", desc: "Premium placements on CoinDesk, Cointelegraph, Bloomberg Crypto and 50+ publications to establish credibility and drive awareness.", tag: "" },
  { icon: "👥", title: "Community Growth", desc: "Organic scale-up of Discord, Telegram and X communities with bots, quests, and active moderation to keep users highly engaged.", tag: "" },
  { icon: "🔥", title: "Influencer Campaigns", desc: "Collaborations with tier-1 Web3 KOLs on YouTube, X and TikTok to maximise token awareness, sentiment and launch buzz.", tag: "" },
];

export default function CoreServices() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.pre}>What We Do</p>
            <h2 className={styles.heading}>
              OUR CORE <span className={styles.gold}>SERVICES</span>
            </h2>
            <p className={styles.desc}>
              Leverage our end-to-end expertise across listing operations, strategic liquidity management and high-impact digital marketing to dominate the market from day one.
            </p>
            <a href="#contact" className={styles.ctaLink}>Get Started →</a>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              {s.tag && <span className={styles.tag}>{s.tag}</span>}
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>{s.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <a href="#contact" className={styles.readMore}>Inquire Now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
