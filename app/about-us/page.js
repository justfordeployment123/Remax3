"use client";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutUs() {

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
            About RE/MAX Hub
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl">
            Built on Global Expertise. Driven by Local Insight.
          </p>
        </div>
      </section>

      {/* About RE/MAX Hub Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Dubai skyline"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About RE/MAX Hub
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                RE/MAX Hub is a proud part of the world's leading real estate network — trusted by millions of buyers, sellers, and agents across 110+ countries and territories.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based in the heart of Dubai, we bring a new standard of professionalism, integrity, and market knowledge to the UAE property landscape. Our team specializes in residential, commercial, and luxury properties across Dubai, Abu Dhabi, Sharjah, and the Northern Emirates.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to find your dream home in the UAE, invest in Dubai real estate, or accelerate your property career, RE/MAX Hub is your trusted partner in every step of the journey.
              </p>
              <button className="bg-remax-blue text-white px-8 py-3 rounded hover:bg-remax-dark-blue transition">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR STORY</h2>
            <p className="text-xl text-gray-600">A legacy of excellence in real estate since 1973</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-remax-blue"></div>
            
            <div className="space-y-12">
              {/* 1973 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">1973 – The Beginning</h3>
                    <p className="text-gray-600">RE/MAX was founded in Denver, Colorado, revolutionizing the real estate industry with an agent-centric business model.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-remax-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 1995 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-remax-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">1995 – Global Expansion</h3>
                    <p className="text-gray-600">RE/MAX becomes the first real estate brand to expand globally, establishing presence in over 50 countries.</p>
                  </div>
                </div>
              </div>

              {/* 2010 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2010 – Middle East Entry</h3>
                    <p className="text-gray-600">RE/MAX establishes strong presence in the Middle East, bringing world-class real estate services to the region.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-remax-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2020 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-remax-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2020 – RE/MAX Hub Dubai</h3>
                    <p className="text-gray-600">RE/MAX Hub opens in Dubai, becoming a leading force in UAE real estate with focus on innovation and client satisfaction.</p>
                  </div>
                </div>
              </div>

              {/* 2025 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2025 – Leading the Market</h3>
                    <p className="text-gray-600">RE/MAX Hub continues to grow, serving thousands of clients across Dubai, Abu Dhabi, and the UAE with unmatched expertise and service.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-remax-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2025 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-red-50 p-6 rounded-lg shadow-lg border-2 border-red-200">
                    <h3 className="text-2xl font-bold text-red-800 mb-2">2025 – RE/MAX Hub Dubai</h3>
                    <p className="text-red-700 font-semibold">125 years of legacy powering the future of real estate.</p>
                  </div>
                </div>
              </div>

              {/* 2025+ */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2025+ – The Next Chapter</h3>
                    <p className="text-gray-600">The 4th generation continues to innovate, expand, and carry the legacy forward</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-remax-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Partners</h2>
          <div className="flex justify-center items-center space-x-12 flex-wrap gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold">RE/MAX</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Aldar</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="w-32 h-16 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Purple Bricks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Our Latest Listings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Dubai's most sought-after communities — from waterfront apartments and luxury villas to off-plan investments. Our expert agents help you find the right property, at the right value.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <button className="bg-white text-gray-800 px-6 py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all border-2 border-transparent hover:border-blue-100">
              Off-Plan Projects
            </button>
            <button className="bg-white text-gray-800 px-6 py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all border-2 border-transparent hover:border-blue-100">
              Ready Properties
            </button>
            <button className="bg-white text-gray-800 px-6 py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all border-2 border-transparent hover:border-blue-100">
              Commercial
            </button>
            <button className="bg-white text-gray-800 px-6 py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all border-2 border-transparent hover:border-blue-100">
              For Rent
            </button>
          </div>

          <div className="text-center">
            <button className="bg-remax-blue text-white px-8 py-3 rounded hover:bg-remax-dark-blue transition">
              Browse All Listings
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}