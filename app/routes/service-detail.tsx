import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  details: string[];
  price?: string;
  stages?: string[];
  imageUrl?: string;
}

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [service, setService] = useState<Service | null>(null);

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
      price: "от 1500 руб/м²",
      stages: [
        "Оценка объекта и составление плана работ",
        "Подготовка территории",
        "Демонтаж конструкций",
        "Вывоз мусора",
        "Уборка территории"
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
      price: "от 120 руб/м²",
      stages: [
        "Проектирование конструкции лесов",
        "Подготовка материалов",
        "Монтаж лесов",
        "Проверка безопасности",
        "Эксплуатация и демонтаж"
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
      price: "от 500 руб/м²",
      stages: [
        "Осмотр территории",
        "Очистка от мусора и растительности",
        "Разметка участка",
        "Подведение временных коммуникаций",
        "Устройство подъездных путей"
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
      price: "от 2000 руб/м²",
      stages: [
        "Проектирование благоустройства",
        "Подготовка территории",
        "Укладка покрытий",
        "Озеленение",
        "Монтаж элементов благоустройства"
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
      price: "от 30000 руб",
      stages: [
        "Разработка конструкторской документации",
        "Подбор материалов",
        "Изготовление конструкций",
        "Контроль качества",
        "Доставка и монтаж"
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
      price: "от 1500 руб/п.м.",
      stages: [
        "Проектирование системы",
        "Подготовка материалов",
        "Монтаж трубопровода",
        "Обвязка оборудования",
        "Пусконаладочные работы"
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
      price: "от 50000 руб",
      stages: [
        "Проектирование площадки",
        "Подготовка материалов",
        "Монтаж конструкций",
        "Обустройство ограждений",
        "Сдача в эксплуатацию"
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
      price: "от 500 руб/м²",
      stages: [
        "Подготовка поверхности",
        "Обработка преобразователем ржавчины",
        "Грунтовка",
        "Нанесение защитного покрытия",
        "Контроль качества"
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
      price: "от 1200 руб/м²",
      stages: [
        "Подготовка основания",
        "Разметка и выравнивание",
        "Укладка облицовочного материала",
        "Затирка швов",
        "Финальная уборка"
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
      price: "от 2000 руб/м³",
      stages: [
        "Подготовка раствора",
        "Выполнение кладки",
        "Армирование рядов",
        "Контроль геометрии",
        "Завершающая отделка"
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
      price: "от 2500 руб/м³",
      stages: [
        "Проектирование опалубки",
        "Изготовление элементов опалубки",
        "Монтаж арматурного каркаса",
        "Установка опалубки",
        "Проверка перед бетонированием"
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
      price: "от 5000 руб/м³",
      stages: [
        "Разметка осей фундамента",
        "Подготовка котлована",
        "Устройство подушки",
        "Монтаж опалубки и арматуры",
        "Бетонирование и уход за бетоном"
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
      price: "от 3000 руб/т",
      stages: [
        "Разработка проекта монтажа",
        "Подготовка техники",
        "Доставка ЖБИ",
        "Монтаж конструкций",
        "Крепление и выверка"
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
      price: "от 1000 руб/м²",
      stages: [
        "Осмотр оборудования",
        "Подбор теплоизоляционных материалов",
        "Подготовка поверхностей",
        "Монтаж теплоизоляции",
        "Обшивка защитным покрытием"
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
      price: "от 800 руб/п.м.",
      stages: [
        "Осмотр трубопровода",
        "Подбор теплоизоляционных материалов",
        "Подготовка поверхностей",
        "Монтаж теплоизоляции",
        "Обшивка защитным покрытием"
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
      price: "от 1000 руб/м³",
      stages: [
        "Разметка участка",
        "Рытье котлованов и траншей",
        "Обратная засыпка",
        "Вывоз грунта",
        "Выравнивание территории"
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
      price: "от 1000000 руб",
      stages: [
        "Проектирование конструкции",
        "Подготовка фундамента",
        "Монтаж каркаса",
        "Обшивка сэндвич-панелями",
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
      price: "от 1000 руб/час",
      stages: [
        "Оценка объема груза",
        "Подбор транспорта",
        "Погрузка",
        "Транспортировка",
        "Разгрузка"
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
      price: "от 600 руб/м²",
      stages: [
        "Осмотр конструкций",
        "Подготовка поверхностей",
        "Нанесение огнезащитного состава",
        "Контроль толщины покрытия",
        "Сдача актов скрытых работ"
      ],
      imageUrl: "https://gosgroup.ru/userfiles/images/IMG_20190606_134002_240.jpg"
    }
  ];

  useEffect(() => {
    const serviceId = parseInt(id || '0');
    const foundService = services.find(s => s.id === serviceId);
    if (foundService) {
      setService(foundService);
    } else {
      // Если услуга не найдена, перенаправляем на страницу услуг
      navigate('/services');
    }
  }, [id, navigate]);

  const handleOrderService = (serviceName: string) => {
    // Здесь будет логика для создания заявки на услугу
    alert(`Заявка на услугу "${serviceName}" создана! Мы свяжемся с вами в ближайшее время.`);
  };

  if (!service) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Загрузка...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/services')}
          className={`mb-6 flex items-center text-lg font-medium ${
            theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
          }`}
        >
          ← Назад к услугам
        </button>

        <div className={`rounded-2xl overflow-hidden shadow-xl ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
            : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
        }`}>
          {/* Изображение услуги */}
          <div className="h-96 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
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

          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'
              }`}>
                {service.category}
              </span>
              
              {service.price && (
                <div className={`text-lg font-bold ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>
                  Цена: {service.price}
                </div>
              )}
            </div>

            <h1 className={`text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {service.title}
            </h1>

            <p className={`text-lg mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {service.description}
            </p>

            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Что входит в услугу:
              </h2>
              <ul className="space-y-3">
                {service.details.map((detail, index) => (
                  <li
                    key={index}
                    className={`flex items-start ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <span className="mr-2 text-green-500 text-xl">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.stages && service.stages.length > 0 && (
              <div className="mb-8">
                <h2 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Этапы выполнения:
                </h2>
                <ol className="relative border-l border-gray-200 space-y-4 ml-4">
                  {service.stages.map((stage, index) => (
                    <li key={index} className="ml-6 pb-4">
                      <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${
                        theme === 'dark' 
                          ? 'bg-blue-900 text-blue-300 border border-blue-700' 
                          : 'bg-blue-200 text-blue-800 border border-blue-300'
                      }`}>
                        {index + 1}
                      </span>
                      <p className={`${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {stage}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="mt-10">
              <button
                onClick={() => handleOrderService(service.title)}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                }`}
              >
                Заказать услугу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;