import { WordType } from "../../enums/word-types.enum"

export class WordItem{
  word: string
  wordType: WordType
  wordGroupId: string
  constructor(_word: string, _wordType: WordType, _wordGroupId: string){
    this.word = _word;
    this.wordType = _wordType;
    this.wordGroupId = _wordGroupId;
  }
}
