
import { WordType } from '../../app/enums/word-types.enum';
import { ServiceConfig } from '../../app/services/config.service/config.service';
import { AbstractEndpoints, IWordItemEndpoints, UserSentenceEndpoints } from './endpoints.abstract';

export class Endpoints implements AbstractEndpoints {

    constructor(private config: ServiceConfig) { }

    wordItem: IWordItemEndpoints = {
      getWordItems: (wordType: WordType): string => {
        return `${this.config.apiBaseURL}/api/Word?wordType=${wordType}`;
      }
    };

    userSentence: UserSentenceEndpoints = {
      getUserSentences:(pageNumber) : string =>{
        return `${this.config.apiBaseURL}/api/UserSentence?pageNumber=${pageNumber}`
      },
      createUserSentence :`${this.config.apiBaseURL}/api/UserSentence`,
    };
}
