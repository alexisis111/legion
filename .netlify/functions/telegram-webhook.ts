import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  try {
    // Parse the request body
    const body = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    // Get Telegram bot token and chat ID from environment variables
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Telegram configuration missing' }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    // Format the message
    const message = `
      Новое сообщение с сайта:
      
      Имя: ${body.name}
      Email: ${body.email}
      Телефон: ${body.phone || 'Не указан'}
      Сообщение: ${body.message}
    `.trim();

    // Send the message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const telegramResponse = await response.json();

    if (!response.ok || !telegramResponse.ok) {
      console.error('Telegram API error:', telegramResponse);
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: telegramResponse.description || 'Failed to send message to Telegram' 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message sent to Telegram successfully' 
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    console.error('Error in telegram webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};

export { handler };