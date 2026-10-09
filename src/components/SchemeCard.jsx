import { Link } from 'react-router-dom';

export default function SchemeCard({ s }) {
  return (
    <div className="card flex flex-col">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="rounded-full bg-blue-50 px-2 py-1 font-medium capitalize text-brand">{s.category}</span>
        {s.popular && <span className="rounded-full bg-gold/20 px-2 py-1 font-medium text-amber-700">Popular</span>}
      </div>
      <h3 className="text-lg font-bold text-navy">{s.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
      <ul className="my-4 space-y-1 text-sm">
        {s.features.map((f) => <li key={f}>✓ {f}</li>)}
      </ul>
      <dl className="mt-auto grid grid-cols-3 gap-2 border-t pt-3 text-xs">
        <div><dt className="text-slate-500">Coverage</dt><dd className="font-semibold">{s.coverage}</dd></div>
        <div><dt className="text-slate-500">Duration</dt><dd className="font-semibold">{s.duration}</dd></div>
        <div><dt className="text-slate-500">Starting at</dt><dd className="font-semibold">{s.price}</dd></div>
      </dl>
      <Link to={`/register?scheme=${s.id}`} className="btn btn-primary mt-4">Apply Now</Link>
    </div>
  );
}
