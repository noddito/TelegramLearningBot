import questions from "./questions.json" assert {type: "json"};
import random from "random";

function getQuestion (theme){
    const questionTheme = theme.toLowerCase();
    const randomQuestionID = random.int((0) , (questions[questionTheme].length - 1));
    return questions[questionTheme][randomQuestionID];
}

export { getQuestion };