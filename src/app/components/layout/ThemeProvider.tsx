'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'system' | 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Загружаем предпочтения темы из localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    // Сохраняем выбор темы в localStorage
    if (mounted) {
      localStorage.setItem('theme', theme);
    }

    // Определяем, какую тему применить
    const documentElement = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    const effectiveTheme = theme === 'system' ? systemTheme : theme;
    
    if (effectiveTheme === 'dark') {
      documentElement.classList.add('dark');
    } else {
      documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  // Добавляем слушатель изменений системной темы
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        if (mediaQuery.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 