require('dotenv').config();
const client = require('@sendgrid/client');

client.setApiKey(process.env.SENDGRID_API_KEY);

async function init() {
  const request = {
    method: 'GET',
    url: '/v3/templates/d-0d4d3c3a6adb49f685c75f284032c5e8',
  };

  try {
    const [response, body] = await client.request(request);
    console.log(body);
  } catch (error) {
    console.log('my-error');
    console.error(error.response.body);
  }
}

init();
