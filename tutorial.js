const { WebClient } = require('@slack/web-api');
require('dotenv').config()
// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_TOKEN);

(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#eddy-testing',
      text: `Testing the storage purchase notifier!`,
    });
    console.log('Message posted!');
  } catch (error) {
    console.log(error);
  }

})();