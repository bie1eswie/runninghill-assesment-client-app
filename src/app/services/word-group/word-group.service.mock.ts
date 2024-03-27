import { Injectable } from '@angular/core';
import { AbstractServiceWordGroup } from './word-group.service.abstract';
import { Observable } from 'rxjs';
import { WordGroup } from '../../models/word-group/word-group';
import { AbstractEndpoints } from '../../../environments/endpoints/endpoints.abstract';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordGroupServiceMock extends AbstractServiceWordGroup {
  override GetAllWordGroups(): Observable<WordGroup[]> {
    throw new Error('Method not implemented.');
  }

  constructor(endpoints: AbstractEndpoints, httpClient: HttpClient)
  {
    super();
  }

}
