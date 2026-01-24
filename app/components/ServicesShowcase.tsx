import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router';

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  details: string[];
  imageUrl?: string;
}

const ServicesShowcase: React.FC = () => {
  const { theme } = useTheme();

  // Данные услуг на основе информации с сайта legion78.ru
  const services: Service[] = [
    {
      id: 1,
      title: "Разборка зданий и сооружений",
      description: "Демонтажные работы любой сложности с соблюдением всех норм безопасности",
      category: "Подготовительные работы",
      details: [
        "Демонтаж зданий и сооружений",
        "Удаление строительных конструкций",
        "Вывоз строительного мусора"
      ],
      imageUrl: "https://aksokol.ru/files/uploads/JCB%20%D1%81%D0%BD%D0%BE%D1%81%20%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.jpg"
    },
    {
      id: 2,
      title: "Сборка лесов",
      description: "Монтаж инвентарных и неинвентарных наружных и внутренних лесов",
      category: "Подготовительные работы",
      details: [
        "Сборка наружных лесов",
        "Сборка внутренних лесов",
        "Безопасная эксплуатация"
      ],
      imageUrl: "https://rent-lesov.ru/wp-content/uploads/2023/02/scaffolding-cube-challenge-image-for-landing-page-min-scaled.jpg"
    },
    {
      id: 3,
      title: "Подготовка строительного участка",
      description: "Комплекс мероприятий по подготовке территории к строительству",
      category: "Подготовительные работы",
      details: [
        "Очистка территории",
        "Разметка участка",
        "Подведение коммуникаций"
      ],
      imageUrl: "https://octavaland.ru/i/podgotovka-uchastka.jpg"
    },
    {
      id: 4,
      title: "Благоустройство территорий",
      description: "Комплекс работ по обустройству прилегающих территорий",
      category: "Подготовительные работы",
      details: [
        "Устройство дорожек",
        "Озеленение",
        "Монтаж малых архитектурных форм"
      ],
      imageUrl: "https://gilservis15.ru/wp-content/uploads/2017/01/blagoustroistvo.jpg"
    },
    {
      id: 5,
      title: "Изготовление металлоконструкций",
      description: "Производство металлических конструкций любой сложности",
      category: "Монтаж металлических конструкций",
      details: [
        "Изготовление по чертежам",
        "Любая сложность",
        "Контроль качества"
      ],
      imageUrl: "https://modultehno.com/upload/iblock/d6d/IMG_7487.JPG"
    },
    {
      id: 6,
      title: "Монтаж технологических трубопроводов",
      description: "Установка и ремонт технологических трубопроводов",
      category: "Монтаж металлических конструкций",
      details: [
        "Монтаж трубопроводов",
        "Ремонт систем",
        "Обвязка оборудования"
      ],
      imageUrl: "https://3yarpr.ru/upload/resize_cache/iblock/f7c/1500_1500_0/f7c35ba11152fd29615d19ee6cd00054.JPG"
    },
    {
      id: 7,
      title: "Монтаж технологических площадок",
      description: "Устройство площадок для обслуживания технологического оборудования",
      category: "Монтаж металлических конструкций",
      details: [
        "Разработка проектов",
        "Монтаж конструкций",
        "Обустройство безопасного доступа"
      ],
      imageUrl: "https://megal-ltd.ru/upload/iblock/e38/e38f3b32a745adcfa7bd4aed740e87e2.JPG"
    },
    {
      id: 8,
      title: "Антикоррозийная защита",
      description: "Защита металлических и бетонных конструкций от коррозии",
      category: "Монтаж металлических конструкций",
      details: [
        "Обработка металла",
        "Обработка бетона",
        "Применение современных материалов"
      ],
      imageUrl: "https://img.promportal.su/foto/good_fotos/46748/467488628/akz-antikorroziynaya-zaschita-teploizolyaciya-metallokonstrukciy-v-respublike-bashkortostan_foto_largest.jpg"
    },
    {
      id: 9,
      title: "Облицовочные работы",
      description: "Виды отделочных работ: облицовочные, штукатурные, малярные",
      category: "Работы по устройству каменных конструкций и отделочные работы",
      details: [
        "Облицовка плиткой",
        "Керамогранит",
        "Искусственный и натуральный камень"
      ],
      imageUrl: "https://tehno-fasad.ru/assets/images/stati/pod-klyuch/1241.jpg"
    },
    {
      id: 10,
      title: "Устройство каменных конструкций",
      description: "Устройство конструкций из кирпича и строительных блоков",
      category: "Работы по устройству каменных конструкций и отделочные работы",
      details: [
        "Кладка кирпича",
        "Устройство блочных стен",
        "Армирование конструкций"
      ],
      imageUrl: "https://kogangabions.ru/storage/images/webp/crop/720x670/tr-tl-c-br-bl/c3RvcmFnZS9hcHAvdXBsb2Fkcy9wdWJsaWMvNjdlLzNlNy82OTcvNjdlM2U3Njk3NzI3NDU4NDE3MTc2OC5qcGc=.webp"
    },
    {
      id: 11,
      title: "Опалубочные и арматурные работы",
      description: "Устройство и монтаж опалубки и арматурных каркасов",
      category: "Устройство монолитных и сборных бетонных и железобетонных конструкций",
      details: [
        "Изготовление опалубки",
        "Монтаж арматуры",
        "Контроль качества"
      ],
      imageUrl: "https://hydrotehnik.com/images/nov/c526.jpg"
    },
    {
      id: 12,
      title: "Устройство фундаментов",
      description: "Устройство и ремонт фундаментов зданий, сооружений и оборудования",
      category: "Устройство монолитных и сборных бетонных и железобетонных конструкций",
      details: [
        "Монолитные фундаменты",
        "Ремонт фундаментов",
        "Фундаменты под оборудование"
      ],
      imageUrl: "https://lh4.googleusercontent.com/proxy/RFwPbhGjbt5GETwWR11rA6FBfBahPENl0xk27I1eBs83JpG9A2iyzSWDgo8DnGIMEySSudr1mUy0J1O4jsRHF2Dx_DnaRUE_jh2hypNv"
    },
    {
      id: 13,
      title: "Монтаж сборного железобетона",
      description: "Устройство монолитных бетонных и железобетонных конструкций",
      category: "Устройство монолитных и сборных бетонных и железобетонных конструкций",
      details: [
        "Монтаж ЖБИ",
        "Монолитные работы",
        "Контроль прочности"
      ],
      imageUrl: "https://mostopora.ru/site/images/1/montazh-zhelezobetonnyh-balok.jpg"
    },
    {
      id: 14,
      title: "Теплоизоляция оборудования",
      description: "Теплоизоляционные работы для технологического оборудования",
      category: "Теплоизоляционные работы",
      details: [
        "Изоляция оборудования",
        "Энергосбережение",
        "Снижение теплопотерь"
      ],
      imageUrl: "https://static.tildacdn.com/tild3630-3537-4932-a366-646263306263/galereya_nasosy_07-2.jpg"
    },
    {
      id: 15,
      title: "Теплоизоляция трубопроводов",
      description: "Теплоизоляция технологических трубопроводов",
      category: "Теплоизоляционные работы",
      details: [
        "Изоляция трубопроводов",
        "Защита от промерзания",
        "Энергоэффективность"
      ],
      imageUrl: "https://millennium-official.ru/upload/iblock/00e/vh6mpzi5w06qa15h8r0fp78hz750jn7m.jpg"
    },
    {
      id: 16,
      title: "Земляные работы",
      description: "Земляные работы любой сложности",
      category: "Дополнительные услуги",
      details: [
        "Рытье котлованов",
        "Обратная засыпка",
        "Вывоз грунта"
      ],
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIy91Zfe7SxveXjRy_qjwJ0aAPKaGt9KyNqQ&s"
    },
    {
      id: 17,
      title: "Строительство ангаров",
      description: "Строительство ангаров для различных целей",
      category: "Дополнительные услуги",
      details: [
        "Проектирование ангаров",
        "Строительство",
        "Оборудование внутрь"
      ],
      imageUrl: "https://gk-sis.ru/assets/tpl/img/ambar.jpg"
    },
    {
      id: 18,
      title: "Грузоперевозки",
      description: "Транспортировка материалов и оборудования",
      category: "Дополнительные услуги",
      details: [
        "Перевозка материалов",
        "Доставка оборудования",
        "Специализированный транспорт"
      ],
      imageUrl: "https://gettruck.ru/Content/img/cities-img-1.png"
    },
    {
      id: 19,
      title: "Огнезащита конструкций",
      description: "Огнезащита металлических и деревянных конструкций",
      category: "Дополнительные услуги",
      details: [
        "Обработка металла",
        "Обработка дерева",
        "Соблюдение норм пожарной безопасности"
      ],
      imageUrl: "https://gosgroup.ru/userfiles/images/IMG_20190606_134002_240.jpg"
    }
  ];

  const handleOrderService = (serviceName: string) => {
    // Здесь будет логика для создания заявки на услугу
    alert(`Заявка на услугу "${serviceName}" создана! Мы свяжемся с вами в ближайшее время.`);
  };

  return (
    <div className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='12' fill='%239ca3af'%3EИзображение%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  )}
                </div>

                <div className="p-6">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {service.category}
                  </span>

                  <h3 className={`text-xl font-bold mt-4 mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {service.details.map((detail, index) => (
                      <li
                        key={index}
                        className={`flex items-start ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <span className="mr-2 text-green-500">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link
                      to={`/service/${service.id}`}
                      className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all text-center ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-white hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      Подробнее
                    </Link>

                    <button
                      onClick={() => handleOrderService(service.title)}
                      className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                      }`}
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesShowcase;