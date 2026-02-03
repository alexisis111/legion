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
    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid JSON in request body' }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Missing required fields',
          required: ['name', 'email', 'message'],
          provided: Object.keys(body)
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    // Get Telegram bot token and chat ID from environment variables
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      console.error('Missing Telegram configuration:', {
        hasBotToken: !!telegramBotToken,
        hasChatId: !!telegramChatId
      });
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Telegram configuration missing',
          missing: {
            TELEGRAM_BOT_TOKEN: !telegramBotToken,
            TELEGRAM_CHAT_ID: !telegramChatId
          }
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    // Format the message
    const message = `Новое сообщение с сайта:\n\nИмя: ${body.name}\nEmail: ${body.email}\nТелефон: ${body.phone || 'Не указан'}\nСообщение: ${body.message}`;

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
      console.error('Telegram API error:', {
        status: response.status,
        statusText: response.statusText,
        telegramResponse
      });
      return {
        statusCode: response.status || 500,
        body: JSON.stringify({
          error: 'Failed to send message to Telegram',
          telegramError: telegramResponse.description || 'Unknown error',
          status: response.status
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    console.log('Message sent to Telegram successfully:', {
      messageId: telegramResponse.result?.message_id,
      chatId: telegramResponse.result?.chat?.id
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Message sent to Telegram successfully',
        messageId: telegramResponse.result?.message_id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    console.error('Unexpected error in telegram webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};

export { handler };