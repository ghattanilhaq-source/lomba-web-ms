import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const Homepage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          } else {
            if (rect.top > 0) {
              setVisibleSections((prev) => {
                const newSet = new Set(prev);
                newSet.delete(entry.target.id);
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/metlandschool-logo.png" alt="Metland School" className="h-8 sm:h-10" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#hero" className={`relative font-medium transition-colors group ${
                scrolled ? 'text-[#12606A]' : 'text-white'
              }`}>
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12606A] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#learning-begins" className={`relative font-medium transition-colors group ${
                scrolled ? 'text-[#12606A]' : 'text-white'
              }`}>
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12606A] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#difference" className={`relative font-medium transition-colors group ${
                scrolled ? 'text-[#12606A]' : 'text-white'
              }`}>
                Academic
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12606A] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#admission" className={`relative font-medium transition-colors group ${
                scrolled ? 'text-[#12606A]' : 'text-white'
              }`}>
                Admission
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12606A] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#achievement" className={`relative font-medium transition-colors group ${
                scrolled ? 'text-[#12606A]' : 'text-white'
              }`}>
                News
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12606A] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#collaboration" className={`relative font-medium transition-colors group ${
                scrolled ? 'text-[#12606A]' : 'text-white'
              }`}>
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12606A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-[#12606A]' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block text-[#12606A] font-medium hover:text-blue-600">Home</a>
              <a href="#learning-begins" onClick={() => setMobileMenuOpen(false)} className="block text-[#12606A] font-medium hover:text-blue-600">About</a>
              <a href="#difference" onClick={() => setMobileMenuOpen(false)} className="block text-[#12606A] font-medium hover:text-blue-600">Academic</a>
              <a href="#admission" onClick={() => setMobileMenuOpen(false)} className="block text-[#12606A] font-medium hover:text-blue-600">Admission</a>
              <a href="#achievement" onClick={() => setMobileMenuOpen(false)} className="block text-[#12606A] font-medium hover:text-blue-600">News</a>
              <a href="#collaboration" onClick={() => setMobileMenuOpen(false)} className="block text-[#12606A] font-medium hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/hero-image.png" 
            alt="Students" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-5xl mx-20 px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-3 items-center text-white mt-90">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-5">
                  From School<br />to Career
                </h1>
              </div>
              <div className='mx-20'>
                <img src="/line-hero.svg" alt="" />
              </div>
              <div>
                <p className="text-base md:text-xl md:mb-5 text-white">
                  Metland School is a vocational education that is officially 
                  recognized by the government with international standards to prepare 
                  students for a successful career future.
                </p>
              </div>
            </div>   
          </div>
        </div>
      </section>

      {/* Where Learning Begins */}
      <section 
        id="learning-begins"
        ref={setSectionRef('learning-begins')}
        className={`py-12 sm:py-16 md:py-20 bg-white transition-all duration-1000 ${
          visibleSections.has('learning-begins') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-[#12606A] font-semibold mb-1 text-2x1">About us</h3>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12606A] mb-4 md:mb-6">
                Where Learning Begins
              </h2>
              <p className="text-[#12606A] mb-4 md:mb-6 text-sm sm:text-base">
                Metland School is a vocational education that is officially recognized by the government with international standards to prepare the nation's best students to compete in the job market and challenges beyond the classroom.
              </p>
              <p className="text-[#12606A] mb-4 md:mb-6 text-sm sm:text-base">
                Metland practices experiential learning, bringing students face-to-face with real-world challenges through industry collaborations, encouraging learners to practice critical thinking, creativity and responsibility for their future, and acquire 21st-century career skills.
              </p>
              <button className="bg-[#12606A] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:scale-105 transition-all duration-500 hover:shadow-lg text-sm sm:text-base">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <img src="/learning-1.jpg" alt="Learning" className="rounded-lg w-full h-40 sm:h-48 object-cover" />
              <img src="/learning-2.jpg" alt="Learning" className="rounded-lg w-full h-40 sm:h-48 object-cover" />
              <img src="/learning-3.jpg" alt="Learning" className="rounded-lg w-full h-40 sm:h-48 object-cover col-span-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Learning That Makes a Difference */}
      <section 
        id="difference"
        ref={setSectionRef('difference')}
        className={`py-12 sm:py-16 md:py-20 bg-gray-50 transition-all duration-1000 ${
          visibleSections.has('difference') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12606A] mb-4">
              Learning That Makes a<br />Difference
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#12606A]">Curriculum</h3>
              <p className="text-[#12606A] text-sm sm:text-base">
                Our educational program is aligned with industry needs, preparing students to be ready to work in various sectors.
              </p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#12606A]">Expert Teachers</h3>
              <p className="text-[#12606A] text-sm sm:text-base">
                Learn from industry professionals and experienced educators who understand both theory and practice.
              </p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#12606A]">Industry Partnership</h3>
              <p className="text-[#12606A] text-sm sm:text-base">
                Strong connections with leading companies providing internship and job placement opportunities.
              </p>
            </div>
          </div>
          
          {/* Image Gallery Slider */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <img src="/gallery-1.jpg" alt="Activity" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg" />
              <img src="/gallery-2.jpg" alt="Activity" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg" />
              <img src="/gallery-3.jpg" alt="Activity" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg" />
              <img src="/gallery-4.jpg" alt="Activity" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Direction */}
      <section 
        id="direction"
        ref={setSectionRef('direction')}
        className={`py-12 sm:py-16 md:py-20 bg-white transition-all duration-1000 ${
          visibleSections.has('direction') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12606A] mb-4">Our Direction</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/our-vision.svg" alt="Vision" className="w-15" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#12606A]">Our Vision</h3>
              <p className="text-[#12606A] text-sm sm:text-base">
                To be a leading vocational institution that produces graduates who are ready to work, entrepreneurial, and able to contribute positively to society and the nation. We are committed to providing quality education that integrates academic knowledge with practical skills relevant to industry needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/our-mission.svg" alt="Mission" className="w-15" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#12606A]">Our Mission</h3>
              <p className="text-[#12606A] text-sm sm:text-base">
                To deliver innovative and practical education that develops students' skills to build strong partnerships with industry to ensure work readiness, to prepare students with relevant 21st-century competencies to foster an innovative, collaborative, and inclusive learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moments of Achievement */}
      <section 
        id="achievement"
        ref={setSectionRef('achievement')}
        className={`py-12 sm:py-16 md:py-20 bg-linear-to-b from-blue-50 to-white transition-all duration-1000 ${
          visibleSections.has('achievement') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12606A] mb-4">
              Moments of Achievement
            </h2>
          </div>
          
          {/* Achievement Cards Carousel */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                <img src="/person-1.jpg" alt="Student" className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover" />
                <div>
                  <span className="text-xs sm:text-sm text-[#12606A]">Multitalent</span>
                  <h4 className="text-lg sm:text-xl font-bold text-[#12606A]">Ghattan Firstian Ilhaq</h4>
                </div>
              </div>
              <p className="text-[#12606A] mb-4 text-sm sm:text-base">
                A student who excels in both academics and extracurricular activities, demonstrating leadership skills and creativity that inspire peers and contribute to school community.
              </p>
              <button className="bg-[#12606A] text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                Read More
              </button>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                <img src="/person-2.jpg" alt="Student" className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover" />
                <div>
                  <span className="text-xs sm:text-sm text-[#12606A]">Athlete</span>
                  <h4 className="text-lg sm:text-xl font-bold text-[#12606A]">Sutan Bariq</h4>
                </div>
              </div>
              <p className="text-[#12606A] mb-4 text-sm sm:text-base">
                An outstanding athlete who represents the school in various competitions and demonstrates dedication, discipline, and sportsmanship.
              </p>
              <button className="bg-[#12606A] text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                Read More
              </button>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#12606A] rounded-full"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Collaborating for the Future */}
      <section 
        id="collaboration"
        ref={setSectionRef('collaboration')}
        className={`py-12 sm:py-16 md:py-20 bg-white transition-all duration-1000 ${
          visibleSections.has('collaboration') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12606A] mb-6 md:mb-8">
              Collaborating for<br />the Future
            </h2>
          </div>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 md:mb-16">
            <img src="/partner-1.png" alt="Partner" className="h-12 sm:h-14 md:h-16 grayscale hover:grayscale-0 transition" />
            <img src="/partner-2.png" alt="Partner" className="h-12 sm:h-14 md:h-16 grayscale hover:grayscale-0 transition" />
            <img src="/partner-3.png" alt="Partner" className="h-12 sm:h-14 md:h-16 grayscale hover:grayscale-0 transition" />
            <img src="/partner-4.png" alt="Partner" className="h-12 sm:h-14 md:h-16 grayscale hover:grayscale-0 transition" />
            <img src="/partner-5.png" alt="Partner" className="h-12 sm:h-14 md:h-16 grayscale hover:grayscale-0 transition" />
            <img src="/partner-6.png" alt="Partner" className="h-12 sm:h-14 md:h-16 grayscale hover:grayscale-0 transition" />
          </div>

          {/* News Article */}
          <div className="bg-linear-to-r from-teal-700 to-teal-600 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <img src="/news-image.jpg" alt="Event" className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-cover" />
              <div className="text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">
                  Metland Edu Mastery: An Innovative Path to Education and Industry Partnership Through Grant on 23 October 2024, InterSchool 2025
                </h3>
                <p className="mb-4 md:mb-6 text-sm sm:text-base">
                  This innovative program marks an advance in our commitment to bridging the gap between education and real-world application, strengthening Metland School's dedication to offer students a direct connection to career opportunities and hands-on skills.
                </p>
                <button className="bg-white text-teal-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-semibold hover:shadow-lg text-sm sm:text-base">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Admission Process */}
      <section 
        id="admission"
        ref={setSectionRef('admission')}
        className={`py-12 sm:py-16 md:py-20 bg-linear-to-b from-teal-50 to-white transition-all duration-1000 ${
          visibleSections.has('admission') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12606A] mb-3 md:mb-4">
              Student Admission<br />Process
            </h2>
            <p className="text-[#12606A] max-w-3xl mx-auto text-sm sm:text-base">
              Metland School offers a comprehensive and supportive admission process to welcome aspiring students. Our process includes assessment, orientation, registration, and final admission. We make it simple and guarantee a positive experience for students and parents.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 mb-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src="/admission-1.jpg" alt="Application" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg sm:text-xl font-bold">
                  1
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-2 text-[#12606A]">Online Application</h4>
                <p className="text-[#12606A] text-xs sm:text-sm">
                  Fill out our online application form with required documents
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 mb-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src="/admission-2.jpg" alt="Assessment" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg sm:text-xl font-bold">
                  2
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-2 text-[#12606A]">Entrance Assessment</h4>
                <p className="text-[#12606A] text-xs sm:text-sm">
                  Complete academic and aptitude assessments
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 mb-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src="/admission-3.jpg" alt="Interview" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg sm:text-xl font-bold">
                  3
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-2 text-[#12606A]">Parent Interview</h4>
                <p className="text-[#12606A] text-xs sm:text-sm">
                  Meet with our admission team and tour the facilities
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 mb-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src="/admission-4.jpg" alt="Enrollment" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg sm:text-xl font-bold">
                  4
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-2 text-[#12606A]">Enrollment</h4>
                <p className="text-[#12606A] text-xs sm:text-sm">
                  Complete registration and begin your journey with us
                </p>
              </div>
            </div>
          </div>

          {/* Timeline decoration */}
          <div className="hidden md:flex justify-center items-center space-x-4 mb-8">
            <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
            <div className="w-24 h-1 bg-teal-600"></div>
            <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
            <div className="w-24 h-1 bg-teal-600"></div>
            <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
            <div className="w-24 h-1 bg-teal-600"></div>
            <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
          </div>

          <div className="text-center">
            <button className="bg-teal-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300 font-semibold hover:shadow-lg text-sm sm:text-base">
              Start Your Application
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Preparing students for successful careers through quality vocational education.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Programs</a></li>
                <li><a href="#" className="hover:text-white transition">Admission</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Programs</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition">Hospitality</a></li>
                <li><a href="#" className="hover:text-white transition">Culinary Arts</a></li>
                <li><a href="#" className="hover:text-white transition">Business</a></li>
                <li><a href="#" className="hover:text-white transition">Technology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>Metland Cyber City</li>
                <li>Jakarta, Indonesia</li>
                <li>Phone: +62 xxx xxxx xxxx</li>
                <li>Email: info@metlandschool.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2026 Metland School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;