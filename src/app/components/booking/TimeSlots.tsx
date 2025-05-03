'use client';

interface TimeSlotsProps {
  onSelectTime: (time: string | null) => void;
  selectedTime: string | null;
  selectedDate: Date | null;
}

export default function TimeSlots({ onSelectTime, selectedTime, selectedDate }: TimeSlotsProps) {
  // Моковые данные для доступных слотов времени
  const morningSlots = ['9:00', '10:00', '11:00', '12:00'];
  const afternoonSlots = ['13:00', '14:00', '15:00', '16:00'];
  const eveningSlots = ['17:00', '18:00', '19:00', '20:00'];

  // Рандомно блокируем некоторые слоты для демонстрации
  const getAvailability = (date: Date | null, slot: string): boolean => {
    if (!date) return false;

    const dateSeed = date.getDate() + date.getMonth();
    const slotIndex = parseInt(slot.split(':')[0]);

    // Генерируем псевдо-случайный результат, но стабильный для конкретной даты и слота
    return (dateSeed + slotIndex) % 5 !== 0;
  };

  const handleSelectTime = (time: string) => {
    onSelectTime(selectedTime === time ? null : time);
  };

  return (
    <div className="border border-black dark:border-white rounded-xl overflow-hidden shadow-sm">
      <div className="p-4 border-b border-black dark:border-white font-bold">
        Доступное время
      </div>

      {!selectedDate ? (
        <div className="p-4 text-center">Пожалуйста, выберите дату</div>
      ) : (
        <div className="p-4">
          <div className="mb-4">
            <div className="font-bold mb-2">Утро</div>
            <div className="grid grid-cols-4 gap-2">
              {morningSlots.map(slot => {
                const isAvailable = getAvailability(selectedDate, slot);
                return (
                  <button
                    key={slot}
                    onClick={() => isAvailable && handleSelectTime(slot)}
                    disabled={!isAvailable}
                    className={`
                      p-2 border border-black dark:border-white rounded-lg transition-colors duration-300
                      ${selectedTime === slot ? 'bg-black dark:bg-white text-white dark:text-black' : ''}
                      ${!isAvailable ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/5'}
                    `}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-4">
            <div className="font-bold mb-2">День</div>
            <div className="grid grid-cols-4 gap-2">
              {afternoonSlots.map(slot => {
                const isAvailable = getAvailability(selectedDate, slot);
                return (
                  <button
                    key={slot}
                    onClick={() => isAvailable && handleSelectTime(slot)}
                    disabled={!isAvailable}
                    className={`
                      p-2 border border-black dark:border-white rounded-lg transition-colors duration-300
                      ${selectedTime === slot ? 'bg-black dark:bg-white text-white dark:text-black' : ''}
                      ${!isAvailable ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/5'}
                    `}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="font-bold mb-2">Вечер</div>
            <div className="grid grid-cols-4 gap-2">
              {eveningSlots.map(slot => {
                const isAvailable = getAvailability(selectedDate, slot);
                return (
                  <button
                    key={slot}
                    onClick={() => isAvailable && handleSelectTime(slot)}
                    disabled={!isAvailable}
                    className={`
                      p-2 border border-black dark:border-white rounded-lg transition-colors duration-300
                      ${selectedTime === slot ? 'bg-black dark:bg-white text-white dark:text-black' : ''}
                      ${!isAvailable ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/5'}
                    `}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 