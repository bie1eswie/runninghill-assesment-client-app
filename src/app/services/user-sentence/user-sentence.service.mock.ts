import { Injectable } from '@angular/core';
import { AbstractServiceUserSentence } from './user-sentence.service.abstract';
import { Observable } from 'rxjs';
import { GetUserSentenceRequest } from '../../models/user-sentence/get-user-sentence-request';
import { UserSentence } from '../../models/user-sentence/user-sentence';
import { AbstractEndpoints } from '../../../environments/endpoints/endpoints.abstract';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSentenceServiceMock extends AbstractServiceUserSentence {
  override CreateUserSentence(userSentence: UserSentence): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  override GetUserSentences(pageNumber: number): Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor(private endpoints: AbstractEndpoints,
    private httpClient: HttpClient) {
super();
}

}
