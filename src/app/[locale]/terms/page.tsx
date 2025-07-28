import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  const t = useTranslations('terms');

  const sections = [
    'acceptance',
    'usage',
    'content',
    'liability'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            href="/" 
            className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          
          <p className="text-gray-400 mb-12">
            {t('lastUpdated')}
          </p>
          
          {/* Table of Contents */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {t(`sections.${section}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section} id={section} className="scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4">
                  {t(`sections.${section}.title`)}
                </h2>
                <p className="text-lg leading-relaxed text-gray-400">
                  {t(`sections.${section}.content`)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}