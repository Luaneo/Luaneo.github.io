import logging
from telegram import Update, WebApp
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler

async def kotenochek(update: Update, context: ContextTypes.DEFAULT_TYPE):
    ...

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

userdata = {}

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await context.bot.send_message(chat_id=update, text='Используй кнопку внизу, чтобы анонимно отправить сообщение Грише')