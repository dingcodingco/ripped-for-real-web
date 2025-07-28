'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { localeNames } from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-800 rounded-full p-1">
      {Object.entries(localeNames).map(([key, name]) => (
        <button
          key={key}
          onClick={() => handleLanguageChange(key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            locale === key
              ? 'bg-orange-500 text-black'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}