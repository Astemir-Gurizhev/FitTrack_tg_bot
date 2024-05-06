const TelegramApi = require("node-telegram-bot-api");

const token = "6349563797:AAGkGlyD7bJMOitAlc1SxmEl27JlPuWFUaE";

const bot = new TelegramApi(token, { polling: true });



const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начать тренировку'}
    ])
    
    bot.on("message", async msg => {
      const text = msg.text;
      const chatId = msg.chat.id;
    
      if(text === '/start') {
        return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/25d/f5a/25df5a18-cf79-4b3e-a2f1-4862771ebd1c/10.webp')
      }
      
      return bot.sendMessage(chatId, 'Я вас не понимаю. Откройте меню, чтобы узнать все существующие команды!')

    });
} 

start()