'use client'
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Video, Home, FileCheck, CheckCircle, Monitor, Smartphone, Globe } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function VirtualBuying() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      number: 1,
      title: "Virtual Consultation",
      description: "Schedule phone calls or virtual appointments with your agent to review everything on your property wish list. Connect from anywhere in the world.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop",
      icon: Video
    },
    {
      number: 2,
      title: "Sharing Properties",
      description: "You and your agent can share listings and preferred properties within your REMAX tools to be viewed at any time, on any device.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      icon: Home
    },
    {
      number: 3,
      title: "Virtual Tours & Inspections",
      description: "Experience properties through high-quality virtual tours, 3D walkthroughs, and live video inspections with your agent.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      icon: Monitor
    },
    {
      number: 4,
      title: "Digital Documentation",
      description: "Sign contracts, review documents, and complete all paperwork securely online with our digital tools and e-signature capabilities.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      icon: FileCheck
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Buy From Anywhere",
      description: "Purchase your dream home from any location worldwide with complete confidence and security."
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description: "Access all tools and resources from your phone, tablet, or computer at your convenience."
    },
    {
      icon: CheckCircle,
      title: "Secure & Reliable",
      description: "Industry-leading security measures protect your information and transactions throughout the process."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Buy Your Dream Home From Anywhere in the World
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the future of home buying with RE/MAX's comprehensive virtual buying platform. Connect with expert agents, tour properties remotely, and complete your purchase with confidence—all from the comfort of your current location.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-remax-blue text-white px-8 py-3 rounded hover:bg-remax-dark-blue transition-all duration-300 font-semibold">
                  GET STARTED TODAY
                </button>
                <button className="border-2 border-remax-blue text-remax-blue px-8 py-3 rounded hover:bg-blue-50 transition-all duration-300 font-semibold">
                  FIND AN AGENT
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Virtual Home Buying"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Virtual Home Buying?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're relocating across the country, have mobility challenges, or simply prefer a more efficient process, virtual home buying offers unmatched convenience and flexibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 text-remax-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtual Home Buying Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Virtual Home Buying, Step By Step
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes buying a home remotely simple, secure, and stress-free.
            </p>
          </div>
          
          {/* Step Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slides.map((slide, index) => {
              const IconComponent = slide.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-remax-blue" />
                  </div>
                  <div className="text-sm font-bold text-remax-blue mb-2">
                    STEP {slide.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cutting-Edge Technology Meets Personal Service
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As technology evolves, so does the way we buy homes. RE/MAX combines state-of-the-art virtual tools with the personalized expertise of experienced real estate professionals.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                There are times when buyers can't be present in person to view a property, but with RE/MAX's cutting-edge home buying tools, everything can be done seamlessly from your phone, computer, or tablet. Our experienced <a href="#" className="text-remax-blue underline font-semibold">real estate agents</a> dedicate their time to providing you with all the details you need about your property, ensuring you feel informed and confident, even from a distance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-remax-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">3D Virtual Tours</h4>
                    <p className="text-gray-600 text-sm">Explore every corner of properties with immersive 3D walkthroughs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-remax-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Live Video Consultations</h4>
                    <p className="text-gray-600 text-sm">Connect face-to-face with agents through secure video calls</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-remax-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Digital Document Management</h4>
                    <p className="text-gray-600 text-sm">Sign and manage all paperwork securely online</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Technology and Real Estate"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-remax-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Virtual Home Buying Journey?
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Connect with a trusted RE/MAX agent today and discover how easy it is to buy your dream home from anywhere in the world. Our experts are ready to guide you through every step of the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-remax-blue px-8 py-3 rounded hover:bg-gray-100 transition-all duration-300 font-semibold">
              FIND A RE/MAX AGENT
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-remax-blue transition-all duration-300 font-semibold">
              SCHEDULE A CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src="https://static-images.remax.com/assets/web/homepage/bmta-red-2024.png"
                alt="BrandSpark Most Trusted"
                className="w-16 h-20 object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Voted #1 Most Trusted Real Estate Brand
              </h2>
              <p className="text-gray-600">
                RE/MAX is the most recognized real estate brand globally, now bringing world-class service and expertise to the UAE property market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}