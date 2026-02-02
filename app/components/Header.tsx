import React, { useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-40 border-b ${
      theme === 'dark'
        ? 'bg-gray-900 border-gray-800'
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/Logo-1.png" alt="Logo" className="w-auto h-12 lg:h-20 object-contain" />
          </Link>

          {/* Desktop Navigation - Hidden on screens < 1285px */}
          <nav className="hidden max-xl:hidden xl:flex space-x-8">
            <Link
              to="/"
              className={`font-medium hover:text-blue-600 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Главная
            </Link>
            <Link
              to="/company"
              className={`font-medium hover:text-blue-600 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              О компании
            </Link>
            <Link
              to="/services"
              className={`font-medium hover:text-blue-600 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Услуги
            </Link>
            <Link
              to="/portfolio"
              className={`font-medium hover:text-blue-600 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Портфолио
            </Link>
            <Link
              to="/contacts"
              className={`font-medium hover:text-blue-600 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Контакты
            </Link>
            <Link
              to="/vacancies"
              className={`font-medium hover:text-blue-600 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Вакансии
            </Link>
            <Link
              to="/drone-defense"
              className={`font-medium hover:text-blue-600 relative ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Защита от БПЛА
              <span className={`absolute -top-2 -right-2 transform translate-x-1/2 -translate-y-1/2 px-2 py-1 text-xs font-bold rounded-full animate animate-pulse ${
                theme === 'dark' ? 'bg-red-500 text-white' : 'bg-red-600 text-white'
              }`}>
                NEW
              </span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Гамбургер-меню для экранов < 1285px */}
            <div className="max-xl:block hidden">
              <button
                  onClick={toggleMenu}
                  className={`p-2 rounded-md ${
                      theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                )}
              </button>
            </div>


            <button
                onClick={toggleTheme}
                className={`relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none ${
                    theme === 'dark'
                        ? 'bg-cyan-900 text-cyan-200 focus-visible:ring-cyan-600'
                        : 'bg-slate-700 text-slate-400 focus-visible:ring-slate-500'
                }`}
                aria-label={theme === 'dark' ? 'Disable dark mode' : 'Enable dark mode'}
            >
              <span className="sr-only">{theme === 'dark' ? 'Disable dark mode' : 'Enable dark mode'}</span>
              <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className={`transform transition-transform ${
                      theme === 'dark' ? 'scale-100 duration-300' : 'scale-0 duration-500'
                  }`}
              >
                <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className={`ml-3.5 transform transition-transform ${
                      theme === 'dark' ? 'scale-0 duration-500' : 'scale-100 duration-300'
                  }`}
              >
                <path
                    d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
              </svg>
              <span
                  className={`absolute top-0.5 left-0.5 rounded-full flex items-center justify-center transition duration-500 transform ${
                      theme === 'dark'
                          ? 'bg-white w-8 h-8 translate-x-[2.625rem]'
                          : 'bg-white w-8 h-8 translate-x-1'
                  }`}
              >
                <svg
                    width="24"
                    height="24"
                    fill="none"
                    aria-hidden="true"
                    className={`flex-none transition duration-500 transform ${
                        theme === 'dark'
                            ? 'text-cyan-500 opacity-0 scale-0'
                            : 'text-slate-700 opacity-100 scale-100'
                    }`}
                >
                  <path
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  ></path>
                  <path
                      d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                    width="24"
                    height="24"
                    fill="none"
                    aria-hidden="true"
                    className={`flex-none -ml-6 transition duration-500 transform ${
                        theme === 'dark'
                            ? 'text-slate-700 opacity-100 scale-100'
                            : 'text-slate-700 opacity-0 scale-0'
                    }`}
                >
                  <path
                      d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>

            <Link
                to="/proposal"
                className={`hidden max-xl:hidden xl:inline-block px-4 py-2 rounded-lg font-medium ${
                    theme === 'dark'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              Получить предложение
            </Link>
          </div>
        </div>

        {/* Мобильное меню для экранов < 1285px */}
        {isMenuOpen && (
            <div className="max-xl:block hidden mt-4 py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link
                    to="/"
                    className={`font-medium hover:text-blue-600 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="/company"
                className={`font-medium hover:text-blue-600 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </Link>
              <Link
                to="/services"
                className={`font-medium hover:text-blue-600 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link
                to="/portfolio"
                className={`font-medium hover:text-blue-600 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Портфолио
              </Link>
              <Link
                to="/contacts"
                className={`font-medium hover:text-blue-600 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Link
                to="/vacancies"
                className={`font-medium hover:text-blue-600 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Вакансии
              </Link>
              <Link
                to="/drone-defense"
                className={`font-medium hover:text-blue-600 relative ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Защита от БПЛА
                <span className={`absolute -top-2 -right-2 transform translate-x-1/2 -translate-y-1/2 px-2 py-1 text-xs font-bold rounded-full animate animate-pulse ${
                  theme === 'dark' ? 'bg-red-500 text-white' : 'bg-red-600 text-white'
                }`}>
                  NEW
                </span>
              </Link>
              <Link
                to="/proposal"
                className={`px-4 py-2 rounded-lg font-medium ${
                  theme === 'dark'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Получить предложение
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;