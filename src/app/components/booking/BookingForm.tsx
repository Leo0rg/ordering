'use client';

import { useState } from 'react';
import Calendar from './Calendar';
import TimeSlots from './TimeSlots';

// Моковые данные
const serviceOptions = [
  { id: '1', name: 'Стрижка', price: 1500 },
  { id: '2', name: 'Маникюр', price: 1200 },
  { id: '3', name: 'Массаж', price: 2500 },
  { id: '4', name: 'Чистка лица', price: 3000 },
  { id: '5', name: 'Педикюр', price: 1500 },
  { id: '6', name: 'СПА-процедура', price: 4000 }
];

const specialistOptions = [
  { id: '1', name: 'Анна Иванова', specialty: 'Парикмахер-стилист' },
  { id: '2', name: 'Сергей Петров', specialty: 'Массажист' },
  { id: '3', name: 'Елена Смирнова', specialty: 'Косметолог' },
  { id: '4', name: 'Александр Козлов', specialty: 'СПА-терапевт' },
  { id: '5', name: 'Мария Васильева', specialty: 'Мастер маникюра' },
  { id: '6', name: 'Дмитрий Николаев', specialty: 'Тренер по йоге' }
];

interface BookingFormProps {
  preselectedService?: string;
  preselectedSpecialist?: string;
}

export default function BookingForm({ 
  preselectedService,
  preselectedSpecialist 
}: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>(preselectedService || '');
  const [selectedSpecialist, setSelectedSpecialist] = useState<string>(preselectedSpecialist || '');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Очистка формы
      setTimeout(() => {
        setSelectedDate(null);
        setSelectedTime(null);
        setSelectedService('');
        setSelectedSpecialist('');
        setName('');
        setPhone('');
        setEmail('');
        setComment('');
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  const isFormValid = () => {
    return (
      selectedDate && 
      selectedTime && 
      selectedService && 
      selectedSpecialist && 
      name && 
      phone
    );
  };
  
  const selectedServiceData = serviceOptions.find(s => s.id === selectedService);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Забронировать услугу</h2>
      
      {isSuccess ? (
        <div className="border border-black dark:border-white p-8 text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Бронирование успешно!</h3>
          <p>Ваша заявка принята. В ближайшее время мы свяжемся с вами для подтверждения записи.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-6">
              <div>
                <label className="block font-bold mb-2">Выберите услугу</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-3 border border-black dark:border-white bg-transparent rounded-xl"
                  required
                >
                  <option value="">Выберите услугу</option>
                  {serviceOptions.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.price} ₽
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block font-bold mb-2">Выберите специалиста</label>
                <select
                  value={selectedSpecialist}
                  onChange={(e) => setSelectedSpecialist(e.target.value)}
                  className="w-full p-3 border border-black dark:border-white bg-transparent rounded-xl"
                  required
                >
                  <option value="">Выберите специалиста</option>
                  {specialistOptions.map(specialist => (
                    <option key={specialist.id} value={specialist.id}>
                      {specialist.name} - {specialist.specialty}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block font-bold mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-black dark:border-white bg-transparent rounded-xl"
                  required
                />
              </div>
              
              <div>
                <label className="block font-bold mb-2">Телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-black dark:border-white bg-transparent rounded-xl"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              
              <div>
                <label className="block font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-black dark:border-white bg-transparent rounded-xl"
                />
              </div>
              
              <div>
                <label className="block font-bold mb-2">Комментарий</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-3 border border-black dark:border-white bg-transparent min-h-[100px] rounded-xl"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <label className="block font-bold mb-2">Выберите дату</label>
                <Calendar 
                  selectedDate={selectedDate} 
                  onSelectDate={setSelectedDate} 
                />
              </div>
              
              <div>
                <label className="block font-bold mb-2">Выберите время</label>
                <TimeSlots 
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onSelectTime={setSelectedTime}
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-black dark:border-white pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {selectedServiceData && (
                <div className="text-xl font-bold">
                  Итого: {selectedServiceData.price} ₽
                </div>
              )}
              
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`
                  min-w-[200px] py-3 px-6 bg-black text-white dark:bg-white dark:text-black font-bold rounded-xl
                  ${!isFormValid() || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-800 dark:hover:bg-neutral-200'}
                `}
              >
                {isSubmitting ? 'Обработка...' : 'Забронировать'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
} 