import { Link } from 'react-router-dom';
import { categories } from '../data.js';

const Page = ({ title, children }) => (
  <div className="mx-auto max-w-4xl px-4 py-12">
    <h1 className="mb-6 text-3xl font-bold text-navy">{title}</h1>
    <div className="space-y-4 text-slate-700">{children}</div>
  </div>
);

export const Policies = () => (
  <Page title="Our policies">
    {categories.map((c) => (
      <div key={c.id} className="card">
        <h2 className="text-xl font-bold text-navy">{c.name}</h2>
        <p className="text-sm">{c.desc}</p>
        <Link to={`/schemes?category=${c.id}`} className="mt-2 inline-block text-sm font-semibold text-brand">View schemes →</Link>
      </div>
    ))}
  </Page>
);

export const HowItWorks = () => (
  <Page title="How it works">
    {['Choose a scheme that fits your needs.', 'Create your free account and fill the short form.',
      'Get your application ID and digital receipt instantly.', 'Approval in under 48 hours, then you are covered.']
      .map((t, i) => (
        <div key={t} className="card flex gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-white">{i + 1}</span>
          <p className="self-center">{t}</p>
        </div>
      ))}
  </Page>
);

export const About = () => (
  <Page title="About TrustAxis Policy">
    <p>TrustAxis Policy helps families and businesses across India choose, apply for and manage insurance with complete transparency.</p>
    <p>Our promise is simple: <b>Trust Today, Secure Tomorrow.</b></p>
  </Page>
);

export const Contact = () => (
  <Page title="Contact us">
    <div className="card">
      <p>📞 1800-120-4567 (toll free)</p>
      <p>✉️ care@trustaxispolicy.com</p>
      <p>📍 TrustAxis House, Bandra Kurla Complex, Mumbai 400051</p>
    </div>
  </Page>
);

export const Privacy = () => (
  <Page title="Privacy Policy">
    <p>We collect only the information needed to process your application and never sell your data. Replace this text with your final legal copy.</p>
  </Page>
);

export const Terms = () => (
  <Page title="Terms & Conditions">
    <p>Use of this website is subject to the terms of the insurance schemes offered. Replace this text with your final legal copy.</p>
  </Page>
);
