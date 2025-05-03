'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const cities = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 
  'Казань', 'Нижний Новгород', 'Челябинск', 'Самара'
];

const navLinks = [
  { name: 'Услуги', href: '/services' },
  { name: 'Специалисты', href: '/specialists' },
  { name: 'Бронирование', href: '/booking' },
];

export default function Header() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-black z-50 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Левая секция с логотипом и городом */}
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-lg font-black tracking-tight transition-transform duration-300 hover:scale-105"
            >
              BOOKING.IO
            </Link>
            
            <div className="relative hidden sm:block">
              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="appearance-none bg-transparent border-2 border-black dark:border-white rounded-3xl px-4 py-2 pr-8 focus:outline-none text-sm transition-all duration-300 hover:shadow-sm"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Центральная секция с навигацией на больших экранах */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium px-4 py-2 transition-all duration-300 hover:opacity-80 rounded-3xl"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Правая секция с поиском и переключателем темы */}
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border-2 border-black dark:border-white rounded-3xl bg-transparent focus:outline-none transition-all duration-300 hover:shadow-sm"
              />
              <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <ThemeToggle />

            {/* Кнопка мобильного меню */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border-2 border-black dark:border-white rounded-3xl transition-colors duration-300"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-black/10 dark:border-white/10 animate-fadeIn">
            <nav className="flex flex-col space-y-4 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium px-4 py-2 transition-all duration-300 rounded-3xl"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="sm:hidden pt-4">
                <label className="block text-sm font-medium mb-2">Выберите город</label>
                <select 
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full appearance-none bg-transparent border-2 border-black dark:border-white rounded-3xl px-4 py-2 focus:outline-none transition-all duration-300"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className="sm:hidden pt-2">
                <label className="block text-sm font-medium mb-2">Поиск</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Поиск специалистов и услуг..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-black dark:border-white rounded-3xl bg-transparent focus:outline-none transition-all duration-300"
                  />
                  <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 