import React from 'react';
import type { Route } from "./+types/profile";
import { useTheme } from '../contexts/ThemeContext';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Профиль - ЛЕГИОН, строительная компания" },
    { name: "description", content: "Личный кабинет пользователя на сайте ООО «ЛЕГИОН»" },
  ];
}

const ProfilePage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className={`rounded-2xl p-8 shadow-xl ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
            : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
        }`}>
          <div className="text-center">
            <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center mb-6" />
            
            <h1 className={`text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Личный кабинет
            </h1>
            
            <p className={`text-lg mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Страница профиля находится в разработке
            </p>
            
            <div className={`inline-block px-6 py-3 rounded-lg font-medium ${
              theme === 'dark'
                ? 'bg-blue-900/30 text-blue-400'
                : 'bg-blue-100 text-blue-800'
            }`}>
              Coming Soon
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className={`text-xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Возможности, которые скоро появятся:
            </h2>
            
            <ul className="space-y-4">
              {[
                "Просмотр и редактирование личных данных",
                "История заказанных услуг",
                "Сохраненные контакты и адреса",
                "Настройки уведомлений",
                "Избранные услуги"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span className="mr-3 text-green-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;