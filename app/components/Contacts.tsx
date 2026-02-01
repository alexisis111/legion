import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contacts: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className={`py-16 rounded-2xl mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white'
            : 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white'
        }`}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-xl">Свяжитесь с нами удобным способом</p>
          </div>
        </section>

        <main className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Контактная информация</h2>
              
              <div className={`rounded-2xl p-8 shadow-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}>
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                    }`}>Адрес</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      188992, Ленинградская обл.,<br />
                      Выборгский район, г. Светогорск,<br />
                      ул. Максима Горького, д. 7
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                    }`}>Телефоны</h3>
                    <ul className="space-y-2">
                      <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                        <span className="font-medium">Телефон/факс:</span> 8 (81378) 40-235
                      </li>
                      <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                        <span className="font-medium">Генеральный директор:</span> +7 931 247-08-88
                      </li>
                      <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                        <span className="font-medium">Отдел снабжения:</span> +7 921 340 36 16
                      </li>
                      <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                        <span className="font-medium">Тендерный отдел:</span> +7 921 879-39-26
                      </li>
                      <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                        <span className="font-medium">Отдел кадров:</span> +7 921 591-65-06
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                    }`}>Email</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      info@legion78.ru
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                    }`}>Режим работы</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      Обратный звонок доступен в будние дни с 11:00 до 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Обратная связь</h2>
              
              <div className={`rounded-2xl p-8 shadow-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
              }`}>
                <FormComponent theme={theme} />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <section className="mt-16">
            <h2 className={`text-3xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Как нас найти</h2>
            
            <div className={`rounded-2xl overflow-hidden shadow-lg ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
            }`}>
              <div className="h-96 flex items-center justify-center">
                <div className={`text-center p-8 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                  <p>Карта с расположением офиса</p>
                  <p className="mt-2">188992, Ленинградская обл., Выборгский район, г. Светогорск, ул. Максима Горького, д. 7</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

// Form Component
const FormComponent: React.FC<{ theme: string }> = ({ theme }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if consent checkbox is checked
    const consentCheckbox = document.getElementById('consent') as HTMLInputElement;
    if (!consentCheckbox.checked) {
      setSubmitStatus({
        type: 'error',
        message: 'Пожалуйста, дайте согласие на обработку персональных данных'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/telegram-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Сообщение успешно отправлено!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        consentCheckbox.checked = false;
      } else {
        throw new Error(result.error || 'Ошибка при отправке сообщения');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Ошибка при отправке сообщения'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={`block mb-2 font-medium ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>Ваше имя</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg ${
            theme === 'dark'
              ? 'bg-gray-700 text-white border-gray-600'
              : 'bg-white text-gray-900 border-gray-300'
          } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          placeholder="Введите ваше имя"
        />
      </div>

      <div>
        <label htmlFor="email" className={`block mb-2 font-medium ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg ${
            theme === 'dark'
              ? 'bg-gray-700 text-white border-gray-600'
              : 'bg-white text-gray-900 border-gray-300'
          } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          placeholder="Введите ваш email"
        />
      </div>

      <div>
        <label htmlFor="phone" className={`block mb-2 font-medium ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>Телефон</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg ${
            theme === 'dark'
              ? 'bg-gray-700 text-white border-gray-600'
              : 'bg-white text-gray-900 border-gray-300'
          } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          placeholder="Введите ваш телефон"
        />
      </div>

      <div>
        <label htmlFor="message" className={`block mb-2 font-medium ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>Сообщение</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={`w-full px-4 py-3 rounded-lg ${
            theme === 'dark'
              ? 'bg-gray-700 text-white border-gray-600'
              : 'bg-white text-gray-900 border-gray-300'
          } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          placeholder="Введите ваше сообщение"
        ></textarea>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          className="mt-1 mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="consent" className={`text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Я даю согласие на обработку персональных данных в соответствии с{' '}
          <a href="#" className="text-blue-600 hover:underline">политикой конфиденциальности</a>
        </label>
      </div>

      {submitStatus && (
        <div className={`p-4 rounded-lg ${
          submitStatus.type === 'success'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-4 rounded-lg font-bold text-lg transition-all ${
          isSubmitting
            ? 'opacity-70 cursor-not-allowed'
            : 'hover:opacity-90'
        } ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
            : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
        }`}
      >
        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
      </button>
    </form>
  );
};

export default Contacts;