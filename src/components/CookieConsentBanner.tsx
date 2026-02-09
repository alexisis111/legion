import React, { useState, useEffect } from 'react';
import './CookieConsentBanner.css'; // Подключаем стили

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Сохраняем согласие в localStorage
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <p>
        Мы используем файлы cookie и другие технологии отслеживания для предоставления услуг,
        персонализации контента и рекламы, а также для анализа трафика. Подробнее об этом читайте в нашей{' '}
        <a href="/privacy" target="_blank" rel="noopener noreferrer">
          Политике конфиденциальности
        </a>.
      </p>
      <button onClick={handleAccept} className="accept-button">
        OK
      </button>
    </div>
  );
};

export default CookieConsentBanner;