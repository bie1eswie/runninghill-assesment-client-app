import { Injectable } from '@angular/core';
import { AbstractServiceUserSentence } from './user-sentence.service.abstract';
import { GetUserSentenceRequest } from '../../models/user-sentence/get-user-sentence-request';
import { Observable } from 'rxjs';
import { AbstractEndpoints } from '../../../environments/endpoints/endpoints.abstract';
import { HttpClient } from '@angular/common/http';
import { UserSentence } from '../../models/user-sentence/user-sentence';

@Injectable({
  providedIn: 'root'
})
export class UserSentenceService extends AbstractServiceUserSentence {
  override CreateUserSentence(userSentence: UserSentence): Observable<boolean> {
    return this.httpClient.post<boolean>(this.endpoints.userSentence.createUserSentence,userSentence);
  }
  override GetUserSentences(pageNumber: number): Observable<any> {
    return this.httpClient.get<any>(this.endpoints.userSentence.getUserSentences(pageNumber));
  }

  constructor(private endpoints: AbstractEndpoints,
              private httpClient: HttpClient) {
    super();
   }
}
