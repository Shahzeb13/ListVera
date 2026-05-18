import Image from "next/image";
import styles from "./ExchangePartners.module.css";

const exchanges = [
  { name: "Bybit",      src: "/listvera_logos_high_quality/bybit.png" },
  { name: "Gate.io",    src: "/listvera_logos_high_quality/gate.png" },
  { name: "KuCoin",     src: "/listvera_logos_high_quality/kucoin.png" },
  { name: "MEXC",       src: "/listvera_logos_high_quality/mexc.png" },
  { name: "Bitget",     src: "/listvera_logos_high_quality/bitget.png" },
  { name: "HTX",        src: "/listvera_logos_high_quality/htx.png" },
  { name: "LBank",      src: "/listvera_logos_high_quality/lbank.png" },
  { name: "BingX",      src: "/listvera_logos_high_quality/bingx.png" },
  { name: "BitMart",    src: "/listvera_logos_high_quality/bitmart.png" },
  { name: "AscendEX",   src: "/listvera_logos_high_quality/ascendex.png" },
  { name: "Biconomy",   src: "/listvera_logos_high_quality/biconomy.png" },
  { name: "XT.com",     src: "/listvera_logos_high_quality/xt.png" },
  { name: "Azbit",      src: "/listvera_logos_high_quality/azbit.png" },
  { name: "BiFinance",  src: "/listvera_logos_high_quality/bifinance.png" },
  { name: "BigONE",     src: "/listvera_logos_high_quality/bigone.png" },
  { name: "BTCC",       src: "/listvera_logos_high_quality/btcc.png" },
  { name: "BTSE",       src: "/listvera_logos_high_quality/btse.png" },
  { name: "Coinstore",  src: "/listvera_logos_high_quality/coinstore.png" },
];

export default function ExchangePartners() {
  return (
    <section id="partners" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.pre}>Trusted By Industry Leaders</p>
          <h2 className={styles.heading}>
            OUR EXCHANGES <span className={styles.gold}>PARTNERS</span>
          </h2>
          <p className={styles.sub}>
            We maintain active listing relationships with the world&apos;s top centralized and decentralized exchanges.
          </p>
        </div>

        <div className={styles.grid}>
          {exchanges.map((ex, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.circle}>
                <Image
                  src={ex.src}
                  alt={ex.name}
                  width={34}
                  height={34}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.name}>{ex.name}</span>
            </div>
          ))}
        </div>

        <p className={styles.note}>+ 40 more exchange partnerships available on request</p>
      </div>
    </section>
  );
}
