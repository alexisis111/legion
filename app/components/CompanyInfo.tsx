import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import InfographicCard from './InfographicCard';
import DroneImageSection from './DroneImageSection';

const CompanyInfo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section id="overview" className={`py-16 relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white'
          : 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white'
      }`}>
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">ООО «ЛЕГИОН»</h1>
          <p className="text-xl mb-8">Строительно-монтажная компания</p>
          <div className={`rounded-2xl p-8 max-w-5xl mx-auto ${
              theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
          }`}>
            <p className={`mb-8 text-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Занимаемся строительством, реконструкцией и ремонтом промышленных,
              коммерческих и жилых объектов в Выборгском районе Ленинградской области.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 - Founded */}
              <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  theme === 'dark'
                      ? 'bg-gradient-to-br from-blue-900 to-indigo-900 border border-blue-700'
                      : 'bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200'
              }`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 p-3 rounded-full ${
                      theme === 'dark' ? 'bg-blue-800/50' : 'bg-blue-200'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
                  }`}>Основана</h3>
                  <p className={`font-semibold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>В 2012 году</p>
                </div>
              </div>

              <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  theme === 'dark'
                      ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border border-indigo-700'
                      : 'bg-gradient-to-br from-indigo-50 to-purple-100 border border-indigo-200'
              }`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 p-3 rounded-full ${
                      theme === 'dark' ? 'bg-indigo-800/50' : 'bg-indigo-200'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-indigo-300' : 'text-indigo-800'
                  }`}>Специализация</h3>
                  <p className={`font-semibold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Стр-во и ремонт</p>
                </div>
              </div>

              <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  theme === 'dark'
                      ? 'bg-gradient-to-br from-purple-900 to-pink-900 border border-purple-700'
                      : 'bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200'
              }`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 p-3 rounded-full ${
                      theme === 'dark' ? 'bg-purple-800/50' : 'bg-purple-200'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-purple-300' : 'text-purple-800'
                  }`}>География</h3>
                  <p className={`font-semibold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>ЛО, РФ</p>
                </div>
              </div>

              <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  theme === 'dark'
                      ? 'bg-gradient-to-br from-pink-900 to-red-900 border border-pink-700'
                      : 'bg-gradient-to-br from-pink-50 to-red-100 border border-pink-200'
              }`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 p-3 rounded-full ${
                      theme === 'dark' ? 'bg-pink-800/50' : 'bg-pink-200'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-pink-300' : 'text-pink-800'
                  }`}>Членство</h3>
                  <p className={`font-semibold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>СРО АССО</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfographicCard
              title="Опыт"
              value="12 лет"
              description="На рынке с 2012 года"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <InfographicCard
              title="Объекты"
              value="+60%"
              description="Рост за последние 6 лет"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <InfographicCard
              title="Гарантия"
              value="2-5 лет"
              description="На все виды работ"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <InfographicCard
              title="СРО"
              value="АССО «СК ЛО»"
              description="Членство в саморегулируемой организации"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* History Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>История компании</h2>
          <div className={`rounded-2xl p-8 shadow-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
          }`}>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              ООО «ЛЕГИОН» - строительно-монтажная организация, занимающаяся строительством, реконструкцией и ремонтом промышленных, коммерческих и жилых объектов в Выборгском районе Ленинградской области. Компания работает с 12 ноября 2012 года.
            </p>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              За 6 лет объемы производства выросли на 60 процентов
            </p>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Специализируется на крупных проектах
            </p>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Является членом СРО - Ассоциации «СК ЛО» (СРО-С-280-20062017)
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Миссия и приоритеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Кадровая политика",
                description: "К выполнению работ допускаются профильные специалисты с опытом в конкретном направлении"
              },
              {
                title: "Курс на инновации",
                description: "Мастера всегда в курсе новейших технологий и предлагают лучшие решения"
              },
              {
                title: "Ответственность",
                description: "Построенные объекты рассчитаны на десятилетия эксплуатации без капитального ремонта"
              },
              {
                title: "Автономность",
                description: "Всё спецоборудование, транспорт и инструменты являются собственностью компании"
              },
              {
                title: "Безупречное качество",
                description: "Акты выполнения работ сопровождаются фото- и видеоматериалами"
              }
            ].map((priority, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                }`}>{priority.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {priority.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Основные направления деятельности</h2>
          <div className={`rounded-2xl p-8 shadow-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
          }`}>
            <ul className="space-y-3">
              {[
                "Строительство, реконструкция и ремонт различных объектов",
                "Изготовление и монтаж металлоконструкций (ангары, склады, торговые центры)",
                "Все виды строительно-ремонтных работ от рытья котлованов до внутренней отделки",
                "Прокладка коммуникаций",
                "Установка, ремонт и обслуживание технологического оборудования"
              ].map((service, index) => (
                <li
                  key={index}
                  className={`flex items-start ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span className="mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Подробный перечень услуг</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Подготовительные работы",
                services: [
                  "Разборка зданий и сооружений, демонтаж оборудования",
                  "Сборка инвентарных и неинвентарных наружных и внутренних лесов",
                  "Подготовка строительного участка",
                  "Благоустройство территорий"
                ]
              },
              {
                title: "Монтаж металлических конструкций",
                services: [
                  "Изготовление металлоконструкций любой сложности",
                  "Монтаж и ремонт технологических трубопроводов и оборудования",
                  "Монтаж технологических площадок обслуживания",
                  "Антикоррозийная защита металлических и бетонных конструкций"
                ]
              },
              {
                title: "Работы по устройству каменных конструкций и отделочные работы",
                services: [
                  "Виды отделочных работ: облицовочные, штукатурные, малярные",
                  "Устройство конструкций из кирпича и строительных блоков"
                ]
              },
              {
                title: "Устройство монолитных и сборных бетонных и железобетонных конструкций",
                services: [
                  "Опалубочные и арматурные работы",
                  "Устройство и ремонт фундаментов зданий, сооружений и фундаментов технологического оборудования",
                  "Устройство монолитных бетонных и железобетонных конструкций",
                  "Монтаж конструкций из сборного железобетона"
                ]
              },
              {
                title: "Теплоизоляционные работы",
                services: [
                  "Теплоизоляция технологического оборудования",
                  "Теплоизоляция технологических трубопроводов"
                ]
              },
              {
                title: "Дополнительные услуги",
                services: [
                  "Земляные работы любой сложности",
                  "Работы по устройству и ремонту наружных и внутренних инженерных сетей, коммуникаций и оборудования",
                  "Строительство ангаров",
                  "Изготовление уплотнительных фланцевых прокладок",
                  "Грузоперевозки",
                  "Ремонт и устройство пожарных трубопроводов",
                  "Огнезащита металлических и деревянных конструкций"
                ]
              }
            ].map((category, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                }`}>{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className={`flex items-start ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Особенности работы</h2>
          <div className={`rounded-2xl p-8 shadow-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
          }`}>
            <ul className="space-y-3">
              {[
                "Гарантия: от 2 до 5 лет в зависимости от типа сооружения",
                "Стандарты: 100% соблюдение СНиП, ГОСТ, отраслевых норм",
                "Доступные цены: ангары от 3000 рублей/м², металлоконструкции — от 17 тыс. рублей/тонну",
                "Прием заказов на строительство, ремонт и реконструкцию объектов по проекту заказчика",
                "Возможны варианты сотрудничества: полная или частичная предоплата, оплата по факту по договоренности",
                "Полный цикл: все виды строительно-ремонтных и монтажных работ"
              ].map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Geography Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>География деятельности</h2>
          <div className={`rounded-2xl p-8 shadow-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
          }`}>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Компания работает в Выборгском районе Ленинградской области, а также на Северо-Западе России.
            </p>
          </div>
        </section>

        {/* Special Assessment Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Специальная оценка условий труда</h2>
          <div className={`rounded-2xl p-8 shadow-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
          }`}>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Компания провела специальную оценку условий труда на своих рабочих местах с участием различных экспертов:
            </p>
            <ul className="space-y-2">
              {[
                "Чалый Александр Александрович (№ в реестре 3428)",
                "Анохина Любовь Юрьевна (№ в реестре 5196)",
                "Серогодская Мария Александровна (№ в реестре 5498)",
                "Пелагеечева Анастасия Петровна (№ в реестре 4853)",
                "Вольнова Анна Сергеевна (№ в реестре 6004)"
              ].map((expert, index) => (
                <li
                  key={index}
                  className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                >
                  {expert}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompanyInfo;