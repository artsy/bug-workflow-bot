# Bug Workflow Bot
This bot helps improve Artsy’s Slack Product Bug Report workflow. It nudges users to use the Product Bugs Report Slack workflow when reporting bugs in the instead of just sending plain messages.

# How to develop
## Meta
- **Slack App Link:** https://api.slack.com/apps/A07DNP8NB40
- **Slack Request URL:** https://product-bugs-report-workflow-bot.artsy.net/slack/events
## Steps
- Make a `.env` file with the contents of `Slackbot bug-workflow-bot tokens` on 1Password.
- Run `yarn dev` to run the bot locally.
- Run `yarn ngrok` to expose the bot to the internet.
- Copy the first url from ngrok output, something like `https://14c3-108-54-246-210.ngrok.io -> http://localhost:8080`, so take the `https://14c3-108-54-246-210.ngrok.io` part.
- Go to https://api.slack.com/apps/A013FSQNV96/event-subscriptions and paste the link in the `Request URL` field, appending `/slack/events`, so in our example, `https://14c3-108-54-246-210.ngrok.io/slack/events`.
- Click `Save Changes` at the bottom of the page.
- Make sure to put the previous endpoint for Slack back in that `Request URL` field.
- Click `Save Changes` at the bottom of the page.