import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:jinsuzinsu@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors"
          >
            <span>✉</span> {t('contact.email')}: jinsuzinsu@gmail.com
          </a>
          <a
            href="https://github.com/jinsoo-lim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-500 hover:border-slate-300 rounded-lg font-medium transition-colors"
          >
            <span>⌥</span> {t('contact.github')}: jinsoo-lim
          </a>
        </div>
      </div>
    </section>
  );
}
