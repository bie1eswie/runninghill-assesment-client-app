import { WordType } from "../../enums/word-types.enum";
import { WordItem } from "../word-item/word-item";

export class WordGroup{
  items: Array<WordItem>;
  description: string;
  wordType: WordType
  constructor(_items: Array<WordItem>, _description: string,_wordType: WordType){
    this.items = _items;
    this.description = _description;
    this.wordType = _wordType;
  }
}
