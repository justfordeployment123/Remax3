"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, MapPin, Building, DollarSign, Users, Briefcase } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Commercial() {
    const [currentProperty, setCurrentProperty] = useState(0);

    const commercialProperties = [
        {
            id: 1,
            price: "$1,100,000",
            title: "3.61 Acres New Berlin",
            address: "9025 Farm to Market 775, New Berlin, TX 78155",
            type: "SHOPPING CENTER / RETAIL, VACANT LAND",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            status: "FOR SALE"
        },
        {
            id: 2,
            price: "$10,500,000",
            title: "Chase Plaza",
            address: "2333 Lake Avenue, Altadena, CA 91001",
            type: "OFFICE, OFFICE RETAIL",
            size: "26,249 SF",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            status: "FOR SALE"
        },
        {
            id: 3,
            price: "$120.00 sf/yr",
            title: "402 S Richland Creek Dr Suite A",
            address: "402 South Richland Creek Drive, Princeton, IN 47670",
            type: "OFFICE",
            size: "3,200 SF",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            status: "FOR LEASE"
        }
    ];

    const nextProperty = () => {
        setCurrentProperty((prev) => (prev + 1) % commercialProperties.length);
    };

    const prevProperty = () => {
        setCurrentProperty((prev) => (prev - 1 + commercialProperties.length) % commercialProperties.length);
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />
            
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` }}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
                
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="text-white">
                                <h1 className="text-6xl font-bold mb-8 leading-tight">
                                    A better way in<br />
                                    <span className="text-blue-400">commercial real estate</span>
                                </h1>
                                <p className="text-xl mb-8 leading-relaxed">
                                    Find your next property with a RE/MAX Commercial®<br />
                                    broker and discover a better way in commercial real<br />
                                    estate.
                                </p>
                                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase">
                                    Search Listings
                                </button>
                            </div>

                            {/* Right Content - Property Card */}
                            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-auto lg:mx-0">
                                <div className="relative mb-6">
                                    <img
                                        src={commercialProperties[currentProperty].image}
                                        alt={commercialProperties[currentProperty].title}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                                        commercialProperties[currentProperty].status === 'FOR SALE' 
                                            ? 'bg-red-500 text-white' 
                                            : 'bg-blue-600 text-white'
                                    }`}>
                                        {commercialProperties[currentProperty].status}
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="text-3xl font-bold text-gray-900">
                                        {commercialProperties[currentProperty].price}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {commercialProperties[currentProperty].title}
                                    </h3>
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span className="text-sm">{commercialProperties[currentProperty].address}</span>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {commercialProperties[currentProperty].type}
                                    </div>
                                    {commercialProperties[currentProperty].size && (
                                        <div className="text-sm text-gray-600">
                                            Building Size: {commercialProperties[currentProperty].size}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Commercial Properties Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <div className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-2">
                                Featured
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 uppercase">
                                Commercial Properties
                            </h2>
                        </div>
                        
                        {/* Navigation Arrows */}
                        <div className="flex space-x-2">
                            <button
                                onClick={prevProperty}
                                className="w-12 h-12 bg-[#004e9b] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextProperty}
                                className="w-12 h-12 bg-[#004e9b] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {commercialProperties.map((property) => (
                            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                                        property.status === 'FOR SALE' 
                                            ? 'bg-red-500 text-white' 
                                            : 'bg-blue-600 text-white'
                                    }`}>
                                        {property.status}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-2xl font-bold text-gray-900 mb-2">
                                        {property.price}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        {property.title}
                                    </h3>
                                    <div className="flex items-start text-gray-600 mb-3">
                                        <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-sm">{property.address}</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {property.type}
                                    </div>
                                    {property.size && (
                                        <div className="text-sm text-gray-600">
                                            Building Size: {property.size}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professionals Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-2">
                                Professionals
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 uppercase mb-8">
                                Search Commercial Brokers
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Whatever the property, whatever the transaction, RE/MAX Commercial delivers a level of awareness, trust and confidence that is unmatched. Use our search below to find a RE/MAX Commercial broker, or contact us so we can connect you with someone that will be the perfect fit for your needs. We look forward to the opportunity to serve you.
                            </p>
                            <button className="bg-[#004e9b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 uppercase">
                                Find Your Professional
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Commercial Building"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Commercial Office"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <div className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-2">
                                Offices
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 uppercase mb-8">
                                RE/MAX Commercial Offices
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Find the perfect brick-and-mortar for your commercial business ambitions. Let a dedicated RE/MAX Commercial office help you navigate the expansive industry and hone in on the best sector for your investment. From the first handshake to the final signature, we aim to get you unmatched results with our years of experience.
                            </p>
                            <button className="bg-[#004e9b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 uppercase">
                                Find an Office
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-2">
                                Support
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 uppercase mb-8">
                                Giving Back
                            </h2>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Children's Miracle Network Hospitals®
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                RE/MAX® is built on a culture of giving. For over 32 years, RE/MAX has partnered with Children's Miracle Network Hospitals to change kids' health and support communities worldwide, including initiatives in the UAE.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Children's Hospital"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}