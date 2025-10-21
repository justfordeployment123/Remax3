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
    zipCode: "",
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
      // Create a link to download the PDF file
      const link = document.createElement('a');
      link.href = '/assets/Dubai Landlord leasing.pdf';
      link.download = 'Dubai Landlord & Leasing Guide.pdf';
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
      title: "Why Lease Through RE/MAX Hub",
      description:
        "As part of the world's most recognized real estate brand, RE/MAX Hub offers landlords a professional, transparent, and data-driven leasing experience with access to qualified, pre-screened tenants and professional marketing across Dubai's leading portals.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      number: 2,
      title: "Understanding Dubai's Rental Market",
      description:
        "Dubai's rental market is dynamic and competitive. Our experts provide real-time rental comparisons, insights on tenant demand trends, and guidance on annual rent cap laws to help you set the optimal rent value.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      number: 3,
      title: "Preparing Your Property for Rent",
      description:
        "First impressions attract better tenants. Our agents help you inspect the property, arrange professional cleaning and photography, and ensure utilities are active to present your property at its best.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
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
      <section className="relative bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Dubai Landlord & Leasing Guide
              </h1>
              <h2 className="text-2xl font-bold text-remax-blue mb-6">
                Maximize Your Rental Returns with RE/MAX Hub Dubai
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Renting out your property in Dubai should be simple, secure, and profitable. At RE/MAX Hub Dubai, we help landlords find qualified tenants, achieve competitive rental income, and maintain their properties with peace of mind.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you own one apartment or an entire portfolio, our team provides end-to-end leasing and management services to protect your investment and optimize returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadGuide}
                  className="bg-remax-blue text-white px-6 py-3 rounded font-semibold hover:bg-remax-dark-blue transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Complete Guide
                </button>
                <button className="border-2 border-remax-blue text-remax-blue px-6 py-3 rounded font-semibold hover:bg-remax-blue hover:text-white transition-colors">
                  Find an Agent
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1500&h=400&fit=crop"
                alt="Real Estate Rental Guide"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rental Guide Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rental Guide, Step by Step</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow our comprehensive guide to navigate the rental process with confidence and achieve the best results
            </p>
          </div>

          {/* Slider */}
          <div className="bg-remax-dark-blue rounded-lg p-8 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-remax-red rounded w-10 h-10 flex items-center justify-center text-xl font-bold">
                    {slides[currentSlide].number}
                  </div>
                  <h3 className="text-2xl font-bold">
                    {slides[currentSlide].title}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-80 h-60 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-remax-blue mb-6">
            Complete Rental Process Guide
          </h2>

          <p className="text-gray-600 mb-12 leading-relaxed">
            Our comprehensive rental process ensures your property is marketed effectively,
            tenants are properly screened, and all legal requirements are met. Here's how
            we help you maximize your rental returns.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Marketing Your Property */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop"
                alt="Marketing Your Property"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-remax-blue mb-3">
                Marketing Your Property
              </h3>
              <p className="text-gray-600 leading-relaxed">
                RE/MAX Hub markets your property across Dubai's top real estate platforms
                including Bayut, Property Finder, Dubizzle, and our global RE/MAX network.
                We ensure maximum visibility to the right audience locally and internationally.
              </p>
            </div>

            {/* Tenant Screening */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop"
                alt="Tenant Screening"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-remax-blue mb-3">
                Tenant Screening & Selection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every tenant is thoroughly vetted to protect your investment. Our screening
                process includes ID & visa verification, proof of income and employment,
                and reference checks. Only qualified tenants proceed to contract signing.
              </p>
            </div>

            {/* Property Management */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop"
                alt="Property Management"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-remax-blue mb-3">
                Property Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For landlords preferring a hands-off experience, we offer comprehensive
                property management including rent collection, maintenance coordination,
                routine inspections, and lease renewals. You enjoy passive income.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-remax-blue mb-6">
              Why Choose RE/MAX Hub for Your Rental Needs
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              RE/MAX Hub offers landlords a professional, transparent, and data-driven
              leasing experience with comprehensive support throughout the rental process.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Access to Qualified Tenants
                </h3>
                <p className="text-gray-600">
                  Our extensive network provides access to{" "}
                  <a href="#" className="text-remax-blue underline">
                    pre-screened tenants
                  </a>{" "}
                  who meet your requirements. We handle all verification processes
                  including income proof, employment checks, and reference verification.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Professional Marketing & Pricing
                </h3>
                <p className="text-gray-600">
                  We provide rental valuation and pricing strategy based on market insights,
                  ensuring your property is priced competitively. Our marketing reaches
                  tenants through multiple channels including social media and targeted ads.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  RERA-Compliant Documentation
                </h3>
                <p className="text-gray-600">
                  All lease agreements are{" "}
                  <a href="#" className="text-remax-blue underline">
                    Ejari-compliant
                  </a>{" "}
                  and handled professionally. We ensure all terms including rent, deposits,
                  and maintenance obligations are clearly outlined and legally binding.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-remax-blue mb-6">
              List Your Property with RE/MAX Hub Today
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experts will evaluate your property, recommend an ideal rental price,
              and connect you with quality tenants quickly and efficiently. Get started
              with our comprehensive rental guide.
            </p>

            <div className="bg-remax-blue text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-4 text-lg">
                <div>📞 Call Us: +971 XXX XXX XXX</div>
                <div>📧 Email: info@remaxhub.ae</div>
                <div>📍 Visit: RE/MAX Hub Office, Dubai</div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleDownloadGuide}
                className="bg-remax-blue text-white px-8 py-4 rounded font-semibold hover:bg-remax-dark-blue transition-colors flex items-center gap-3 mx-auto"
              >
                <Download className="w-5 h-5" />
                Download the Dubai Landlord & Leasing Guide (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Guide Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Rental Guide Request
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to maximize your rental returns? Get our comprehensive guide.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-remax-blue bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-remax-blue bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-remax-blue bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Zip Code <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-remax-blue bg-white"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            By clicking "Submit Request" below, you are agreeing to the{" "}
            <a href="#" className="text-remax-blue underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-remax-blue underline">
              Privacy Policy
            </a>{" "}
            and are agreeing to receive marketing email messages from RE/MAX Hub Dubai
            and/or marketing emails, calls or texts placed by or on behalf of
            your local RE/MAX franchised office, to any phone number and/or
            email address that you provided, even if your number is on a
            federal, state, or our internal Do Not Call List. You further agree
            that call/texts may be sent with an automated system for selection
            or dialing of numbers and/or for artificial or prerecorded voice.
            Please note: Consent is not a condition of purchase. Standard data
            and messaging rate may apply. You may unsubscribe at any time.
          </p>

          <div className="text-right">
            <button
              onClick={handleSubmit}
              className="bg-[#004e9b] text-white px-8 py-3 rounded font-semibold hover:bg-remax-dark-blue transition-colors"
            >
              Submit Request
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

