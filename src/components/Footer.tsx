import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-primary-black border-t border-dark-grey">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ripped For Real</h3>
            <p className="text-text-grey mb-4">
              {locale === 'ko' ? '20대 남성을 위한 최강 동기부여 앱' : 'The Ultimate Motivation App for Men in Their 20s'}
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">{locale === 'ko' ? '법적 정보' : 'Legal'}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/privacy`} className="text-text-grey hover:text-primary-orange transition-colors">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-text-grey hover:text-primary-orange transition-colors">
                  {t('termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">{locale === 'ko' ? '도움말' : 'Help'}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/support`} className="text-text-grey hover:text-primary-orange transition-colors">
                  {t('support')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-grey text-center">
          <p className="text-text-grey">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}