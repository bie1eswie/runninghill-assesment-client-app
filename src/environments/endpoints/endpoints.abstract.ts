import { WordType } from "../../app/enums/word-types.enum";

export abstract class AbstractEndpoints {

    wordItem!: IWordItemEndpoints;
    userSentence!: UserSentenceEndpoints;

    constructor() { }
}
export interface IWordItemEndpoints {
    getWordItems(wordType: WordType): string;
}

export interface UserSentenceEndpoints {
  getUserSentences(pageNumber: number): string;
  createUserSentence: string;
}
