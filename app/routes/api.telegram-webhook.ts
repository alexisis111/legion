import type { ActionFunctionArgs } from "@react-router/node";
import pkg from "@react-router/node";
const { json } = pkg;

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Call the Netlify function that handles the Telegram API call
    const netlifyFunctionUrl = '/.netlify/functions/telegram-webhook';

    const netlifyResponse = await fetch(netlifyFunctionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const netlifyResult = await netlifyResponse.json();

    if (!netlifyResponse.ok) {
      console.error('Netlify function error:', netlifyResult);
      return json({ error: netlifyResult.error || 'Failed to send message to Telegram' }, { status: netlifyResponse.status });
    }

    return json({ success: true, message: netlifyResult.message || 'Message sent to Telegram successfully' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
};