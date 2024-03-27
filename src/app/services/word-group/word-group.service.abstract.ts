import { Observable } from "rxjs";
import { WordGroup } from "../../models/word-group/word-group";

export abstract class AbstractServiceWordGroup{
  abstract GetAllWordGroups(): Observable<WordGroup[]>
}
