import TelegramBot  from  "node-telegram-bot-api";
import {Telegram} from "./hidden.js";
import {getQuestion} from "./question.js";
import {factsArr} from "./facts.js";
import random from "random";

const bot = new  TelegramBot (Telegram.Token , {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

bot.onText('/start' , msg => {
    const { id } = msg.chat;
    bot.sendMessage(id, "Приветствую с помощью этого бота ты можешь подтянуть свои навыки", {
        "reply_markup": {
            "keyboard": [["PHP", "JS"],   ["CSS"], ["HTML"] , ["Random fact"]]
        }
    }).catch( (error) => console.error(error))
})

bot.onText('/test' , msg => {
    const { id } = msg.chat
    bot.sendMessage(id ,'Я работаю')
        .catch( (error) => console.error(error))
})

bot.onText('PHP' , msg => {
    const { id } = msg.chat
    bot.sendMessage(id ,'Я знаю кое что о Hypertext Preprocessor')
    const question = getQuestion("PHP");
    if (question.hasOptions === true) {
        var buttons = [];
        let callbackArr = [];
        let right_answer = ' ';
        const buttonRows = question.options.map((option) => {
            if (option.isCorrect === true){
                right_answer = option.text;
                callbackArr.push(right_answer)
            }
            let callbackJSON = JSON.stringify (callbackArr)
            let encodedCallback = btoa(callbackJSON);

            buttons.push([{text:option.text , callback_data:encodedCallback.toString()}])
        })
        bot.sendMessage(id , question.text  ,
            {reply_markup:JSON.stringify(
                    {inline_keyboard:buttons},
                )}
        )
    }
})

bot.onText('CSS' , msg => {
    const { id } = msg.chat
    bot.sendMessage(id ,'Я знаю кое что о Cascading Style Sheets')
    const question = getQuestion("CSS");
    if (question.hasOptions === true) {
        var buttons = [];
        let callbackArr = [];
        let right_answer = ' ';
        const buttonRows = question.options.map((option) => {
            if (option.isCorrect === true){
                right_answer = option.text;
                callbackArr.push(right_answer)
            }
            let callbackJSON = JSON.stringify (callbackArr)
            let encodedCallback = btoa(callbackJSON);

            buttons.push([{text:option.text , callback_data:encodedCallback.toString()}])
        })
        bot.sendMessage(id , question.text  ,
            {reply_markup:JSON.stringify(
                    {inline_keyboard:buttons},
                )}
        )
    }
})

bot.onText('HTML' , msg => {
    const { id } = msg.chat
    bot.sendMessage(id ,'Я знаю кое что о HyperText Markup Language ')
    const question = getQuestion("HTML");
    if (question.hasOptions === true) {
        var buttons = [];
        let callbackArr = [];
        let right_answer = ' ';
        const buttonRows = question.options.map((option) => {
            if (option.isCorrect === true){
                right_answer = option.text;
                callbackArr.push(right_answer)
            }
            let callbackJSON = JSON.stringify (callbackArr)
            let encodedCallback = btoa(callbackJSON);

            buttons.push([{text:option.text , callback_data:encodedCallback.toString()}])
        })
        bot.sendMessage(id , question.text  ,
            {reply_markup:JSON.stringify(
                    {inline_keyboard:buttons},
                )}
        )
    }
})

bot.onText('JS' , msg => {
    const { id } = msg.chat
    bot.sendMessage(id ,'Я знаю кое что о JavaScript')
    const question = getQuestion("JS");
    if (question.hasOptions === true) {
        var buttons = [];
        let callbackArr = [];
        let right_answer = ' ';
        const buttonRows = question.options.map((option) => {
            if (option.isCorrect === true){
                right_answer = option.text;
                callbackArr.push(right_answer)
            }
            let callbackJSON = JSON.stringify (callbackArr)
            let encodedCallback = btoa(callbackJSON);

            buttons.push([{text:option.text , callback_data:encodedCallback.toString()}])
        })
        bot.sendMessage(id , question.text  ,
            {reply_markup:JSON.stringify(
                    {inline_keyboard:buttons},
                )}
        )
    }
})

bot.on("callback_query", async (callback) =>
{
    console.log(callback)
    if (callback.data === 'W10=') {
        bot.sendMessage(callback.message.chat.id ,'Неверный ответ')
            .catch( (error) => console.error(error))
    }
    else {
        bot.sendMessage(callback.message.chat.id ,'Верный ответ')
            .catch( (error) => console.error(error))
    }
});

bot.on("polling_error", console.log);

bot.onText('Random fact' , msg => {
    const { id } = msg.chat
    bot.sendMessage(id ,factsArr[random.int((0) ,(factsArr.length - 1))])
        .catch( (error) => console.error(error))
})