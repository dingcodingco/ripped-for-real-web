import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Mail, Clock } from 'lucide-react';

export default function SupportPage() {
  const t = useTranslations('support');

  const faqs = [
    { key: 'q1' },
    { key: 'q2' },
    { key: 'q3' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            href="/" 
            className="inline-flex items-center mb-8 transition-colors hover:opacity-80"
            style={{ color: 'var(--primary-orange)' }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            {t('title')}
          </h1>
          
          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              {t('faq.title')}
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl p-6" style={{ backgroundColor: 'var(--dark-grey)' }}>
                  <h3 className="text-xl font-semibold mb-3">
                    {t(`faq.${faq.key}.question`)}
                  </h3>
                  <p className="text-gray-300">
                    {t(`faq.${faq.key}.answer`)}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(51, 51, 51, 0.3)' }}>
            <h2 className="text-2xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6" style={{ color: 'var(--primary-orange)' }} />
                <p className="text-lg">
                  {t('contact.email')}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6" style={{ color: 'var(--primary-orange)' }} />
                <p className="text-gray-300">
                  {t('contact.response')}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}