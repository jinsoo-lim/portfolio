import { useTranslation } from 'react-i18next';

const GITHUB = {
  'board-api': 'https://github.com/jinsoo-lim/board-api',
  'board-front': 'https://github.com/jinsoo-lim/board-front',
};

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true });
  return (
    <section id="projects" className="py-24 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tech.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">{t}</span>
                ))}
              </div>
              <a
                href={GITHUB[item.name]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
