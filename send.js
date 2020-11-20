require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function init() {
  const msg = {
    from: 'adityaa803@gmail.com',
    template_id: 'd-0d4d3c3a6adb49f685c75f284032c5e8',
    personalizations: [
      {
        to: 'aditya@hackerrank.com',
        subject: 'Aditya 1',
        dynamic_template_data: {
          name: 'Aditya 1 Agarwal',
        },
      },
      {
        to: 'git2adi@gmail.com',
        subject: 'Aditya 2',
        dynamic_template_data: {
          name: 'Aditya 2 Agarwal',
        },
      },
    ],
  };

  try {
    const res = await sgMail.sendMultiple(msg);
    console.log(res);
  } catch (error) {
    console.log('my-error');
    console.error(error.response.body);
  }
}

init();
