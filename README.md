# Discord Chatgpt Bot
This Discord bot is powered by the ChatGPT API and built using Node.js. It leverages the powerful language model provided by OpenAI to create interactive and engaging conversations within Discord servers. By integrating the ChatGPT API, the bot can generate responses based on user messages, resulting in natural and contextually relevant interactions.
# Feature
  - Interactive Conversations: The bot can participate in conversations and respond to user messages in a natural and coherent manner.
  - Contextual Understanding: It utilizes the ChatGPT API's ability to understand the context of previous messages, allowing for more context-aware responses.
  - Flexible Integration: The bot can be easily integrated into any Discord server, providing an interactive chat experience to the server members.
# Prerequisites
To run the Discord ChatGPT bot, ensure you have the following prerequisites installed:
  - Node.js: Version 12.0.0 or higher.
  - Discord.js: A powerful library for interacting with the Discord API.
# Setup
1. Clone the repository to your local machine:
```shell
git clone https://github.com/dunglope/discord-chatgpt-bot.git
```
2. Navigate to the project directory:
```shel
cd discord-chatgpt-bot
```
3. Install the required dependencies (here is Nodejs, you can download then install from [here](https://nodejs.org/en/download))

when installer finish, head to your file then install dependencies
```shell
npm install nodejs
```
4. Obtain an API key for the ChatGPT API from OpenAI. You can follow the OpenAI documentation to acquire the necessary credentials.
5. Create a .env file in the project root and add the following environment variables:
```plaintext
DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
CHANNEL_ID=YOUR_CHANNEL_ID
```
Replace **YOUR_DISCORD_BOT_TOKEN** with your Discord bot token and **YOUR_OPENAI_API_KEY** with your ChatGPT API key.

Replace **CHANNEL_ID** with your channel id, that's where you can interact with bot.

6. Invite your bot to your Discord server. You can create a bot and obtain a token by following the Discord developer documentation.
7. Start the bot:
```shell
node index.js
```
# Usage
Once the bot is up and running in your Discord server, you can interact with it just by chatting with it. Prefix for bot to ignore your message is "!". Feel free to modify and extend the functionality of the bot to suit your specific needs.
# Acknowledgments
  - OpenAI for providing the ChatGPT API.
  - The creators of Discord.js for their powerful library.
  - The open-source community for their contributions to the development of Discord bots and Node.js ecosystem.
# Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
# Support
If you have any questions or need assistance, please feel free to reach out to the project maintainers by creating an issue in the repository.
