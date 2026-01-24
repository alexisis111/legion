import React, { useState, useEffect } from 'react';
import type { Route } from "./+types/proposal";
import { useTheme } from '../contexts/ThemeContext';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Индивидуальное предложение - ЛЕГИОН, строительная компания" },
    { name: "description", content: "Получите индивидуальное предложение с 25% скидкой на любые виды работ от ООО «ЛЕГИОН»" },
  ];
}

const ProposalPage: React.FC = () => {
  const { theme } = useTheme();
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  // Вычисляем время окончания предложения (24 часа с момента первого посещения)
  useEffect(() => {
    const startTime = localStorage.getItem('proposalStartTime');
    let endTime: number;

    if (startTime) {
      endTime = parseInt(startTime, 10) + 24 * 60 * 60 * 1000; // 24 часа в миллисекундах
    } else {
      const now = Date.now();
      localStorage.setItem('proposalStartTime', now.toString());
      endTime = now + 24 * 60 * 60 * 1000; // 24 часа в миллисекундах
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section with Discount and Timer */}
      <div className={`relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-red-900/20 via-gray-900 to-red-900/20'
          : 'bg-gradient-to-br from-red-100/50 via-blue-50 to-red-100/50'
      }`}>
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full blur opacity-75 animate-pulse"></div>
            <h1 className={`relative text-5xl md:text-7xl font-extrabold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block">СПЕЦИАЛЬНОЕ</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-500">
                ПРЕДЛОЖЕНИЕ
              </span>
            </h1>
          </div>

          <p className={`text-xl md:text-2xl mt-6 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Получите скидку <span className="font-bold text-red-600">25%</span> на все виды работ
          </p>

          {/* Timer with Big Discount Display */}
          <div className={`mt-12 p-8 rounded-3xl max-w-4xl mx-auto ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 shadow-2xl'
              : 'bg-gradient-to-r from-white to-gray-100 border border-gray-200 shadow-2xl'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <p className={`text-xl font-semibold mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Осталось времени:
                </p>

                <div className="flex justify-center space-x-4">
                  <div className={`flex flex-col items-center px-2 py-1 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg'
                  }`}>
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-gradient-to-b from-gray-700 to-gray-800'
                          : 'bg-gradient-to-b from-gray-100 to-gray-200'
                      } shadow-inner`}></div>
                      <span className="relative text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 w-20 h-20 flex items-center justify-center rounded-lg shadow-lg">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                    </div>
                    <span className={`text-xs mt-2 font-medium uppercase tracking-wider ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      ЧАСОВ
                    </span>
                  </div>

                  <div className={`flex flex-col items-center px-2 py-1 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg'
                  }`}>
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-gradient-to-b from-gray-700 to-gray-800'
                          : 'bg-gradient-to-b from-gray-100 to-gray-200'
                      } shadow-inner`}></div>
                      <span className="relative text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 w-20 h-20 flex items-center justify-center rounded-lg shadow-lg">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                    </div>
                    <span className={`text-xs mt-2 font-medium uppercase tracking-wider ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      МИН
                    </span>
                  </div>

                  <div className={`flex flex-col items-center px-2 py-1 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg'
                  }`}>
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-gradient-to-b from-gray-700 to-gray-800'
                          : 'bg-gradient-to-b from-gray-100 to-gray-200'
                      } shadow-inner`}></div>
                      <span className="relative text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 w-20 h-20 flex items-center justify-center rounded-lg shadow-lg">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                    </div>
                    <span className={`text-xs mt-2 font-medium uppercase tracking-wider ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      СЕК
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className={`text-lg ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Скидка действует только в течение <span className="font-bold text-red-600">24 часов</span> с момента активации
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`rounded-3xl p-12 text-center ${
          theme === 'dark'
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-200'
      }`}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Не упустите шанс сэкономить!
        </h2>

        <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Воспользуйтесь уникальным предложением прямо сейчас и получите скидку 25% на все виды работ
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
              href="tel:+71234567890"
              className={`px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 ${
                  theme === 'dark'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/20'
                      : 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/20'
              }`}
          >
            Заказать звонок
          </a>
          <a
              href="mailto:info@legion-company.ru"
              className={`px-10 py-5 rounded-full font-bold text-xl border-2 transition-all ${
                  theme === 'dark'
                      ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-100'
              }`}
          >
            Написать письмо
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Почему стоит воспользоваться предложением?
          </h2>
          <p className={`mt-4 text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Мы предлагаем качественные строительные и монтажные работы с выгодой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Экономия 25%",
              description: "Сэкономьте четверть стоимости работ благодаря нашей специальной скидке",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Профессиональный подход",
              description: "Работаем с 2012 года, имеем большой опыт в строительных и монтажных работах",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Индивидуальный расчет",
              description: "Бесплатно рассчитаем стоимость проекта с учетом ваших потребностей",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-red-900/30 to-red-800/30 text-red-400'
                  : 'bg-gradient-to-r from-red-100 to-red-50 text-red-600'
              }`}>
                {benefit.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {benefit.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default ProposalPage;