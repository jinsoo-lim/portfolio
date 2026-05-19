import { useTranslation } from 'react-i18next';

const SKILLS = {
  backend: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'MySQL', 'Shell Script', 'VBA'],
  infra: ['Linux', 'Jenkins', 'RPA', 'Git', 'GitHub Actions', 'Artifact管理'],
  frontend: ['React', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
};

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-24 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('skills.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { key: 'backend', items: SKILLS.backend },
            { key: 'infra', items: SKILLS.infra },
            { key: 'frontend', items: SKILLS.frontend },
          ].map(({ key, items }) => (
            <div key={key} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">{t(`skills.${key}`)}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
