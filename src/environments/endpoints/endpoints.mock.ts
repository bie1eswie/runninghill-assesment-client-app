
import { ServiceConfig } from '../../app/services/config.service/config.service';
import { AbstractEndpoints, IWordItemEndpoints, UserSentenceEndpoints } from './endpoints.abstract';

export class EndpointsMock implements AbstractEndpoints {

    constructor(private config: ServiceConfig) { }

    wordItem: IWordItemEndpoints = {
      getWordItems: (): string => {
        return `${this.config.apiBaseURL}/api/HumanAPI/GetAccessToken?email`;
      }
    };

    userSentence: UserSentenceEndpoints = {
      getUserSentences:(pageNumber) : string =>{
        return `${this.config.apiBaseURL}/api/UserSentence?pageNumber=${pageNumber}`
      },
      createUserSentence :`${this.config.apiBaseURL}/api/Account/login`,
    };
}
