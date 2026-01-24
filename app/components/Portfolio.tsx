import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Portfolio: React.FC = () => {
  const { theme } = useTheme();

  // Данные для портфолио на основе информации с сайта
  const portfolioItems = [
    {
      id: 1,
      title: "Теплоизоляция технологического оборудования",
      description: "Выполняется качественная теплоизоляция различного технологического оборудования",
      location: "Северо-Запад России",
      year: "2022"
    },
    {
      id: 2,
      title: "Установка и обвязка технологического оборудования",
      description: "Монтаж и подключение технологического оборудования с обвязкой систем трубопроводами и коммуникациями",
      location: "Ленинградская область",
      year: "2023"
    },
    {
      id: 3,
      title: "Устройство и монтаж площадок обслуживания",
      description: "Создание специализированных площадок для обслуживания оборудования",
      location: "Выборгский район",
      year: "2022"
    },
    {
      id: 4,
      title: "Установка системы откачки сточных вод",
      description: "Монтаж систем водоотведения и откачки сточных вод, ремонт фундамента технологического оборудования",
      location: "Ленинградская область",
      year: "2025"
    },
    {
      id: 5,
      title: "Строительство ангара для обслуживания большегрузных автомобилей",
      description: "Возведение специализированных ангаров для технического обслуживания тяжелой техники",
      location: "Северо-Запад России",
      year: "2022"
    },
    {
      id: 6,
      title: "Ремонт мазутного резервуара V = 5000 м³",
      description: "Замена днища и первого пояса обечайки резервуара объемом 5000 кубических метров",
      location: "Ленинградская область",
      year: "2024"
    },
    {
      id: 7,
      title: "Ремонт фундамента технологического оборудования",
      description: "Ремонт фундамента технологического оборудования — это комплекс мероприятий по восстановлению несущей способности и геометрических параметров основания.",
      location: "Ленинградская область",
      year: "2025"
    }

  ];

  return (
    <div className={`min-h-screen py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className={`py-16 rounded-2xl mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white'
            : 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white'
        }`}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Портфолио</h1>
            <p className="text-xl">Наши проекты и реализованные работы</p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <main className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}
              >
                <div className="h-48 flex items-center justify-center">
                  <img
                    src={`/portfolio-${item.id}.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='12' fill='%239ca3af'%3EИзображение ${item.id}%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{item.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                    }`}>{item.year}</span>
                  </div>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <div className={`flex items-center text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Stats Section */}
        <section className="py-16 mt-16">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-12 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Статистика нашей работы</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`rounded-2xl p-8 text-center shadow-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}>
                <div className="text-5xl font-bold mb-2 text-blue-600">12+</div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Лет на рынке</p>
              </div>
              <div className={`rounded-2xl p-8 text-center shadow-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}>
                <div className="text-5xl font-bold mb-2 text-blue-600">+60%</div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Рост за 6 лет</p>
              </div>
              <div className={`rounded-2xl p-8 text-center shadow-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}>
                <div className="text-5xl font-bold mb-2 text-blue-600">100+</div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Реализованных проектов</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;