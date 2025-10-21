"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { menuConfig } from "../config/menuConfig";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (menuKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenMenu(menuKey);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* RE/MAX Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity"
              title="RE/MAX Home"
            >
              <img 
                src="https://www.remax.com/images/design-system/logo/remax/logotype_color.svg"
                alt="RE/MAX"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-1">
            {/* Buy Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('buy')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-remax-blue font-semibold transition-colors"
                aria-expanded={openMenu === 'buy'}
              >
                Buy
              </button>
              {openMenu === 'buy' && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-b-lg border-t-2 border-remax-red">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/property-search"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Property Search
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/buying-guide"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Buying Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/virtual-buying"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Virtual Home Buying
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sell Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('sell')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-remax-blue font-semibold transition-colors"
                aria-expanded={openMenu === 'sell'}
              >
                Sell
              </button>
              {openMenu === 'sell' && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-b-lg border-t-2 border-remax-red">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/selling-guide"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Selling Guide
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Rent Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('rent')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-remax-blue font-semibold transition-colors"
                aria-expanded={openMenu === 'rent'}
              >
                Rent
              </button>
              {openMenu === 'rent' && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-b-lg border-t-2 border-remax-red">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/rental-search"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Rental Search
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/rental-agent"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Find a Rental Agent
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/rental-guide"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Rental Guide
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Agents Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('agents')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-remax-blue font-semibold transition-colors"
                aria-expanded={openMenu === 'agents'}
              >
                Agents
              </button>
              {openMenu === 'agents' && (
                <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-lg rounded-b-lg border-t-2 border-remax-red">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/find-agent"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Agent Search
                      </Link>
                    </li>
                  </ul>
                  <hr className="my-2 border-gray-200" />
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-sm text-gray-700 mb-3">
                      We have the tools and the experience to lead you to success!
                    </p>
                    <Link
                      href="/join-remax"
                      className="inline-flex items-center text-remax-blue hover:text-remax-dark-blue font-semibold text-sm transition-colors"
                    >
                      Join RE/MAX
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* More Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('more')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-remax-blue font-semibold transition-colors"
                aria-expanded={openMenu === 'more'}
              >
                More
              </button>
              {openMenu === 'more' && (
                <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-lg rounded-b-lg border-t-2 border-remax-red">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/luxury"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Luxury
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/global"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Global
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/commercial"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Commercial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/articles-advice"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Articles and Advice
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-remax-blue transition-colors"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Login/Signup Buttons */}
            <div className="flex items-center space-x-2 ml-4 border-l border-gray-200 pl-4">
              <Link href="/login">
                <button className="text-remax-blue hover:text-remax-dark-blue font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-all text-sm">
                  Log In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-remax-blue text-white px-5 py-2 rounded-lg hover:bg-remax-dark-blue font-semibold shadow-sm hover:shadow transition-all text-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
