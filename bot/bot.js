import { Telegraf } from 'telegraf'

const TOKEN = ''
const bot = new Telegraf(TOKEN)

const web_link = ''
bot.start(ctx =>
	ctx.reply('Добро Пожаловать в магазин еды!!!', {
		reply_markup: {
			keyboard: [[{ text: 'web app', web_app: { url: web_link } }]],
		},
	})
)

bot.launch()
