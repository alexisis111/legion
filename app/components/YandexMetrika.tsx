import { useEffect } from 'react';
import { useLocation } from 'react-router';

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: any[]) => void;
  }
}

const YandexMetrika = () => {
  const location = useLocation();

  useEffect(() => {
    // Проверяем, что ym функция доступна и мы на клиенте
    if (typeof window !== 'undefined' && window.ym) {
      // Отправляем hit при каждом изменении маршрута
      window.ym(106789634, 'hit', location.pathname, {
        title: document.title,
        referer: document.referrer,
      });
      
      // Логируем успешный вызов для отладки
      console.log('Yandex Metrika hit sent for:', location.pathname);
    } else {
      // Логируем, если функция ym недоступна
      console.log('Yandex Metrika function not available');
    }
  }, [location]);

  return null;
};

export default YandexMetrika;