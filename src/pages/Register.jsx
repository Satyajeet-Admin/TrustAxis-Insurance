import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { schemes } from '../data.js';

export default function Register() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({ name: '', email: '', phone: '', scheme: params.get('scheme') || schemes[0].id });
  const [receipt, setReceipt] = useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const id = 'TAX-' + Date.now().toString(36).toUpperCase();
    setReceipt({ ...form, id, date: new Date().toLocaleString('en-IN') });
  };

  if (receipt) {
    const s = schemes.find((x) => x.id === receipt.scheme);
    return (
      <div className="mx-auto max-w-lg px-4 py-12">
        <div className="card text-center">
          <h1 className="text-2xl font-bold text-navy">Application submitted ✓</h1>
          <p className="mt-2 text-sm text-slate-600">Your digital receipt</p>
          <div className="my-4 rounded-lg bg-slate-100 p-4 text-left text-sm">
            <p><b>Application ID:</b> {receipt.id}</p>
            <p><b>Name:</b> {receipt.name}</p>
            <p><b>Scheme:</b> {s?.name}</p>
            <p><b>Premium:</b> {s?.price}</p>
            <p><b>Date:</b> {receipt.date}</p>
          </div>
          <button className="btn btn-primary" onClick={() => window.print()}>Print receipt</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-navy">Create your free account</h1>
      <form onSubmit={submit} className="card space-y-4">
        <input required placeholder="Full name" value={form.name} onChange={set('name')} className="w-full rounded-lg border p-3" />
        <input required type="email" placeholder="Email" value={form.email} onChange={set('email')} className="w-full rounded-lg border p-3" />
        <input required placeholder="Phone" value={form.phone} onChange={set('phone')} className="w-full rounded-lg border p-3" />
        <select value={form.scheme} onChange={set('scheme')} className="w-full rounded-lg border p-3">
          {schemes.map((s) => <option key={s.id} value={s.id}>{s.name} — {s.price}</option>)}
        </select>
        <button className="btn btn-primary w-full">Submit application</button>
      </form>
    </div>
  );
}
