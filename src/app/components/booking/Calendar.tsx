'use client';

import { useState } from 'react';

interface CalendarProps {
  onSelectDate: (date: Date | null) => void;
  selectedDate: Date | null;
}

export default function Calendar({ onSelectDate, selectedDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  
  // Корректировка для начала недели с понедельника
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onSelectDate(isSameDate(date, selectedDate) ? null : date);
  };
  
  const isSameDate = (date1: Date | null, date2: Date | null): boolean => {
    if (!date1 || !date2) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  
  const isPastDate = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  
  // Создаем массив для дней календаря
  const calendarDays = [];
  for (let i = 0; i < adjustedFirstDay; i++) {
    calendarDays.push(null);
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  
  // Дополняем пустыми значениями для ровной сетки
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push(null);
  }
  
  return (
    <div className="border border-black dark:border-white rounded-xl overflow-hidden shadow-sm">
      <div className="p-4 flex items-center justify-between border-b border-black dark:border-white">
        <button 
          onClick={previousMonth} 
          className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="font-bold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        
        <button 
          onClick={nextMonth}
          className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 border-b border-black dark:border-white">
        {dayNames.map((day, index) => (
          <div 
            key={index} 
            className="p-2 text-center text-sm font-bold"
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7">
        {calendarDays.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="p-2" />;
          }
          
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
          const isSelected = selectedDate && isSameDate(date, selectedDate);
          const isDisabled = isPastDate(date);
          
          return (
            <button
              key={`day-${day}`}
              onClick={() => !isDisabled && handleDateClick(day)}
              disabled={isDisabled}
              className={`
                p-2 text-center relative h-12 transition-colors duration-300
                ${isSelected ? 'bg-black dark:bg-white text-white dark:text-black' : ''}
                ${isDisabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/5'}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
} 