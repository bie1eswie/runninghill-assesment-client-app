import { GetUserSentenceRequest } from "../../models/user-sentence/get-user-sentence-request";
import { Observable } from "rxjs";
import { UserSentence } from "../../models/user-sentence/user-sentence";

export abstract class AbstractServiceUserSentence{
  abstract GetUserSentences(pageNumber: number): Observable<any>
  abstract CreateUserSentence(userSentence: UserSentence): Observable<boolean>
}
