import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Shield, Building2, Target, Zap, Award, Clock, Users, CheckCircle, ChevronRight, ArrowRight, MapPin, Calendar, Package, Hammer, Ruler } from 'lucide-react';
import { Link } from 'react-router';

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

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [service, setService] = useState<Service | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle background for hero
  const Particles = () => {
    const particles = Array.from({ length: 30 });
    return (
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  };

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
      imageUrl: "https://sst52.ru/images/demontazh-zdanij2.jpg"
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
      imageUrl: "https://lesavyshki.ru/photos/2/Montazh-stroitelnyh-lesov.jpg"
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
      imageUrl: "https://masheka.by/uploads/posts/2024-03/podgotovka.jpg"
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
      imageUrl: "https://субз.рф/assets/template/images/STROITELSTVO/blagoustrojstvo.jpg"
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
      imageUrl: "https://st31.stpulscen.ru/images/product/299/103/931_original.jpg"
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
      imageUrl: "https://ngirf.ru/f/services/2017/07/_595b913aef5d33.jpg"
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
      imageUrl: "https://engineering-experts.ru/upload/iblock/47b/ihhttwmxdslmwb9jzwy11u23o3z028uw.jpg"
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
      imageUrl: "https://www.kzit.ru/images/antikorrozionnaya-zashchita-metallokonstrukcij.jpg"
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
      imageUrl: "https://simterem.ru/wp-content/uploads/2025/03/otdelochnye-raboty-pod-klyuch-1.jpg"
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
      imageUrl: "https://gabioni.ru/Gabiones1-750x250.jpg"
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
      imageUrl: "https://psk-monolit.com/images/steelworkers-1029665-1280.jpg"
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
      imageUrl: "https://paritet-energo.ru/picture/slider-2017-12.png"
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
      imageUrl: "https://arenda-ekskovatora-pogruzchika24.ru/wp-content/uploads/2018/03/razrabotka-kotlovana-1024x630.jpg"
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
      imageUrl: "https://iconstr.ru/assets/components/webpgenerator/cache/images/uslugi/stroitelistvo-angarov-pw.webp"
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
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMRxioeNzhHfPhhgv_epmzWKq4uCPr4zKbA&s"
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
      imageUrl: "https://promalp-ural.ru/wp-content/uploads/2019/12/ognezashita-metallicheskih-konstrykciy.jpg"
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
    <div className="relative overflow-hidden">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6 z-20 relative">
        <Link
          to="/services"
          className={`inline-flex items-center gap-2 text-lg font-medium ${
            theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
          }`}
        >
          ← Назад к услугам
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with parallax effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900"
          style={{ y: scrollY * 0.5 }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
                 style={{ backgroundImage: `url(${service.imageUrl})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
          </div>
          <Particles />

          {/* Animated grid */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
                style={{ top: `${i * 8}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-32">
            {/* Left column - Main content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium text-white">{service.category}</span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              >
                {service.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 max-w-2xl"
              >
                {service.description}
              </motion.p>

              {/* Price */}
              {service.price && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Ruler className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Стоимость:</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{service.price}</div>
                </motion.div>
              )}

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => handleOrderService(service.title)}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Заказать услугу</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/contacts"
                  className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span>Проконсультироваться</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right column - Feature cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {service.details.slice(0, 4).map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: -10 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      <Hammer className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Включено</h3>
                      <p className="text-gray-300">{detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Service Description */}
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Описание услуги
                </h2>
                
                <div className={`rounded-2xl p-8 shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}>
                  <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {service.description}
                  </p>
                  
                  <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    Что входит в услугу:
                  </h3>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail, index) => (
                      <li 
                        key={index} 
                        className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Service Stages */}
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Этапы выполнения
                </h2>
                
                <div className={`rounded-2xl p-8 shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                }`}>
                  <ol className="relative border-l border-gray-200 space-y-4 ml-4">
                    {service.stages?.map((stage, index) => (
                      <li key={index} className="ml-6 pb-4">
                        <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ${
                          theme === 'dark'
                            ? 'bg-blue-900 text-blue-300 border border-blue-700'
                            : 'bg-blue-200 text-blue-800 border border-blue-300'
                        }`}>
                          {index + 1}
                        </span>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {stage}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Похожие услуги
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ознакомьтесь с другими услугами в этой категории
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(s => s.category === service.category && s.id !== service.id)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    {relatedService.imageUrl ? (
                      <img
                        src={relatedService.imageUrl}
                        alt={relatedService.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Building2 className="w-12 h-12 text-white opacity-50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {relatedService.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {relatedService.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {relatedService.description}
                    </p>

                    <div className="flex justify-between items-center mt-6">
                      {relatedService.price && (
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {relatedService.price}
                        </div>
                      )}
                      <Link
                        to={`/service/${relatedService.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group/link"
                      >
                        <span>Подробнее</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы заказать эту услугу?
            </h2>

            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
              Свяжитесь с нами прямо сейчас и получите консультацию от наших специалистов. 
              Мы поможем реализовать ваш проект с учетом всех требований и пожеланий.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleOrderService(service.title)}
                className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Заказать услугу</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/contacts"
                className="group inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
              >
                <span>Связаться с нами</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="mt-8 opacity-75">
              Или позвоните нам: <span className="font-bold">+7 (XXX) XXX-XX-XX</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;