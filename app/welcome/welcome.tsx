import { useTheme } from "../contexts/ThemeContext";
import InfographicCard from "../components/InfographicCard";
import DroneImageSection from "../components/DroneImageSection";
import ImageSlider from "../components/ImageSlider";
import LicenseGallery from "../components/LicenseGallery";

import { useState } from 'react';

export function Welcome() {
  const { theme } = useTheme();

  // Пока тема не определена, можно показать заглушку или ничего не отображать
  if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
    // Если тема еще не сохранена в localStorage, значит компонент загружается впервые
    // и мы можем показать пустой div, чтобы избежать мерцания
    return <div className="py-4 px-4 min-h-screen bg-gray-50 dark:bg-gray-900" />;
  }
  const [isLicenseGalleryOpen, setIsLicenseGalleryOpen] = useState(false);
  const [selectedLicenseIndex, setSelectedLicenseIndex] = useState(0);

  const licenseImages = [
    { src: "/license_1.jpg", alt: "Свидетельство о членстве в СРО" },
    { src: "/license_1.2.jpg", alt: "Дополнительные сертификаты" },
    { src: "/license_2.jpg", alt: "Лицензия на строительные работы" }
  ];

  return (
    <main className="py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Company Advertisement Section */}
        <section className={`py-16 text-center `}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide uppercase">
                ООО «ЛЕГИОН»
              </h1>
              <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto uppercase">
                Профессиональные строительно-монтажные работы
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section - Full Width Slider */}
        <section className="relative overflow-hidden -mx-4 md:-mx-8 lg:-mx-16">
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div
                className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div
                className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          <div className="relative z-10">
            <ImageSlider
                slides={[
                  {
                    imageUrl: "https://www.npo-geostroy.ru/photos/zashchita-ot-bpla.jpg",
                    title: "Защита от беспилотников",
                    description: "Современные решения для обеспечения безопасности вашей территории",
                    alt: "Drone Protection System",
                    linkUrl: "/drone-defense",
                    showNewBadge: true
                  },
                  {
                    imageUrl: "https://rosstip.ru/images/editorjs/66/66e2f76e.webp",
                    title: "Широкий спектр услуг",
                    description: "Каталог услуг с приятными ценами",
                    alt: "Drone Shield Construction",
                    linkUrl: "/services"
                  },
                  {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1scIzO0ZTjUPIFwtA37-DScMJHeFzZYVKA&s",
                    title: "Выгодное предложение",
                    description: "Получите отличную скидку при заказе у нас",
                    alt: "Security Installation",
                    linkUrl: "/proposal"
                  }
                ]}
            />
          </div>
        </section>


        {/* Features Section */}
        <section id="features" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Наши преимущества
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                  theme === 'dark'
                    ? 'bg-blue-900/30 text-blue-400'
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Подход в работе
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <DroneImageSection
              title="Этап 1"
              subtitle="Проектирование"
              imageUrl="https://www.ecodom.su/upload/iblock/06c/4myi5r88y9qcmlpjtm16kzkpcpl7t7dp.jpg"
              altText="Drone protection system design"
            />
            <DroneImageSection
              title="Этап 2"
              subtitle="Установка"
              imageUrl="https://novosibirsk.allplans.ru/upload/iblock/a69/12-e1528823132516%20(1).jpg"
              altText="Installation of drone protection system"
            />
            <DroneImageSection
              title="Этап 3"
              subtitle="Эксплуатация"
              imageUrl="https://soyuzmash.ru/upload/iblock/203/203aedbeea7e24dc9751185f4385fe8a.jpg"
              altText="Drone protection system in operation"
            />
          </div>
        </section>

        {/* Clients Marquee */}
        <section className="py-12 ">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Наши клиенты
          </h2>
          <div className="relative overflow-hidden py-8 dark:from-gray-800 dark:to-gray-900 px-4 ">
            <div className="animate-marquee whitespace-nowrap flex absolute top-0">
              {[
                "ООО «Андритц»",
                "ООО «Дорпромгранит»",
                "ЗАО «КБР ИСТ»",
                "ООО «НТЛ Упаковка»",
                "ООО «НХТ»",
                "ЗАО «РОСТЭК-Выборг»",
                "ООО «Эссити»",
                "МБДОУ «Детский сад Каменногорска»",
                "КФ ЛО, ЛОГКУ «Каменногорский ДИ»",
                "КФ МО ВРЛО МБОУ «Каменногорский ЦО»",
                "ГБ ПОУ ЛО «Политехнический колледж» города Светогорска."
              ].map((client, index) => (
                  <div
                      key={`duplicate-${index}`}
                      className={`mx-4 inline-block px-6 py-3 rounded-lg ${
                          theme === 'dark'
                              ? 'bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 text-gray-300'
                              : 'bg-gradient-to-r from-white to-gray-100 border border-gray-200 text-gray-700'
                      }`}
                  >
                    <span className="font-medium">{client}</span>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Отзывы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`rounded-2xl p-6 shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  } flex items-center justify-center mr-4`}>
                    <span className="font-bold">ИМ</span>
                  </div>
                  <div>
                    <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Иван М.</h4>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  "Отличная система защиты! Установили за один день, теперь чувствуем себя в безопасности."
                </p>
              </div>
            ))}
          </div>
        </section>




        {/* Licenses Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Наша лицензия и сертификаты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`rounded-2xl p-6 shadow-lg ${
                  theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                      : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setIsLicenseGalleryOpen(true);
                      setSelectedLicenseIndex(0);
                    }}
                    className="focus:outline-none"
                  >
                    <img
                      src="/license_1.jpg"
                      alt="Свидетельство о членстве в СРО"
                      className="max-w-full h-auto rounded-lg border border-gray-300 cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </button>
                </div>
              </div>
              <div className={`rounded-2xl p-6 shadow-lg ${
                  theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                      : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setIsLicenseGalleryOpen(true);
                      setSelectedLicenseIndex(1);
                    }}
                    className="focus:outline-none"
                  >
                    <img
                      src="/license_1.2.jpg"
                      alt="Дополнительные сертификаты"
                      className="max-w-full h-auto rounded-lg border border-gray-300 cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </button>
                </div>
              </div>
              <div className={`rounded-2xl p-6 shadow-lg ${
                  theme === 'dark'
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                      : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setIsLicenseGalleryOpen(true);
                      setSelectedLicenseIndex(2);
                    }}
                    className="focus:outline-none"
                  >
                    <img
                      src="/license_2.jpg"
                      alt="Лицензия на строительные работы"
                      className="max-w-full h-auto rounded-lg border border-gray-300 cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* License Gallery Modal */}
        <LicenseGallery
          isOpen={isLicenseGalleryOpen}
          onClose={() => setIsLicenseGalleryOpen(false)}
          images={licenseImages}
          startIndex={selectedLicenseIndex}
        />
      </div>
    </main>
  );
}

const features = [
  {
    title: "Надежная защита",
    description: "Наша система эффективно предотвращает проникновение беспилотников на охраняемую территорию.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Простота установки",
    description: "Сборно-разборная конструкция позволяет быстро монтировать систему без специальной техники.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Долговечность",
    description: "Конструкция изготовлена из высокопрочных материалов, устойчивых к коррозии и агрессивной среде.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];
