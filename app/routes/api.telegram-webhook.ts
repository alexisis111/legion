import type { ActionFunctionArgs } from "@react-router/node";
import { json } from "@react-router/node";

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

    // In a React Router + Netlify deployment, we need to call the Netlify function directly
    // The Netlify function should be accessible at the root of your domain when deployed
    const netlifyFunctionUrl = '/.netlify/functions/telegram-webhook';

    const netlifyResponse = await fetch(netlifyFunctionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Important: Clone the response before reading it as JSON
    const responseBody = await netlifyResponse.text();

    let netlifyResult;
    try {
      netlifyResult = JSON.parse(responseBody);
    } catch (e) {
      console.error('Error parsing Netlify function response:', responseBody);
      return json({ error: 'Invalid response from webhook service' }, { status: 502 });
    }

    if (!netlifyResponse.ok) {
      return json({ error: netlifyResult.error || 'Failed to send message to Telegram' }, { status: netlifyResponse.status });
    }

    return json({ success: true, message: netlifyResult.message || 'Message sent to Telegram successfully' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
};