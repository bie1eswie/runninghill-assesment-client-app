import { Injectable } from '@angular/core';
import { AbstractServiceWordItem } from './word-item.service.abstract';
import { Observable } from 'rxjs';
import { WordType } from '../../enums/word-types.enum';
import { AbstractEndpoints } from '../../../environments/endpoints/endpoints.abstract';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordItemService extends AbstractServiceWordItem {
  override GetWordItems(wordType: WordType): Observable<any> {
    return this.httpClient.get<any>(this.endpoints.wordItem.getWordItems(wordType))
  }

  constructor(private endpoints: AbstractEndpoints,
              private httpClient: HttpClient)
  {
    super();
  }

}
