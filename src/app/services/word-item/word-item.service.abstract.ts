import { Observable } from "rxjs";
import { WordType } from "../../enums/word-types.enum";
import { WordGroup } from "../../models/word-group/word-group";

export abstract class AbstractServiceWordItem{
  abstract GetWordItems(wordType: WordType): Observable<WordGroup>
}
