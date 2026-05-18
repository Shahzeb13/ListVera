"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", project:"", handle:"", budget:"$10k–$25k", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.pre}>Get In Touch</p>
          <h2 className={styles.heading}>Contact <span className={styles.gold}>Us</span></h2>
          <p className={styles.sub}>
            Ready to list and grow your Web3 project? Send us your details and we&apos;ll get back to you within 12 hours.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left info column */}
          <div className={styles.infoCol}>
            {[
              { icon: "⚡", title: "Fast Response", desc: "Our team responds within 12 hours, 7 days a week." },
              { icon: "🔒", title: "Confidential", desc: "Your project details are kept 100% private and secure." },
              { icon: "🌍", title: "Global Network", desc: "We operate across 30+ countries with exchange contacts worldwide." },
            ].map((item, i) => (
              <div key={i} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <h4 className={styles.infoTitle}>{item.title}</h4>
                  <p className={styles.infoDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right form card */}
          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Project Submitted!</h3>
                <p className={styles.successText}>
                  Thanks <strong>{form.name}</strong>! We&apos;ll contact you at <strong>{form.handle || form.email}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="f-name">Full Name</label>
                    <input id="f-name" name="name" value={form.name} onChange={change} placeholder="Satoshi Nakamoto" className={styles.input} required />
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="f-email">Email Address</label>
                    <input id="f-email" name="email" type="email" value={form.email} onChange={change} placeholder="you@domain.com" className={styles.input} required />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="f-project">Project Name</label>
                    <input id="f-project" name="project" value={form.project} onChange={change} placeholder="e.g. Bitcoin" className={styles.input} required />
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="f-handle">Telegram / Discord</label>
                    <input id="f-handle" name="handle" value={form.handle} onChange={change} placeholder="@username" className={styles.input} required />
                  </div>
                </div>

                <div className={styles.group}>
                  <label className={styles.label} htmlFor="f-budget">Marketing Budget</label>
                  <select id="f-budget" name="budget" value={form.budget} onChange={change} className={styles.select}>
                    <option>Under $10k</option>
                    <option>$10k–$25k</option>
                    <option>$25k–$50k</option>
                    <option>$50k–$100k</option>
                    <option>Above $100k</option>
                  </select>
                </div>

                <div className={styles.group}>
                  <label className={styles.label} htmlFor="f-msg">Project Overview & Goals</label>
                  <textarea id="f-msg" name="message" value={form.message} onChange={change} rows={4} placeholder="Tell us about your token, listing timeline and growth goals..." className={styles.textarea} required />
                </div>

                <button type="submit" className={styles.submit} disabled={loading}>
                  {loading ? "Submitting..." : "Submit Project →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
