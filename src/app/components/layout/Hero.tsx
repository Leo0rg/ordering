import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-white dark:bg-black pt-12 sm:pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center">
          <div className="max-w-2xl text-center">
            <div className="flex justify-center mb-2">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Простое и удобное бронирование услуг
            </h1>
            <p className="text-lg mb-8 opacity-80">
              Найдите лучших специалистов для любых услуг и запишитесь к ним онлайн.
              Экономьте время и пользуйтесь услугами профессионалов.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-bold transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200 text-center rounded-3xl"
              >
                Услуги
              </Link>
              <Link
                href="/booking"
                className="px-8 py-3 border-2 border-black dark:border-white font-bold transition-colors hover:bg-black/5 dark:hover:bg-white/5 text-center rounded-3xl"
              >
                Забронировать
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="max-w-3xl w-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-90 rounded-3xl overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="text-white text-center py-10 px-8">
                <div className="text-3xl sm:text-4xl font-bold mb-4">Скидка 15%</div>
                <div className="text-lg sm:text-xl mb-2">на первое бронирование</div>
                <div className="text-sm">Используйте код: FIRST15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 