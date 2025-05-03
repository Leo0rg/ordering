import Layout from './components/layout/Layout';
import Hero from './components/layout/Hero';
import ServicesList from './components/catalog/ServicesList';
import SpecialistsList from './components/catalog/SpecialistsList';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      <section className="py-12">
        <ServicesList />
      </section>
      
      <section className="py-12 bg-black/5 dark:bg-white/5">
        <SpecialistsList />
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Как это работает</h2>
            <p className="max-w-3xl mx-auto opacity-80">
              Простой процесс бронирования в несколько шагов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-black dark:border-white p-6 flex flex-col items-center text-center rounded-2xl shadow-sm">
              <div className="text-3xl font-bold mb-4 w-12 h-12 flex items-center justify-center border border-black dark:border-white rounded-full">1</div>
              <h3 className="text-xl font-bold mb-2">Выберите услугу</h3>
              <p className="opacity-80">Выберите услугу из каталога или найдите через поиск</p>
            </div>
            
            <div className="border border-black dark:border-white p-6 flex flex-col items-center text-center rounded-2xl shadow-sm">
              <div className="text-3xl font-bold mb-4 w-12 h-12 flex items-center justify-center border border-black dark:border-white rounded-full">2</div>
              <h3 className="text-xl font-bold mb-2">Выберите дату и время</h3>
              <p className="opacity-80">Выберите удобное для вас время из доступных слотов</p>
            </div>
            
            <div className="border border-black dark:border-white p-6 flex flex-col items-center text-center rounded-2xl shadow-sm">
              <div className="text-3xl font-bold mb-4 w-12 h-12 flex items-center justify-center border border-black dark:border-white rounded-full">3</div>
              <h3 className="text-xl font-bold mb-2">Подтвердите бронирование</h3>
              <p className="opacity-80">Заполните контактные данные и подтвердите бронирование</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/booking"
              className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-bold transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-xl"
            >
              Забронировать сейчас
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нам сегодня</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Более 10,000 клиентов уже пользуются нашим сервисом для бронирования услуг
          </p>
          <Link 
            href="/booking"
            className="inline-block px-8 py-3 bg-white text-black font-bold transition-colors hover:bg-neutral-200 rounded-xl"
          >
            Начать сейчас
          </Link>
        </div>
      </section>
    </Layout>
  );
}
