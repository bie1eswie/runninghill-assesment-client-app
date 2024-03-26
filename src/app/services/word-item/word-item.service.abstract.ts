import { Observable } from "rxjs";
import { WordType } from "../../enums/word-types.enum";

export abstract class AbstractServiceWordItem{
  abstract GetWordItems(wordType: WordType): Observable<any>
}
