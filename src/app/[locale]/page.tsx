import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadButtons from '@/components/DownloadButtons';
import { 
  Brain, 
  Target, 
  Trophy,
  Share2,
  TrendingUp,
  Calendar
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();

  const features = [
    { icon: Brain, key: 'item1' },
    { icon: Target, key: 'item2' },
    { icon: Calendar, key: 'item3' },
    { icon: TrendingUp, key: 'item4' },
    { icon: Share2, key: 'item5' },
  ];

  const screenshots = [
    '/screenshots/screenshot1.png',
    '/screenshots/screenshot2.png',
    '/screenshots/screenshot3.png',
    '/screenshots/screenshot4.png',
    '/screenshots/screenshot5.png',
    '/screenshots/screenshot6.png',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-grey mb-12 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="mb-8">
            <DownloadButtons />
          </div>
          <p className="text-lg text-primary-orange font-semibold">
            {t('hero.cta')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-dark-grey/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-medium-grey/30 rounded-2xl p-8 hover:bg-medium-grey/50 transition-all transform hover:scale-105"
                >
                  <Icon className="w-12 h-12 text-primary-orange mb-4" />
                  <h3 className="text-xl font-bold mb-3">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-text-grey">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t('screenshots.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative aspect-[9/19] rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary-orange/20 transition-all transform hover:scale-105"
              >
                <Image
                  src={screenshot}
                  alt={`App Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-primary-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t('benefits.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {['item1', 'item2', 'item3', 'item4'].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-black" />
                </div>
                <p className="text-lg">
                  {t(`benefits.${item}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-text-grey mb-12 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <DownloadButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
}