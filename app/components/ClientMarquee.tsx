import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ClientMarquee: React.FC = () => {
  const { theme } = useTheme();

  // Данные клиентов из раздела "Основные клиенты"
  const clients = [
    "ООО «Андритц»",
    "ООО «Дорпромгранит»",
    "ЗАО «КБР ИСТ»",
    "ООО «НТЛ Упаковка»",
    "ООО «НХТ»",
    "ЗАО «РОСТЭК-Выборг»",
    "ООО «Эссити»",
    "МБДОУ «Детский сад Каменногорска»",
    "МБОУ ДО ДюЦт и Политехническим колледжем Светогорска"
  ];

  // Дублируем список клиентов для бесшовной прокрутки
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className={`py-12 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Наши основные клиенты
        </h2>
        
        <div className="relative overflow-hidden py-4">
          <div className="animate-marquee whitespace-nowrap flex">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className={`mx-8 inline-block min-w-max px-6 py-4 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-gray-300'
                    : 'bg-gradient-to-r from-white to-gray-100 border border-gray-200 text-gray-700'
                }`}
              >
                <span className="text-lg font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;