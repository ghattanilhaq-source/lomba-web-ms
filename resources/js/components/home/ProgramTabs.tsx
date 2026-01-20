import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import extracurricularImg from '@/assets/extracurricular.jpg';
import programItImg from '@/assets/program-it.jpg';
import programCulinaryImg from '@/assets/program-culinary.jpg';

interface TabContent {
  title: string;
  description: string;
  image: string;
  items: string[];
}

const tabData: Record<string, TabContent> = {
  extracurricular: {
    title: 'Extracurricular Activities',
    description: 'Explore your passions beyond the classroom with our diverse range of extracurricular activities.',
    image: extracurricularImg,
    items: ['Sports & Athletics', 'Arts & Music', 'Science Club', 'Language Club'],
  },
  organization: {
    title: 'Student Organizations',
    description: 'Develop leadership skills and make a difference through our student-led organizations.',
    image: programItImg,
    items: ['OSIS Student Council', 'MPK Representatives', 'Pramuka Scouts', 'Paskibra'],
  },
  major: {
    title: 'Academic Majors',
    description: 'Choose from our industry-focused majors designed to prepare you for professional success.',
    image: programCulinaryImg,
    items: ['IT & Software', 'Business & Accounting', 'Culinary Arts', 'Hospitality'],
  },
};

const ProgramTabs = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>('extracurricular');

  return (
    <section className="section-padding bg-section">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">
              Learning That Makes a Difference
            </h2>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as keyof typeof tabData)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'bg-white text-foreground hover:bg-primary-lighter'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {tabData[activeTab].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tabData[activeTab].description}
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {tabData[activeTab].items.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={tabData[activeTab].image}
                  alt={tabData[activeTab].title}
                  className="w-full h-[350px] object-cover"
                />
                {/* Diamond Decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/50 rotate-45" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/50 rotate-45" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramTabs;
