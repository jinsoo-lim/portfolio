import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('about.title')}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{t('about.body')}</p>
      </div>
    </section>
  );
}
