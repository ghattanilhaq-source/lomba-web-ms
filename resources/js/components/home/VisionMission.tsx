import { Eye, Target } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const VisionMission = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Our Direction</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <ScrollReveal delay={0.1}>
            <div className="vision-card h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To become a leading vocational school that produces competent, 
                character-driven graduates ready to excel in their chosen industries 
                and contribute positively to society.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a learning environment where every student discovers 
                their potential and develops the skills necessary for a successful career.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal delay={0.2}>
            <div className="vision-card h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Provide industry-relevant curriculum with hands-on practice',
                  'Develop character, discipline, and professional ethics',
                  'Foster partnerships with industry leaders',
                  'Create supportive learning environment for all students',
                  'Prepare graduates for employment and entrepreneurship',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
