import { useSearchParams } from 'react-router-dom';
import { schemes, categories } from '../data.js';
import SchemeCard from '../components/SchemeCard.jsx';

export default function Schemes() {
  const [params, setParams] = useSearchParams();
  const active = params.get('category') || 'all';
  const list = active === 'all' ? schemes : schemes.filter((s) => s.category === active);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-navy">Insurance schemes</h1>
      <div className="mb-6 flex flex-wrap gap-2">
        {[{ id: 'all', name: 'All' }, ...categories].map((c) => (
          <button key={c.id} onClick={() => setParams(c.id === 'all' ? {} : { category: c.id })}
            className={`btn ${active === c.id ? 'btn-primary' : 'btn-outline'}`}>
            {c.name}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => <SchemeCard key={s.id} s={s} />)}
      </div>
    </div>
  );
}
