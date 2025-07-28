'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadButtons from '@/components/DownloadButtons';
import AppPreview from '@/components/AppPreview';
import { motion } from 'framer-motion';
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
      <motion.section 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-orange/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">{t('hero.title')}</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-grey mb-12 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div 
            className="mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <DownloadButtons />
          </motion.div>
          <motion.p 
            className="text-lg text-primary-orange font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t('hero.cta')}
          </motion.p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 px-4 bg-dark-grey/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('features.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="feature-card rounded-2xl p-8 transition-all transform hover:scale-105 hover:shadow-xl relative group"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"
                  />
                  <Icon className="w-12 h-12 text-primary-orange mb-4 relative z-10" />
                  <h3 className="text-xl font-bold mb-3 relative z-10">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-text-grey relative z-10">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* App Preview Section */}
      <motion.section 
        className="py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-orange/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('screenshots.title')}
          </motion.h2>
          <AppPreview screenshots={screenshots} />
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-20 px-4 bg-primary-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #FFA500 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('benefits.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {['item1', 'item2', 'item3', 'item4'].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4 group"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <Trophy className="w-6 h-6 text-black" />
                </motion.div>
                <p className="text-lg group-hover:text-primary-orange transition-colors">
                  {t(`benefits.${item}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-32 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary-orange/10 via-transparent to-primary-orange/10"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('cta.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-text-grey mb-12 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('cta.subtitle')}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <DownloadButtons />
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}