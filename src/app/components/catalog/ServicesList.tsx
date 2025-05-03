'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';

// Моковые данные для примера
const servicesData = [
  {
    id: '1',
    title: 'Стрижка',
    price: 1500,
    duration: '45 мин',
    category: 'beauty'
  },
  {
    id: '2',
    title: 'Маникюр',
    price: 1200,
    duration: '60 мин',
    category: 'beauty'
  },
  {
    id: '3',
    title: 'Массаж',
    price: 2500,
    duration: '90 мин',
    category: 'spa'
  },
  {
    id: '4',
    title: 'Чистка лица',
    price: 3000,
    duration: '60 мин',
    category: 'beauty'
  },
  {
    id: '5',
    title: 'Педикюр',
    price: 1500,
    duration: '45 мин',
    category: 'beauty'
  },
  {
    id: '6',
    title: 'СПА-процедура',
    price: 4000,
    duration: '120 мин',
    category: 'spa'
  },
  {
    id: '7',
    title: 'Йога',
    price: 1800,
    duration: '60 мин',
    category: 'fitness'
  },
  {
    id: '8',
    title: 'Пилатес',
    price: 1700,
    duration: '45 мин',
    category: 'fitness'
  },
  {
    id: '9',
    title: 'Шугаринг',
    price: 1400,
    duration: '30 мин',
    category: 'beauty'
  }
];

const categories = [
  { id: 'all', name: 'Все' },
  { id: 'beauty', name: 'Красота' },
  { id: 'spa', name: 'СПА' },
  { id: 'fitness', name: 'Фитнес' }
];

export default function ServicesList() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Наши услуги</h2>
        
        <div className="flex flex-wrap gap-4 mt-6">
          {categories.map(category => (
            <div key={category.id} className="flex flex-col items-center">
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 border-2 border-black dark:border-white transition-all rounded-3xl ${
                  activeCategory === category.id
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {category.name}
              </button>
              {activeCategory === category.id && (
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            price={service.price}
            duration={service.duration}
            category={service.category}
          />
        ))}
      </div>
    </div>
  );
} 