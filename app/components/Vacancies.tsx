import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Vacancies: React.FC = () => {
  const { theme } = useTheme();

  // Данные вакансий на основе информации с сайта
  const vacancies = [
    {
      id: 1,
      position: "Электрогазосварщик",
      department: "Производственный отдел",
      requirements: [
        "Опыт работы от двух лет",
        "Наличие документов, подтверждающих квалификацию",
        "Комплект документов для оформления по ТК РФ"
      ],
      conditions: [
        "Пятидневная рабочая неделя, полная занятость",
        "Официальное оформление по ТК РФ",
        "Корпоративная связь",
        "Обучение и развитие",
        "Своевременная выплата заработной платы"
      ],
      contact: "+7 921 591-65-06, +7 931 006-34-46"
    },
    {
      id: 2,
      position: "Отделочник",
      department: "Производственный отдел",
      requirements: [
        "Наличие документов, подтверждающих квалификацию",
        "Комплект документов для оформления по ТК РФ"
      ],
      conditions: [
        "Пятидневная рабочая неделя, полная занятость",
        "Официальное оформление по ТК РФ",
        "Корпоративная связь",
        "Обучение и развитие",
        "Своевременная выплата заработной платы"
      ],
      contact: "+7 921 591-65-06, +7 931 006-34-46"
    },
    {
      id: 3,
      position: "Слесарь-монтажник",
      department: "Производственный отдел",
      requirements: [
        "Наличие документов, подтверждающих квалификацию",
        "Комплект документов для оформления по ТК РФ"
      ],
      conditions: [
        "Пятидневная рабочая неделя, полная занятость",
        "Официальное оформление по ТК РФ",
        "Корпоративная связь",
        "Обучение и развитие",
        "Своевременная выплата заработной платы"
      ],
      contact: "+7 921 591-65-06, +7 931 006-34-46"
    },
    {
      id: 4,
      position: "Подсобный рабочий",
      department: "Производственный отдел",
      requirements: [
        "Комплект документов для оформления по ТК РФ"
      ],
      conditions: [
        "Пятидневная рабочая неделя, полная занятость",
        "Официальное оформление по ТК РФ",
        "Корпоративная связь",
        "Обучение и развитие",
        "Своевременная выплата заработной платы"
      ],
      contact: "+7 921 591-65-06, +7 931 006-34-46"
    },
    {
      id: 5,
      position: "Специалист по монтажу пожарной безопасности",
      department: "Производственный отдел",
      requirements: [
        "Опыт работы",
        "Наличие документов, подтверждающих квалификацию",
        "Комплект документов для оформления по ТК РФ"
      ],
      conditions: [
        "Пятидневная рабочая неделя, полная занятость",
        "Официальное оформление по ТК РФ",
        "Корпоративная связь",
        "Обучение и развитие",
        "Своевременная выплата заработной платы"
      ],
      contact: "+7 921 591-65-06, +7 931 006-34-46"
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
            <h1 className="text-4xl font-bold mb-4">Вакансии</h1>
            <p className="text-xl">Присоединяйтесь к нашей команде профессионалов</p>
          </div>
        </section>

        <main className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Мы всегда рады новым талантливым специалистам
            </h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Обращаться в будни с 09:00 до 18:00 в отдел кадров
            </p>
          </div>

          {/* Vacancies List */}
          <div className="space-y-8">
            {vacancies.map((vacancy) => (
              <div
                key={vacancy.id}
                className={`rounded-2xl p-8 shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}
              >
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{vacancy.position}</h3>
                    <p className={`mt-1 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>{vacancy.department}</p>
                  </div>
                  <span className={`mt-2 px-4 py-2 rounded-full text-sm font-medium ${
                    theme === 'dark' ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                  }`}>
                    Активная вакансия
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                    }`}>Требования</h4>
                    <ul className="space-y-2">
                      {vacancy.requirements.map((req, idx) => (
                        <li key={idx} className={`flex items-start ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <span className="mr-2 text-green-500">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                    }`}>Условия работы</h4>
                    <ul className="space-y-2">
                      {vacancy.conditions.map((cond, idx) => (
                        <li key={idx} className={`flex items-start ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <span className="mr-2 text-green-500">✓</span>
                          {cond}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`mt-8 pt-6 border-t ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                  }`}>Контакты для связи</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    Обращайтесь в отдел кадров: <span className="font-medium">{vacancy.contact}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Application Section */}
          <section className={`mt-16 rounded-2xl p-8 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-200'
          }`}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Не нашли подходящую вакансию?
              </h2>
              <p className={`text-xl mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Отправьте нам свое резюме, и мы обязательно с вами свяжемся
              </p>
              <a
                href="/contacts"
                className={`inline-block px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
                }`}
              >
                Связаться с нами
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Vacancies;