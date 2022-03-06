import { Question } from '../types/types';

export const addOrRemoveAQuestion = (question: Question, questionsArray: Question[]) => {
    const isExisted: boolean = questionsArray.includes(question);
    if (isExisted) {
        questionsArray = questionsArray.filter(item => item.question !== question.question);
    } else {
        questionsArray.push(question);
    }
    return questionsArray;
}