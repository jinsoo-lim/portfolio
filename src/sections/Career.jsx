import { useTranslation } from 'react-i18next';

export default function Career() {
  const { t } = useTranslation();
  const items = t('career.items', { returnObjects: true });
  return (
    <section id="career" className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('career.title')}</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
          <div className="space-y-10">
            {items.map((item, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <span className="text-sm text-blue-600 font-medium">{item.period}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-0.5">{item.role}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.company}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
