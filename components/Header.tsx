"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, services, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const dropdownRoot = useRef<HTMLDivElement>(null);
  const dropdownButton = useRef<HTMLButtonElement>(null);
  const closeMenu = () => { dialog.current?.close(); document.body.style.overflow = ""; toggle.current?.focus(); };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setDropdown(false); if (dropdownRoot.current?.contains(document.activeElement)) dropdownButton.current?.focus(); }
    };
    const onOutside = (event: PointerEvent) => { if (!dropdownRoot.current?.contains(event.target as Node)) setDropdown(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onOutside); document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      <header className="site-header"><div className="container nav">
        <Link href="/" className="brand-wordmark" aria-label={`${site.name} — inicio`}><span>like a<br />rocket<span className="brand-period">.</span></span><span className="brand-arrow" aria-hidden="true">↗</span></Link>
        <nav className="nav__menu" aria-label="Navegación principal">
          <div className="nav__dropdown" ref={dropdownRoot} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDropdown(false); }}>
            <button ref={dropdownButton} className="nav__dropdown-toggle" aria-expanded={dropdown} aria-controls="service-navigation" onClick={() => setDropdown(!dropdown)}>Servicios <span aria-hidden="true">{dropdown ? "−" : "+"}</span></button>
            <div id="service-navigation" className={`nav__dropdown-panel${dropdown ? " is-open" : ""}`} inert={!dropdown}>{services.map((s) => <Link key={s.slug} href={`/${s.slug}`} onClick={() => setDropdown(false)}><strong>{s.name} <span aria-hidden="true">↗</span></strong><span>{s.descriptor}</span></Link>)}</div>
          </div>
          {mainNav.filter((item) => item.href !== "/contacto").map((item) => <Link key={item.href} href={item.href} className="nav__link" aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <Link href="/contacto" className="nav__cta nav-contact">Hablemos <span aria-hidden="true">↗</span></Link>
        <button ref={toggle} className="nav__toggle" aria-label="Abrir menú" aria-haspopup="dialog" onClick={() => { dialog.current?.showModal(); document.body.style.overflow = "hidden"; }}><span aria-hidden="true">☰</span></button>
      </div></header>
      <dialog ref={dialog} className="mobile-dialog" aria-label="Navegación principal" onClose={() => { document.body.style.overflow = ""; }} onClick={(event) => { if (event.target === event.currentTarget) closeMenu(); }}>
        <button className="mobile-menu__close" aria-label="Cerrar menú" onClick={closeMenu}>✕</button>
        <span className="mono-label">EXPLORA NUESTRO UNIVERSO</span>
        <nav>{[...services.map((s) => ({ href: `/${s.slug}`, label: s.name })), ...mainNav].map((item) => <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav>
      </dialog>
    </>
  );
}
