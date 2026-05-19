"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <Image
            src="/ListVeraLogo.jpeg"
            alt="ListVera Logo"
            width={34}
            height={34}
            className={styles.logoImg}
          />
          <span className={styles.logoText}>
            <span className="listvera-text">List<span className="listvera-v">V</span>era</span>
          </span>
        </a>

        <ul className={styles.links}>
          <li><a href="#" className={styles.link}>Home</a></li>
          <li><a href="#services" className={styles.link}>Services</a></li>
          <li><a href="#why" className={styles.link}>Why Us</a></li>
          <li><a href="#partners" className={styles.link}>Partners</a></li>
          <li><a href="#contact" className={styles.link}>Contact</a></li>
        </ul>

        <a href="#contact" className={styles.cta}>Book a Call</a>

        <button className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#why" onClick={() => setOpen(false)}>Why Us</a>
          <a href="#partners" onClick={() => setOpen(false)}>Partners</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" className={styles.mobileCta} onClick={() => setOpen(false)}>Book a Call</a>
        </div>
      )}
    </nav>
  );
}
