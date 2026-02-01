import type {Route} from "../routes/+types/drone-defense";
import {useTheme} from "../contexts/ThemeContext";
import InfographicCard from "./InfographicCard";
import DroneImageSection from "./DroneImageSection";
import ZOKVisualization from "./ZOKVisualization"; // Assuming this component exists
import React, {useState} from "react";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Защита от БПЛА - ООО «ЛЕГИОН»"},
        {name: "description", content: "Система защиты от беспилотных летательных аппаратов от ООО «ЛЕГИОН»"},
    ];
}

export default function DroneDefense() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeFullscreenModal = () => {
        setIsFullscreenModalOpen(false);
    };

    const services = [
        {
            title: "Портовые сооружения, морские вокзалы",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            )
        },
        {
            title: "Объекты газового хозяйства",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                </svg>
            )
        },
        {
            title: "Транспортная и железнодорожная инфраструктура",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            )
        },
        {
            title: "Объекты аэропортов",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            )
        },
        {
            title: "ТЭЦ, электроподстанции, объекты электроснабжения",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Резервуарные парки хранения нефти и нефтепродуктов",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            title: "Производства и склады хранения легковоспламеняющихся и взрывчатых веществ",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        },
        {
            title: "Производства и склады хранения химической промышленности",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.87-2.154-1.413-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Центры обработки информации",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            )
        },
        {
            title: "Объекты связи",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            )
        },
        {
            title: "Медицинские центры",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "Химические и биологические лаборатории",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.87-2.154-1.413-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        }
    ];

    const features = [
        {
            title: "Физическая защита",
            description: "Быстровозводимые защитные инженерные сооружения из стальных профилей с трехуровневой защитой из стальной сетки",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Отведение угрозы",
            description: "Отведение точки взрыва на безопасное расстояние от инфраструктуры с сохранением работоспособности объекта",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Антикоррозийная защита",
            description: "Все конструкции надежно защищены антикоррозийным покрытием с выполнением полного комплекса АКЗ",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        }
    ];

    const steps = [
        {
            title: "Выезд на объект",
            description: "Выезд на объект защиты для осмотра и обследования объекта"
        },
        {
            title: "Технические согласования",
            description: "Проведение технических согласований с Заказчиком"
        },
        {
            title: "Эскизный проект",
            description: "Разработка эскизного проекта. Согласование с Заказчиком"
        },
        {
            title: "Проектная документация",
            description: "Разработка проектной документации"
        },
        {
            title: "Изготовление конструкций",
            description: "Изготовление конструкций"
        },
        {
            title: "Мобилизация",
            description: "Мобилизация на объект"
        },
        {
            title: "Монтаж ЗОК",
            description: "Монтаж ЗОК"
        },
        {
            title: "Сдача и ввод в эксплуатацию",
            description: "Сдача ЗОК представителям Заказчика. Ввод в эксплуатацию"
        },
        {
            title: "Передача документации",
            description: "Передача исполнительной документации Заказчику"
        },
        {
            title: "Сопровождение",
            description: "Сопровождение в эксплуатации ЗОК"
        }
    ];

    return (
        <>
            <section id="about" className="py-16 md:py-24 bg-background text-foreground p-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Комплексные системы инженерной защиты от <span
                            className="text-blue-600 dark:text-blue-700">БПЛА</span>
                        </h1>
                        <p className="text-lg mb-8 max-w-lg text-foreground">
                            Защита промышленных объектов от атак беспилотных летательных аппаратов с массой до 400кг
                            и
                            скоростью до 200 км/ч
                        </p>
                        <button
                            onClick={openModal}
                            className="bg-blue-600 hover:bg-blue-700 text-white dark:text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Заказать систему
                        </button>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="relative">
                            <ZOKVisualization enableControls={false}/>
                            <div
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-3 py-2 rounded-lg">
                                Нажмите на иконку сверху, чтобы открыть 3D модель
                            </div>
                            <button
                                onClick={() => setIsFullscreenModalOpen(true)}
                                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                                aria-label="Открыть в полноэкранном режиме"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Модальное окно */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-card rounded-xl p-6 max-w-md w-full shadow-xl">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-foreground">Заказать систему</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-foreground hover:text-muted-foreground"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="tel:+78137840235"
                                    className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                >
                                    <div
                                        className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <span className="font-medium text-foreground">Позвонить</span>
                                </a>

                                <a
                                    href="mailto:l-legion@bk.ru"
                                    className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                >
                                    <div
                                        className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <span className="font-medium text-foreground">Отправить письмо</span>
                                </a>

                                <a
                                    href="/contacts"
                                    onClick={closeModal}
                                    className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                >
                                    <div
                                        className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                        </svg>
                                    </div>
                                    <span className="font-medium text-foreground">Заполнить форму</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Модальное окно для полноэкранного режима */}
                {isFullscreenModalOpen && (
                    <div className="fixed inset-0 bg-black z-50 flex flex-col">
                        <div className="flex justify-end p-4">
                            <button
                                onClick={closeFullscreenModal}
                                className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
                                aria-label="Закрыть"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center p-4">
                            <div className="w-full h-full max-w-6xl max-h-[80vh]">
                                <ZOKVisualization enableControls={true}/>
                            </div>
                        </div>
                        <div className="p-4 text-center text-white bg-black bg-opacity-50">
                            Покрутите модель, чтобы рассмотреть со всех сторон
                        </div>
                    </div>
                )}
            </section>

            <section id="services" className="py-16 bg-background text-foreground p-6">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Объекты, которые мы защищаем</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Наши индивидуальные решения подходят для различных типов промышленных объектов
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-white"
                            >
                                <div
                                    className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground">
                                    Надежная защита с учетом специфики эксплуатации и окружающей среды
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-muted p-6">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Принцип работы систем защиты</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Главная задача наших конструкций – предотвращение столкновения защищаемого объекта с БПЛА
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-white"
                            >
                                <div
                                    className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="process" className="py-16 bg-background text-foreground">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Как мы работаем</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Полный цикл проектирования, производства и установки систем защиты
                    </p>

                    <div className="relative">
                        {/* Вертикальная линия для десктопа */}
                        <div
                            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent transform -translate-x-1/2"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
                                >
                                    {/* Линия для мобильных и планшетов */}
                                    {index < steps.length - 1 && (
                                        <div
                                            className="lg:hidden absolute left-6 top-12 h-16 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
                                    )}

                                    {/* Номер шага */}
                                    <div className="flex-shrink-0 relative z-10">
                                        <div
                                            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Карточка шага */}
                                    <div
                                        className="lg:mx-6 mt-4 lg:mt-0 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-grow">
                                        <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>

                                    {/* Линия между карточками на десктопе */}
                                    {index < steps.length - 1 && (
                                        <div
                                            className="hidden lg:block absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform -translate-y-1/2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}