import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const links = [
  ['/', 'Home'], ['/policies', 'Policies'], ['/schemes', 'Schemes'],
  ['/how-it-works', 'How It Works'], ['/about', 'About Us'], ['/contact', 'Contact'],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-navy text-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/"><img src="/logo.png" alt="TrustAxis Policy" className="h-10" /></Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}
                className={({ isActive }) => (isActive ? 'text-gold' : 'text-slate-200 hover:text-white')}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link to="/register" className="btn btn-primary hidden md:inline-flex">Create account</Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        </div>
        {open && (
          <div className="flex flex-col gap-3 px-4 pb-4 md:hidden">
            {links.map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="bg-navy text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
          <div>
            <img src="/logo.png" alt="TrustAxis Policy" className="mb-3 h-10" />
            <p className="text-sm">TrustAxis Policy helps families and businesses across India choose, apply for and manage insurance with complete transparency.</p>
            <p className="mt-3 text-xs tracking-widest text-gold">TRUST TODAY • SECURE TOMORROW</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/policies">Policies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Schemes</h4>
            <ul className="space-y-2 text-sm">
              {['health', 'vehicle', 'property', 'life'].map((c) => (
                <li key={c}><Link to={`/schemes?category=${c}`} className="capitalize">{c} Insurance</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Reach us</h4>
            <ul className="space-y-2 text-sm">
              <li>1800-120-4567 (toll free)</li>
              <li>care@trustaxispolicy.com</li>
              <li>TrustAxis House, Bandra Kurla Complex, Mumbai 400051</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs">
          © 2026 TrustAxis Policy. All rights reserved. ·{' '}
          <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </footer>
    </div>
  );
}
