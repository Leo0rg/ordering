'use client';

import { useState } from 'react';
import SpecialistCard from './SpecialistCard';

// Моковые данные для примера
const specialistsData = [
  {
    id: '1',
    name: 'Анна Иванова',
    specialty: 'Парикмахер-стилист',
    rating: 4.8,
    reviews: 124,
    category: 'beauty'
  },
  {
    id: '2',
    name: 'Сергей Петров',
    specialty: 'Массажист',
    rating: 4.9,
    reviews: 89,
    category: 'spa'
  },
  {
    id: '3',
    name: 'Елена Смирнова',
    specialty: 'Косметолог',
    rating: 4.7,
    reviews: 56,
    category: 'beauty'
  },
  {
    id: '4',
    name: 'Александр Козлов',
    specialty: 'СПА-терапевт',
    rating: 4.6,
    reviews: 72,
    category: 'spa'
  },
  {
    id: '5',
    name: 'Мария Васильева',
    specialty: 'Мастер маникюра',
    rating: 4.9,
    reviews: 105,
    category: 'beauty'
  },
  {
    id: '6',
    name: 'Дмитрий Николаев',
    specialty: 'Тренер по йоге',
    rating: 4.5,
    reviews: 48,
    category: 'fitness'
  }
];

const categories = [
  { id: 'all', name: 'Все' },
  { id: 'beauty', name: 'Красота' },
  { id: 'spa', name: 'СПА' },
  { id: 'fitness', name: 'Фитнес' }
];

export default function SpecialistsList() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSpecialists = activeCategory === 'all' 
    ? specialistsData 
    : specialistsData.filter(specialist => specialist.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Наши специалисты</h2>
        
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
        {filteredSpecialists.map(specialist => (
          <SpecialistCard
            key={specialist.id}
            id={specialist.id}
            name={specialist.name}
            specialty={specialist.specialty}
            rating={specialist.rating}
            reviews={specialist.reviews}
          />
        ))}
      </div>
    </div>
  );
} 