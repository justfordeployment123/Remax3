"use client";
import { useState } from "react";
import { Search, Calendar, User, ArrowRight, TrendingUp, BookOpen, Download, Video, FileText, Award, Users } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ArticlesAdvice() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Buying",
    "Selling",
    "Renting",
    "Market Insights",
    "UAE Property Laws",
    "Investment Tips"
  ];

  const articles = [
    {
      id: 1,
      title: "Dubai Property Market Outlook 2025: What Buyers Need to Know",
      excerpt: "Discover the latest trends and predictions for Dubai's real estate market in 2025, including price forecasts and emerging hotspots.",
      category: "Market Insights",
      author: "Sarah Ahmed",
      date: "January 15, 2025",
      image: "/assets/1.jpeg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Complete Guide to Buying Property in Dubai as an Expat",
      excerpt: "Everything you need to know about purchasing property in Dubai, from visa requirements to financing options and legal considerations.",
      category: "Buying",
      author: "Mohammed Al-Rashid",
      date: "January 12, 2025",
      image: "/assets/2.jpeg",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Top 10 Family-Friendly Communities in Dubai",
      excerpt: "Explore the best neighborhoods in Dubai for families, featuring excellent schools, parks, and community amenities.",
      category: "Buying",
      author: "Lisa Thompson",
      date: "January 10, 2025",
      image: "/assets/3.jpeg",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "How to Maximize Your Property Sale Price in Dubai",
      excerpt: "Expert tips and strategies to help you get the best price when selling your Dubai property in today's competitive market.",
      category: "Selling",
      author: "Ahmed Hassan",
      date: "January 8, 2025",
      image: "/assets/4.jpeg",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Understanding RERA and Ejari: Essential UAE Property Regulations",
      excerpt: "A comprehensive guide to RERA registration and Ejari contracts, ensuring you comply with all Dubai property laws.",
      category: "UAE Property Laws",
      author: "Fatima Al-Mansouri",
      date: "January 5, 2025",
      image: "/assets/5.jpeg",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Dubai Rental Market Trends: What Landlords Should Know",
      excerpt: "Stay informed about rental yields, tenant preferences, and market dynamics affecting Dubai's rental property sector.",
      category: "Renting",
      author: "Omar Ibrahim",
      date: "January 3, 2025",
      image: "/assets/6.jpeg",
      readTime: "5 min read"
    },
    {
      id: 7,
      title: "Investment Opportunities in Dubai's Off-Plan Properties",
      excerpt: "Learn about the benefits and risks of investing in off-plan developments across Dubai's most promising locations.",
      category: "Investment Tips",
      author: "Jennifer Clark",
      date: "December 30, 2024",
      image: "/assets/7.jpeg",
      readTime: "7 min read"
    },
    {
      id: 8,
      title: "First-Time Buyer's Checklist for Dubai Real Estate",
      excerpt: "A step-by-step guide for first-time property buyers in Dubai, covering everything from budgeting to closing.",
      category: "Buying",
      author: "Khalid Rahman",
      date: "December 28, 2024",
      image: "/assets/8.jpeg",
      readTime: "9 min read"
    },
    {
      id: 9,
      title: "Preparing Your Dubai Property for a Quick Sale",
      excerpt: "Proven staging and preparation techniques to make your property stand out and sell faster in Dubai's market.",
      category: "Selling",
      author: "Mariam Saeed",
      date: "December 25, 2024",
      image: "/assets/9.jpeg",
      readTime: "6 min read"
    }
  ];

  const featuredArticle = articles[0];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).slice(1);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Articles & Advice
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, market analysis, and practical advice for buyers, sellers, and investors in the UAE real estate market
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-remax-blue transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-remax-blue text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-remax-red" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-80 md:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block w-fit bg-remax-blue text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {featuredArticle.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <button className="bg-remax-blue text-white px-6 py-3 rounded font-semibold hover:bg-remax-dark-blue transition-colors flex items-center gap-2 w-fit">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-blue-50 text-remax-blue px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <button className="text-remax-blue font-semibold hover:text-remax-dark-blue transition-colors flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-remax-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-remax-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Property Guides</h3>
              <p className="text-gray-600 text-sm mb-3">Comprehensive guides for buying, selling, and renting in Dubai</p>
              <span className="text-remax-blue text-sm font-semibold">24 Articles →</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-remax-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-remax-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Market Analysis</h3>
              <p className="text-gray-600 text-sm mb-3">Latest trends, forecasts, and data-driven insights</p>
              <span className="text-remax-blue text-sm font-semibold">18 Articles →</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-remax-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-remax-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Legal & Finance</h3>
              <p className="text-gray-600 text-sm mb-3">Understanding UAE property laws and financing options</p>
              <span className="text-remax-blue text-sm font-semibold">15 Articles →</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-remax-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-remax-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Investment Tips</h3>
              <p className="text-gray-600 text-sm mb-3">Expert strategies for maximizing property returns</p>
              <span className="text-remax-blue text-sm font-semibold">21 Articles →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our expert videos covering everything from property tours to market insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-remax-blue to-remax-dark-blue flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <Video className="w-16 h-16 text-white relative z-10" />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                  12:45
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Dubai Property Market Update Q1 2025
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our CEO discusses the latest market trends and what to expect in 2025
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>12.5K views</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-remax-blue to-remax-dark-blue flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <Video className="w-16 h-16 text-white relative z-10" />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                  8:30
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Virtual Tour: Luxury Villa in Emirates Hills
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Take a virtual walkthrough of this stunning 6-bedroom villa
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>8.2K views</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-remax-blue to-remax-dark-blue flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <Video className="w-16 h-16 text-white relative z-10" />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                  15:20
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How to Get a Mortgage in Dubai
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete guide to financing your property purchase in the UAE
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>15.8K views</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-remax-blue text-white px-8 py-3 rounded font-semibold hover:bg-remax-dark-blue transition-colors">
              View All Videos
            </button>
          </div>
        </div>
      </section>

      {/* Expert Contributors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Contributors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the real estate professionals and market analysts behind our content
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-remax-blue to-remax-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Sarah Ahmed</h3>
              <p className="text-sm text-gray-600 mb-2">Senior Market Analyst</p>
              <p className="text-xs text-gray-500">24 Articles</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-remax-blue to-remax-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Mohammed Al-Rashid</h3>
              <p className="text-sm text-gray-600 mb-2">Property Investment Expert</p>
              <p className="text-xs text-gray-500">18 Articles</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-remax-blue to-remax-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Lisa Thompson</h3>
              <p className="text-sm text-gray-600 mb-2">Residential Specialist</p>
              <p className="text-xs text-gray-500">21 Articles</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-remax-blue to-remax-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Ahmed Hassan</h3>
              <p className="text-sm text-gray-600 mb-2">Legal & Finance Advisor</p>
              <p className="text-xs text-gray-500">15 Articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-remax-blue to-remax-dark-blue text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Dubai Real Estate Insights
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter and get the latest articles, market reports, and expert advice delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-remax-red text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition-colors">
              Subscribe Now
            </button>
          </div>
          <p className="text-xs text-blue-200 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from RE/MAX Hub. Unsubscribe anytime.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Articles Published</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Monthly Readers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Expert Contributors</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

