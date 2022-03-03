import { Question } from '../types/types';

export const setLocalStorage = (storageName: string, value: Question[]) => {
    localStorage.setItem(storageName, JSON.stringify(value));
}

export const getLocalStorage = (storageName: string) => {
    if (localStorage.getItem(storageName)) {
        const questions: Question[] = JSON.parse(localStorage.getItem(storageName) || "");
        return questions;
    }
    return null;
}