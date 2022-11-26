const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "<token>";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

function format(seconds) {
  function pad(s) {
    return (s < 10 ? "0" : "") + s;
  }
  var hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor((seconds % (60 * 60)) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + "h:" + pad(minutes) + "m:" + pad(seconds) + "s";
}

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// /start
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  await bot.sendVideo(
    chatId,
    "https://telegra.ph/file/f6a3bec9539bfdf7ed641.mp4",
    {
      caption: `────「 𝙴𝚖𝚒𝚕𝚒𝚊 」────\nやあ 𝙾𝚑𝚊𝚢𝚘 𝙳𝚊𝚛𝚕𝚒𝚗𝚐 SOME1HING\n𝙸'𝚖 𝙴𝚖𝚒𝚕𝚒𝚊 𝙰𝚗 𝚄𝚝𝚜𝚞𝚔𝚞𝚜𝚑𝚒𝚒\n𝙰𝚍𝚟𝚊𝚗𝚌𝚎𝚍 𝙶𝚛𝚘𝚞𝚙 𝙼𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝 𝚁𝚘𝚋𝚘𝚝\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n➢   𝚂𝚎𝚛𝚟𝚎𝚛 𝚄𝚙𝚝𝚒𝚖𝚎 :- ${format(
        process.uptime()
      )}\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n「 𝚇𝚙𝚕𝚘𝚛𝚎 𝙼𝚘𝚛𝚎 𝚆𝚒𝚝𝚑  /help\n𝙲𝚘𝚖𝚖𝚘𝚗𝚍 𝙰𝚗𝚍 𝙱𝚞𝚝𝚝𝚘𝚗𝚜 𝙶𝚒𝚟𝚎𝚗 𝙱𝚎𝚕𝚘𝚠 」.`,
    }
  );
});

// /alive
bot.onText(/\/alive/, async (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  await bot.sendVideo(
    chatId,
    "https://telegra.ph/file/39ce6f48c6ba2192ff71c.mp4",
    {
      caption: `Hi SOME1HING, I'm Emilia Robot.\n\n⚪️ I'm Working Properly\n\n⚪️ My Owner : \n\n⚪️ I am Powered by :  ❟❛❟ 𝖀𝖈𝖍𝖎𝖍𝖆 ❟❛❟ 𝙉𝙚𝙩𝙬𝙤𝙧𝙠 (https://t.me/UchihaXNetwork)\n\nThanks For Adding Me Here ❤️`,
    }
  );
});
bot.onText(/\/hmm/, async (msg) => {
  const chatId = msg.chat.id;
  const user = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  await bot.sendMessage(chatId, `${user}`);
});
