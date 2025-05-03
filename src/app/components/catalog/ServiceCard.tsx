import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  price: number;
  duration: string;
  image?: string;
  category?: string;
}

export default function ServiceCard({ id, title, price, duration, image, category = 'beauty' }: ServiceCardProps) {
  const getImageUrl = () => {
    if (image) return image;
    
    // Используем Picsum Photos - бесплатный сервис без API ключа
    // Используем id как seed для получения постоянного изображения для конкретной услуги
    const imageId = parseInt(id) || Math.floor(Math.random() * 1000);
    
    // Добавляем небольшую вариативность для разных категорий
    const offset = category === 'beauty' ? 100 : 
                   category === 'spa' ? 200 :
                   category === 'fitness' ? 300 : 0;
    
    // Формируем URL с id и параметрами для получения изображения 600x800
    return `https://picsum.photos/seed/${imageId + offset}/600/800`;
  };

  return (
    <div className="relative rounded-[25px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 h-[400px]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={getImageUrl()}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="flex justify-between items-end mt-2">
          <div className="flex flex-col">
            <div className="text-lg font-bold">{price} ₽</div>
            <div className="text-sm text-white/80">{duration}</div>
          </div>
          
          <Link 
            href={`/booking?service=${id}`}
            className="inline-block bg-white text-black py-2 px-6 font-bold transition-all hover:bg-white/90 rounded-xl"
          >
            Записаться
          </Link>
        </div>
      </div>
    </div>
  );
} 