import type {Route} from "../routes/+types/drone-defense";
import {useTheme} from "../contexts/ThemeContext";
import InfographicCard from "./InfographicCard";
import DroneImageSection from "./DroneImageSection";
import React from "react";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Защита от БПЛА - ООО «ЛЕГИОН»"},
        {name: "description", content: "Система защиты от беспилотных летательных аппаратов от ООО «ЛЕГИОН»"},
    ];
}

export default function DroneDefense() {
    const {theme} = useTheme();

    // Пока тема не определена, можно показать заглушку или ничего не отображать
    if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
        // Если тема еще не сохранена в localStorage, значит компонент загружается впервые
        // и мы можем показать пустой div, чтобы избежать мерцания
        return <div className="min-h-screen bg-gray-50 dark:bg-gray-900" />;
    }

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {/* Hero Section BPLA*/}
            <section id="overview" className={`py-16 relative overflow-hidden ${
                theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white'
                    : 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white'
            }`}>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold mb-4">Защитная ограждающая конструкция от БПЛА</h1>
                    <p className="text-xl mb-8">Эффективное решение для защиты территории от несанкционированного
                        проникновения беспилотников</p>

                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className={`rounded-2xl p-8 max-w-5xl mx-auto ${
                        theme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                            : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                    }`}>


                        <p className={`mb-8 text-center ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>Предотвращение проникновения БПЛА на охраняемую территорию с
                            использованием пространственной каркасной системы.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1  */}
                            <div
                                className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-br from-blue-900 to-indigo-900 border border-blue-700'
                                        : 'bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200'
                                }`}>
                                <div className="flex flex-col items-center text-center">
                                    <h3 className={`text-lg font-bold mb-2 ${
                                        theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
                                    }`}>Тип конструкции</h3>
                                    <p className={`font-semibold text-lg ${
                                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>Пространственная каркасная система</p>
                                </div>
                            </div>
                            {/* Card 2  */}
                            <div
                                className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border border-indigo-700'
                                        : 'bg-gradient-to-br from-indigo-50 to-purple-100 border border-indigo-200'
                                }`}>
                                <div className="flex flex-col items-center text-center">
                                    <h3 className={`text-lg font-bold mb-2 ${
                                        theme === 'dark' ? 'text-indigo-300' : 'text-indigo-800'
                                    }`}>Высота конструкции</h3>
                                    <p className={`font-semibold text-lg ${
                                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>от 7100 мм</p>
                                </div>
                            </div>
                            {/* Card 3  */}
                            <div
                                className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-br from-purple-900 to-pink-900 border border-purple-700'
                                        : 'bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200'
                                }`}>
                                <div className="flex flex-col items-center text-center">
                                    <h3 className={`text-lg font-bold mb-2 ${
                                        theme === 'dark' ? 'text-purple-300' : 'text-purple-800'
                                    }`}>Общая длина</h3>
                                    <p className={`font-semibold text-lg ${
                                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>от 17600 мм</p>
                                </div>
                            </div>
                            {/* Card 4  */}
                            <div
                                className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-br from-pink-900 to-red-900 border border-pink-700'
                                        : 'bg-gradient-to-br from-pink-50 to-red-100 border border-pink-200'
                                }`}>
                                <div className="flex flex-col items-center text-center">
                                    <h3 className={`text-lg font-bold mb-2 ${
                                        theme === 'dark' ? 'text-pink-300' : 'text-pink-800'
                                    }`}>Количество секций</h3>
                                    <p className={`font-semibold text-lg ${
                                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>от 11 секций по 1600 мм</p>
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
                            title="Скорость установки"
                            value="1 день"
                            description="Быстрая сборка без спецтехники"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            }
                        />
                        <InfographicCard
                            title="Высота ограждения"
                            value="от 7.1 м"
                            description="Эффективная защита от дронов"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"/>
                                </svg>
                            }
                        />
                        <InfographicCard
                            title="Прочность"
                            value="от 17 т"
                            description="Общая масса конструкции"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            }
                        />
                        <InfographicCard
                            title="Срок службы"
                            value="25 лет"
                            description="Гарантия при правильной эксплуатации"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                </svg>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                {/* Construction Overview */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Общее описание
                        конструкции</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                theme === 'dark'
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-4 ${
                                theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                            }`}>Стойки</h3>
                            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><span
                                className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Материал:</span> Квадратная труба 100x100x8 мм</p>
                            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><span
                                className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Длина:</span> 9400 мм</p>
                            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><span
                                className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Крепление:</span> Анкерные соединения к бетонному основанию</p>
                        </div>
                        <div
                            className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                theme === 'dark'
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-4 ${
                                theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                            }`}>Связи</h3>
                            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><span
                                className="font-medium">Материал:</span> Квадратная труба 80x80x6 мм</p>
                            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><span
                                className="font-medium">Крепление:</span> Болтовые соединения (4 болта на узел)</p>
                        </div>
                        <div
                            className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                theme === 'dark'
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                                    : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-4 ${
                                theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                            }`}>Заполнение</h3>
                            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><span
                                className="font-medium">Материал:</span> Арматурная сетка Ø5 мм, ячейка 50x50 мм</p>
                            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><span
                                className="font-medium">Размеры:</span> 1600x1800 мм</p>
                            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}><span
                                className="font-medium">Крепление:</span> Специализированный крепёж к связям</p>
                        </div>
                    </div>
                </section>

                {/* Assembly Information */}
                <section id="specifications" className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Компоновка и
                        сборка</h2>
                    <div className={`rounded-2xl p-8 shadow-lg ${
                        theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                    }`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className={`text-xl font-semibold mb-4 ${
                                    theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                                }`}>Характеристики сборки</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span
                                            className={`font-medium w-48 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Количество ярусов:</span>
                                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>3</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span
                                            className={`font-medium w-48 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Расстояние между ярусами:</span>
                                        <span
                                            className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>2000 мм</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span
                                            className={`font-medium w-48 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Тип сборки:</span>
                                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Сборно-разборная (болтовые соединения)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span
                                            className={`font-medium w-48 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Отступ от здания:</span>
                                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>1000-1300 мм</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={`text-xl font-semibold mb-4 ${
                                    theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                                }`}>Габаритные размеры</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span
                                            className={`font-medium w-48 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Общая длина:</span>
                                        <span
                                            className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>17600 мм</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span
                                            className={`font-medium w-48 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Количество секций:</span>
                                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>11</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span
                                            className={`font-medium w-48 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Ширина секции:</span>
                                        <span
                                            className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>1600 мм</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span
                                            className={`font-medium w-48 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Высота конструкции:</span>
                                        <span
                                            className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>7100 мм</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Materials and Mass */}
                <section id="materials" className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Материалы и масса
                        конструкции</h2>
                    <div className={`rounded-2xl p-8 shadow-lg ${
                        theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                    }`}>
                        <p className={`text-center mb-6 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Масса
                            указана с учётом 10% надбавки на подрезку и подгонку</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                <tr>
                                    <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Наименование</th>
                                    <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ/Марка</th>
                                    <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Длина/Размер</th>
                                    <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Масса,
                                        кг
                                    </th>
                                </tr>
                                </thead>
                                <tbody className={`divide-y ${
                                    theme === 'dark' ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'
                                }`}>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Труба
                                        100x100x8 мм
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ
                                        8639-82, сталь С245
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>310
                                        м
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>6900</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Труба
                                        80x80x6 мм
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ
                                        8639-82, сталь С245
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>570
                                        м
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>7680</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Лист
                                        8x1500x6000 мм
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>09Г2С,
                                        ГОСТ 19281-14
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>-</td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>1500</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Лист
                                        10x1500x6000 мм
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>09Г2С,
                                        ГОСТ 19281-14
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>-</td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>1390</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Арматура
                                        Ø5 мм
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>-</td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>9000
                                        м
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>320</td>
                                </tr>
                                </tbody>
                                <tfoot className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} font-bold`}>
                                <tr>
                                    <td colSpan={3}
                                        className={`px-6 py-4 text-right ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ИТОГО
                                        МАССА:
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>17790
                                        кг
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Bill of Materials */}
                <section id="drawings" className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Ведомость
                        метизов</h2>
                    <div className={`rounded-2xl p-8 shadow-lg ${
                        theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
                    }`}>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                <tr>
                                    <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Наименование</th>
                                    <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ
                                        / Характеристики
                                    </th>
                                    <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Кол-во</th>
                                </tr>
                                </thead>
                                <tbody className={`divide-y ${
                                    theme === 'dark' ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'
                                }`}>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Болт
                                        М10×1,5×55
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ
                                        7798-70
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>930</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Болт
                                        М10×1,5×150
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ
                                        7798-70
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>1120</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Гайка
                                        М10
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ
                                        5915-70
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>1120</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Шайба
                                        А10
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ
                                        6402-70
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>1120</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Шайба
                                        С10.37
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ГОСТ
                                        6958-78
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>120</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Химический
                                        анкер М24
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>—</td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>300</td>
                                </tr>
                                <tr>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Скоба
                                        П-образная 80×80 мм, М8
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Оцинкованная
                                        сталь, "Крепком"
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>85</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Drawings and Visualization */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>Чертежи и визуализация</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <DroneImageSection
                            title="Вид спереди"
                            subtitle="Масштаб 1:75"
                            imageUrl="/placeholder-construction-1.jpg"
                            altText="Front view of drone protection system"
                            linkUrl="#"
                        />
                        <DroneImageSection
                            title="Вид сверху"
                            subtitle="Масшаб 1:15"
                            imageUrl="/placeholder-construction-2.jpg"
                            altText="Top view of drone protection system"
                            linkUrl="#"
                        />
                        <DroneImageSection
                            title="Деталировка узла"
                            subtitle="Масштаб 1:40"
                            imageUrl="/placeholder-construction-3.jpg"
                            altText="Detail view of connection node"
                            linkUrl="#"
                        />
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold text-center mb-12 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                        Отзывы клиентов
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
                                        <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Иван
                                            М.</h4>
                                        <div className="flex text-yellow-400">
                                            {'★'.repeat(5)}
                                        </div>
                                    </div>
                                </div>
                                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                    "Отличная система защиты! Установили за один день, теперь чувствуем себя в
                                    безопасности."
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={`py-16 rounded-3xl my-16 ${
                    theme === 'dark'
                        ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'
                        : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-200'
                }`}>
                    <div className="max-w-3xl mx-auto text-center px-4">
                        <h2 className={`text-3xl font-bold mb-4 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                            Готовы защитить свою территорию?
                        </h2>
                        <p className={`text-xl mb-8 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            Свяжитесь с нами сегодня для получения персонализированного коммерческого предложения
                        </p>
                        <a
                            href="/proposal"
                            className={`inline-block px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                                theme === 'dark'
                                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900'
                                    : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900'
                            }`}
                        >
                            Запросить предложение
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}