import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white px-6">
      <div className="text-center">
        <p className="text-blue-400 text-lg mb-3">{t('hero.greeting')}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">{t('hero.name')}</h1>
        <p className="text-slate-400 text-lg md:text-xl mb-10">{t('hero.sub')}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors"
          >
            {t('hero.contact')}
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-slate-500 hover:border-slate-300 rounded-lg font-medium transition-colors"
          >
            {t('hero.projects')}
          </a>
        </div>
      </div>
    </section>
  );
}
