import { Link } from 'react-router-dom';
import { categories, schemes, stats, trust } from '../data.js';
import SchemeCard from '../components/SchemeCard.jsx';

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-widest text-gold">TRUST TODAY • SECURE TOMORROW</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Insurance that puts your family first, every single day.
            </h1>
            <p className="mt-4 text-slate-200">
              Compare Health, Vehicle, Property and Life schemes, apply in minutes, and get a
              verifiable digital receipt the moment you submit.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/schemes" className="btn btn-primary">Explore schemes</Link>
              <Link to="/how-it-works" className="btn btn-outline">How it works</Link>
            </div>
            <p className="mt-5 text-sm text-slate-300">Instant application ID · Zero paperwork · Cancel anytime</p>
          </div>
          <div className="text-center">
            <img src="/logo.png" alt="TrustAxis Policy" className="mx-auto mb-6 h-40" />
            <div className="grid grid-cols-3 gap-3 text-sm">
              {[['Health', '₹8,999'], ['Vehicle', '₹4,299'], ['Property', '₹3,499']].map(([n, p]) => (
                <div key={n} className="rounded-xl bg-white/10 p-3">
                  <div className="text-slate-300">{n}</div><div className="text-lg font-bold">{p}</div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-300">Annual premiums starting from. Multi-year plans save up to 10%.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map(([v, l]) => (
          <div key={l} className="text-center">
            <div className="text-3xl font-extrabold text-navy">{v}</div>
            <div className="text-sm text-slate-500">{l}</div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">Policy categories</p>
        <h2 className="mb-2 text-3xl font-bold text-navy">Protection for every part of life</h2>
        <p className="mb-6 text-slate-600">Pick a category to see schemes, coverage highlights and pricing tailored to you.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <Link key={c.id} to={`/schemes?category=${c.id}`} className="card transition hover:shadow-md">
              <h3 className="text-xl font-bold text-navy">{c.name}</h3>
              <p className="text-sm font-medium text-brand">{c.tag}</p>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              <ul className="my-3 space-y-1 text-sm">{c.points.map((p) => <li key={p}>• {p}</li>)}</ul>
              <div className="flex justify-between text-sm font-semibold">
                <span>From {c.from}</span><span className="text-brand">View schemes →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Most chosen</p>
            <h2 className="text-3xl font-bold text-navy">Popular schemes this month</h2>
          </div>
          <Link to="/schemes" className="text-sm font-semibold text-brand">All schemes →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {schemes.filter((s) => s.popular).map((s) => <SchemeCard key={s.id} s={s} />)}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Why TrustAxis</p>
          <h2 className="mb-6 text-3xl font-bold text-navy">Built on trust, backed by proof</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {trust.map(([t, d]) => (
              <div key={t} className="card"><h3 className="font-bold text-navy">{t}</h3><p className="text-sm text-slate-600">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to secure tomorrow?</h2>
        <p className="mx-auto mt-2 max-w-xl text-slate-300">
          Create your free account, pick a scheme and receive your application ID in under five minutes.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/register" className="btn btn-primary">Create free account</Link>
          <Link to="/contact" className="btn btn-outline">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
