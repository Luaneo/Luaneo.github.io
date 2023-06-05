import asyncio
from aiogram import Bot, Dispatcher, executor
from aiogram.types import WebAppInfo
from aiogram.types.reply_keyboard import ReplyKeyboardMarkup, KeyboardButton
from aiogram.dispatcher.filters.builtin import Command

from config import TOKEN


loop = asyncio.new_event_loop()
bot = Bot(TOKEN, parse_mode='HTML')
dp = Dispatcher(bot, loop)

web_app = WebAppInfo(url='https://luaneo.github.io/bot/index.html')

keyboard = ReplyKeyboardMarkup(
    keyboard=[[KeyboardButton(text='Site', web_app=web_app)]],
    resize_keyboard=True
)


if __name__ == '__main__':
    @dp.message_handler(Command('start'))
    async def start(message):
        await bot.send_message(
            message.chat.id,
            'Отправь анонимное послание Грише!',
            reply_markup=keyboard
        )

    grisha_id = ''

    @dp.message_handler(content_types='web_app_data')
    async def sendToGrigory(message):
        match message.web_app_data.data:
            case 'Заспамить':
                for i in range(4):
                    await bot.send_message(message.chat.id, 'Тебя спамят!')
            case 'Поцеловать':
                await bot.send_message(message.chat.id, 'Тебя поцеловали 🤭')
            case 'Назвать котеночком':
                await bot.send_message(message.chat.id, 'Ты такой котеночек 💗')

    executor.start_polling(dp)
