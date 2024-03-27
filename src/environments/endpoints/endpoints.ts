
import { WordType } from '../../app/enums/word-types.enum';
import { Constants } from '../constants/constants';
import { AbstractEndpoints, IWordGroupEndpoints, IWordItemEndpoints, UserSentenceEndpoints } from './endpoints.abstract';

export class Endpoints implements AbstractEndpoints {

    constructor() { }

    wordGroup: IWordGroupEndpoints= {
      getWordGroups: (): string => {
        return `${Constants.ApiUrl}/api/WordGroup`;
      }
    };
    wordItem: IWordItemEndpoints = {
      getWordItems: (wordType: WordType): string => {
        return `${Constants.ApiUrl}/api/Word?wordType=${wordType}`;
      }
    };

    userSentence: UserSentenceEndpoints = {
      getUserSentences:(pageNumber) : string =>{
        return `${Constants.ApiUrl}/api/UserSentence?pageNumber=${pageNumber}`
      },
      createUserSentence :`${Constants.ApiUrl}/api/UserSentence`,
    };
}
