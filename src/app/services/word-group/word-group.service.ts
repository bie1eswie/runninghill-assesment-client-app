import { Injectable } from '@angular/core';
import { AbstractServiceWordGroup } from './word-group.service.abstract';
import { Observable } from 'rxjs';
import { WordGroup } from '../../models/word-group/word-group';
import { AbstractEndpoints } from '../../../environments/endpoints/endpoints.abstract';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordGroupService extends AbstractServiceWordGroup {

  constructor(private endpoints: AbstractEndpoints,private httpClient: HttpClient)
  {
    super();
  }

  override GetAllWordGroups(): Observable<WordGroup[]> {
    return this.httpClient.get<WordGroup[]>(this.endpoints.wordGroup.getWordGroups());
  }

}
