import React, { useEffect, useState } from 'react';

interface LicenseGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  startIndex?: number;
}

const LicenseGallery: React.FC<LicenseGalleryProps> = ({ 
  isOpen, 
  onClose, 
  images, 
  startIndex = 0 
}) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  // Обработка клавиш стрелок и Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Блокируем прокрутку фона при открытии галереи
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, images.length]);

  // Предотвращаем прокрутку галереи
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          aria-label="Закрыть"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Изображение */}
        <div className="flex justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[80vh] max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Индикатор позиции */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} из {images.length}
        </div>

        {/* Кнопки навигации */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex(prev => 
                prev === 0 ? images.length - 1 : prev - 1
              )}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
              aria-label="Предыдущее изображение"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex(prev => 
                prev === images.length - 1 ? 0 : prev + 1
              )}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
              aria-label="Следующее изображение"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Миниатюры */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto py-2 max-w-full">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                index === currentIndex 
                  ? 'border-blue-500 scale-105' 
                  : 'border-transparent opacity-70 hover:opacity-100'
              } transition-all`}
              aria-label={`Изображение ${index + 1}`}
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LicenseGallery;