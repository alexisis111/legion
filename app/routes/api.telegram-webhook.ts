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

    // Forward the request to the Netlify function
    // In production, this will call the deployed Netlify function
    // In development, you might need to run the function locally or mock it
    const webhookUrl = process.env.NODE_ENV === 'production'
      ? `${process.env.DEPLOY_URL || process.env.URL || ''}/.netlify/functions/telegram-webhook`
      : 'http://localhost:8888/.netlify/functions/telegram-webhook'; // Default for local development

    const netlifyResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const netlifyResult = await netlifyResponse.json();

    if (!netlifyResponse.ok) {
      return json({ error: 'Failed to send message to Telegram' }, { status: 500 });
    }

    return json({ success: true, message: 'Message sent to Telegram successfully' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
};