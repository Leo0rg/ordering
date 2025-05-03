import Image from 'next/image';
import Link from 'next/link';

interface SpecialistCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image?: string; // Делаю необязательным, т.к. будем использовать randomuser
}

export default function SpecialistCard({ 
  id, 
  name, 
  specialty, 
  rating, 
  reviews, 
  image 
}: SpecialistCardProps) {
  // Используем изображение из randomuser.me если не передано
  const profileImage = image || `https://randomuser.me/api/portraits/men/${Number(id) % 99}.jpg`;

  // Функция для отображения звёзд рейтинга
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Полные звезды
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    
    // Половина звезды
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" opacity="0.5" />
        </svg>
      );
    }
    
    // Пустые звезды
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 fill-current text-white opacity-30" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="relative rounded-[25px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 h-[400px]">
      {/* Изображение на весь размер карточки */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={profileImage}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Темный градиент для читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      
      {/* Контент поверх изображения */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm mb-3 text-white/80">{specialty}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-white/80">({reviews})</span>
        </div>
        
        <Link 
          href={`/booking?specialist=${id}`}
          className="block w-full bg-white text-black py-2.5 px-4 text-center font-bold transition-all hover:bg-white/90 rounded-xl"
        >
          Выбрать специалиста
        </Link>
      </div>
    </div>
  );
} 