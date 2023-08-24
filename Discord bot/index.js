require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

// Create a new Discord client
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

// Event triggered when the bot is ready
client.on('ready', () => {
    console.log("bot is online!");
});

// Create an OpenAI configuration using the API key from .env file
const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

// Event triggered when a message is created
client.on('messageCreate', async (message) => {
    try {
    if (message.author.bot) return;
    if (message.channel.id !== process.env.CHANNEL_ID) return;
    if (message.content.startsWith('.')) return;

    // Build conversation log by fetching previous messages in the channel
    let conversationLog = [{ role: 'system', content: "Just chilling." }];

    await message.channel.sendTyping();

    let prevMessages = await message.channel.messages.fetch({ limit: 15 });
    prevMessages.reverse();

    prevMessages.forEach((msg) => {
        if (message.content.startsWith('!')) return;
        if (msg.author.id !== client.user.id && message.author.bot) return;
        if (msg.author.id !== message.author.id) return;

        conversationLog.push({
            role: 'user',
            content: msg.content,
        });
    });

    // Generate a response
    const result = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: conversationLog,
    });

    let response = result.data.choices[0].message.content;
    if (response.length > 2000) {
        response = response.slice(0, 2000); // Truncate the response to 2000 characters
    }

    // Reply to the message with the generated response
    message.reply(response);
    } catch (error) {
        console.error('An error occurred:', error);

        // Send the error message to the same channel
        const errorMessage = `An error occurred: ${error.message}`;
        message.channel.send(errorMessage);
    }
});

// Handle any unhandled Promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle any uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

// Log in the bot using the token from .env file
client.login(process.env.TOKEN);
