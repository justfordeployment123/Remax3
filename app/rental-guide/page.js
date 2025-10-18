"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RentalGuide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Request submitted successfully!");
  };

  const handleDownloadGuide = async () => {
    try {
      // Create a link to download the file
      const link = document.createElement('a');
      link.href = '/assets/Dubai Landlord leasing.docx';
      link.download = 'Dubai Landlord leasing.docx';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading guide:', error);
      alert('Error downloading the guide. Please try again.');
    }
  };

  const slides = [
    {
      number: 1,
      title: "Understand Dubai Rental Market",
      description:
        "Dubai's rental market is dynamic and diverse. Understanding rental regulations, RERA laws, and tenant rights is crucial. A RE/MAX agent can guide you through the process and help you find the perfect rental property.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      number: 2,
      title: "Choose the Right Location",
      description:
        "From Dubai Marina to Downtown Dubai, each area offers unique lifestyle benefits. Consider proximity to work, schools, amenities, and transportation when selecting your rental location.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      number: 3,
      title: "Review Tenancy Contract",
      description:
        "Carefully review your tenancy contract (Ejari) before signing. Understand payment terms, maintenance responsibilities, and renewal conditions. Your RE/MAX agent will ensure all terms are fair and transparent.",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
              alt="Rental Guide"
              className="w-full object-cover rounded-lg h-[400px]"
            />
          </div>

          <h1 className="text-4xl font-[400] text-remax-blue mb-6">
            Welcome to the RE/MAX Dubai Rental Guide!
          </h1>

          <div className="text-black rounded-lg">
            <p className="text-lg leading-relaxed">
              Renting a property in Dubai is an exciting journey, and RE/MAX® is here to guide you every step of the way.
              Whether you're relocating to the UAE for the first time or looking for a new home in Dubai, downloading
              the RE/MAX Rental Guide is a great first step to understanding the rental process with confidence. When you're
              ready to take the next step, a trusted RE/MAX agent will help you navigate Dubai's rental market, from finding
              the perfect property to completing your Ejari registration and ensuring a smooth move-in process.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={handleDownloadGuide}
            className="bg-remax-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-remax-dark-blue transition-all duration-300 uppercase text-sm flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download the RE/MAX Dubai Rental Guide
          </button>
          <p className="text-gray-600 text-sm mt-3">
            Get your comprehensive guide to renting property in Dubai
          </p>
        </div>
      </section>

      {/* Renting in Dubai Steps */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-remax-blue mb-8">
            <h2 className="text-2xl font-bold">Renting in Dubai, Step by Step</h2>
          </div>

          {/* Slider */}
          <div className="rounded-lg p-12 bg-remax-dark-blue relative">
            <div className="flex items-center gap-8 text-white">
              {/* Image Section */}
              <div className="flex-shrink-0 w-96">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6">
                  {slides[currentSlide].number}. {slides[currentSlide].title}
                </h3>
                <p className="text-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    currentSlide === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Rental Information */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-remax-blue mb-8">
            Essential Rental Information for Dubai
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Payment Terms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In Dubai, rent is typically paid annually in 1-4 cheques. Understand your payment options and 
                negotiate terms that work for your budget. Security deposits are usually 5-10% of annual rent.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ejari Registration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All rental contracts in Dubai must be registered with Ejari (RERA's tenancy contract system). 
                This protects both landlord and tenant rights and is required for utility connections.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tenant Rights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dubai's rental laws protect tenants with clear regulations on rent increases, maintenance responsibilities, 
                and eviction procedures. Know your rights before signing any agreement.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Property Maintenance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Understand what maintenance is covered by the landlord versus tenant. Major structural repairs 
                are typically the landlord's responsibility, while minor fixes may fall to the tenant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-remax-blue text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Rental in Dubai?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Let a RE/MAX agent guide you through Dubai's rental market and help you find a home that fits your lifestyle and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-remax-blue px-8 py-3 rounded hover:bg-gray-100 transition font-semibold">
              FIND A RE/MAX AGENT
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-remax-blue transition font-semibold">
              SEARCH RENTALS
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Expert Rental Advice
            </h2>
            <p className="text-lg text-gray-600">
              Connect with a RE/MAX agent who specializes in Dubai rentals
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-remax-blue"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-remax-blue"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-remax-blue"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-remax-blue"
                  placeholder="e.g., Dubai Marina, Downtown Dubai"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSubmit}
                className="w-full bg-remax-blue text-white py-3 rounded hover:bg-remax-dark-blue transition font-semibold"
              >
                REQUEST CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

