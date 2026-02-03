import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  console.log('Telegram webhook called with event:', {
    httpMethod: event.httpMethod,
    headers: event.headers,
    bodyLength: event.body?.length || 0
  });

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
    // Parse the request body - handle both JSON and form data
    let body;
    const contentType = event.headers['content-type'];

    if (contentType && contentType.includes('application/json')) {
      try {
        body = JSON.parse(event.body || '{}');
        console.log('Parsed JSON body:', body);
      } catch (parseError) {
        console.error('Error parsing JSON request body:', parseError);
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid JSON in request body', details: parseError instanceof Error ? parseError.message : String(parseError) }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
      }
    } else if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
      // Parse form data
      try {
        const params = new URLSearchParams(event.body);
        body = {};
        for (const [key, value] of params.entries()) {
          body[key] = value;
        }
        console.log('Parsed form data body:', body);
      } catch (parseError) {
        console.error('Error parsing form data request body:', parseError);
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid form data in request body', details: parseError instanceof Error ? parseError.message : String(parseError) }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
      }
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Unsupported content type', contentType }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      console.log('Validation failed:', {
        hasName: !!body.name,
        hasEmail: !!body.email,
        hasMessage: !!body.message,
        providedFields: Object.keys(body)
      });

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

    console.log('Environment variables check:', {
      hasBotToken: !!telegramBotToken,
      hasChatId: !!telegramChatId,
      botTokenExists: typeof telegramBotToken !== 'undefined',
      chatIdExists: typeof telegramChatId !== 'undefined'
    });

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

    console.log('Sending message to Telegram:', {
      chatId: telegramChatId,
      messagePreview: message.substring(0, 100) + '...'
    });

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

    console.log('Telegram API response:', {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      telegramResponse
    });

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
          status: response.status,
          telegramResponse
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
        details: error instanceof Error ? error.message : String(error)
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};

export { handler };