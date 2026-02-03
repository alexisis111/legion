import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  console.log('=== TELEGRAM WEBHOOK STARTED ===');
  console.log('Event details:', {
    httpMethod: event.httpMethod,
    path: event.path,
    headers: event.headers,
    body: event.body ? event.body.substring(0, 200) + '...' : 'No body',
  });

  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    let body: any;
    
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Request body is empty' }),
      };
    }

    // Determine content type and parse accordingly
    const contentType = event.headers['content-type'] || '';
    
    if (contentType.includes('application/json')) {
      try {
        body = JSON.parse(event.body);
        console.log('Successfully parsed JSON body:', body);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ 
            error: 'Invalid JSON format',
            details: parseError instanceof Error ? parseError.message : String(parseError)
          }),
        };
      }
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      try {
        const params = new URLSearchParams(event.body);
        body = {};
        for (const [key, value] of params.entries()) {
          body[key] = value;
        }
        console.log('Successfully parsed form data body:', body);
      } catch (parseError) {
        console.error('Form data parse error:', parseError);
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ 
            error: 'Invalid form data format',
            details: parseError instanceof Error ? parseError.message : String(parseError)
          }),
        };
      }
    } else {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Unsupported content type',
          received: contentType
        }),
      };
    }

    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Missing required fields',
          missing: missingFields,
          received: Object.keys(body)
        }),
      };
    }

    // Get Telegram credentials from environment
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    console.log('Environment check:', {
      tokenExists: !!telegramBotToken,
      tokenLength: telegramBotToken?.length,
      chatIdExists: !!telegramChatId,
      chatId: telegramChatId ? `${telegramChatId.substring(0, 3)}...` : 'missing'
    });

    if (!telegramBotToken || !telegramChatId) {
      console.error('Missing Telegram configuration:', {
        TELEGRAM_BOT_TOKEN: !!telegramBotToken,
        TELEGRAM_CHAT_ID: !!telegramChatId
      });
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Server configuration error',
          message: 'Telegram credentials not configured'
        }),
      };
    }

    // Format the message for Telegram
    const telegramMessage = `
📨 *Новое сообщение с сайта*

👤 *Имя:* ${body.name}
📧 *Email:* ${body.email}
📱 *Телефон:* ${body.phone || 'Не указан'}

💬 *Сообщение:*
${body.message}

🕒 *Время:* ${new Date().toLocaleString('ru-RU')}
`;

    console.log('Prepared Telegram message:', telegramMessage);

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    
    console.log('Sending to Telegram API:', {
      url: `https://api.telegram.org/bot${telegramBotToken.substring(0, 10)}.../sendMessage`,
      chatId: telegramChatId
    });

    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    const responseData = await telegramResponse.json();
    
    console.log('Telegram API response:', {
      status: telegramResponse.status,
      ok: telegramResponse.ok,
      response: responseData
    });

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', responseData);
      return {
        statusCode: telegramResponse.status,
        headers,
        body: JSON.stringify({
          error: 'Failed to send to Telegram',
          telegramError: responseData.description || 'Unknown Telegram error',
          details: responseData
        }),
      };
    }

    console.log('=== MESSAGE SENT SUCCESSFULLY ===');
    console.log('Message ID:', responseData.result?.message_id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Message sent successfully',
        messageId: responseData.result?.message_id
      }),
    };

  } catch (error) {
    console.error('=== UNEXPECTED ERROR ===');
    console.error('Error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
    };
  }
};

export { handler };