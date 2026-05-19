import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-bold text-gray-900">Jinsoo Lim</span>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm text-gray-600">
            {['about','skills','career','projects','contact'].map(k => (
              <a key={k} href={`#${k}`} className="hover:text-blue-600 transition-colors">{t(`nav.${k}`)}</a>
            ))}
          </div>
          <div className="flex gap-1">
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => i18n.changeLanguage(l.code)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  i18n.language.startsWith(l.code)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
