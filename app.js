require('dotenv').config();

// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Listen to messages in the channel containing
app.message(/(bug|issue|reproduce|complain|replicate)/i, async ({ message, say, context }) => {
  
  if (message.thread_ts && message.thread_ts !== message.ts) {
    // Ignore thread messages
    return;
  }

  if (/feedback/i.test(message.text)) {
    // If it contains "feedback", do nothing
    return;
  }
    
  try {
    // Reply to the message in a thread
    await say({
      text: 'Oops, it seems you found a bug 🐞! Please use the Product Bugs Report workflow. Thanks! 🙌',
      thread_ts: message.ts,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Oops, it seems you found a bug 🐞! Please use the Product Bugs Report workflow. Thanks! 🙌'
          },
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: '▶️  Report Bug',
              },
              "style": "primary",
              url: 'https://slack.com/shortcuts/Ft074LRBHCE6/8e9a1ef94c02a74bbb6e2aee43b22d87',
              action_id: 'start_workflow'
            }
          ]
        }
      ]
    });
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
