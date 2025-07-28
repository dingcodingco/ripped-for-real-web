import { useTranslations } from 'next-intl';

export default function DownloadButtons() {
  const t = useTranslations('common');

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#"
        className="flex items-center justify-center bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 btn-transition"
        aria-label={t('appStore')}
      >
        <svg className="mr-3" style={{ width: '32px', height: '32px' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left">
          <div className="text-xs">{t('appStore').split(' ')[0]}</div>
          <div className="text-sm font-semibold">{t('appStore').split(' ').slice(1).join(' ')}</div>
        </div>
      </a>
      
      <a
        href="#"
        className="flex items-center justify-center bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 btn-transition"
        aria-label={t('googlePlay')}
      >
        <svg className="mr-3" style={{ width: '32px', height: '32px' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35l7.51 7.5L3.84 21.85c-.5-.24-.84-.76-.84-1.35M16.81 15.16l-4.33-4.33l8.03-8.03c.34.17.57.52.57.94 0 .21-.04.4-.12.58l-4.15 10.84M6.05 2.3l10.46 10.46L6.05 23.22 6.05 2.3M19.33 9.7l-2.52 2.52-4.33-4.33 2.52-2.52c.24-.24.58-.36.94-.36.35 0 .69.12.93.36l2.46 2.46c.52.52.52 1.36 0 1.87"/>
        </svg>
        <div className="text-left">
          <div className="text-xs">{t('googlePlay').split(' ')[0]} {t('googlePlay').split(' ')[1]} {t('googlePlay').split(' ')[2]}</div>
          <div className="text-sm font-semibold">{t('googlePlay').split(' ').slice(3).join(' ')}</div>
        </div>
      </a>
    </div>
  );
}