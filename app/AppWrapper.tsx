import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import FixedMobileTabs from './components/FixedMobileTabs';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const AppWrapper: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки контента
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Задержка в 1 секунду для демонстрации процесса загрузки

    // В реальном приложении здесь может быть логика загрузки данных

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        {isLoading ? <LoadingScreen /> : (
          <>
            <Header />
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
            <FixedMobileTabs />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default AppWrapper;