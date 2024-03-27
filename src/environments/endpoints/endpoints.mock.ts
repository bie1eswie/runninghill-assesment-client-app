
import { ServiceConfig } from '../../app/services/config.service/config.service';
import { Constants } from '../constants/constants';
import { AbstractEndpoints, IWordGroupEndpoints, IWordItemEndpoints, UserSentenceEndpoints } from './endpoints.abstract';

export class EndpointsMock implements AbstractEndpoints {

    constructor() { }
  wordGroup: IWordGroupEndpoints= {
    getWordGroups: (): string => {
      return `${Constants.ApiUrl}/api/WordGroup`;
    }
  };

    wordItem: IWordItemEndpoints = {
      getWordItems: (): string => {
        return `${Constants.ApiUrl}/api/HumanAPI/GetAccessToken?email`;
      }
    };

    userSentence: UserSentenceEndpoints = {
      getUserSentences:(pageNumber) : string =>{
        return `${Constants.ApiUrl}/api/UserSentence?pageNumber=${pageNumber}`
      },
      createUserSentence :`${Constants.ApiUrl}/api/Account/login`,
    };
}
