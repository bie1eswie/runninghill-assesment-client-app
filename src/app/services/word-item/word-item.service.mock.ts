import { Injectable } from '@angular/core';
import { AbstractServiceWordItem } from './word-item.service.abstract';
import { Observable } from 'rxjs';
import { WordType } from '../../enums/word-types.enum';
import { AbstractEndpoints } from '../../../environments/endpoints/endpoints.abstract';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordItemServiceMock extends AbstractServiceWordItem{

  constructor(private endpoints: AbstractEndpoints,
    private httpClient: HttpClient)
{
super();
}
  override GetWordItems(wordType: WordType): Observable<any> {
    throw new Error('Method not implemented.');
  }

}
