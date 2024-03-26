import { AbstractEndpoints } from "../../../environments/endpoints/endpoints.abstract";
import { AppSettings } from "../../../environments/app-settings/app-settings";
import { Enums } from "../../enums/enums";
import { ServiceMonitoring } from "../monitor.service/monitor.service";
import { HttpClient } from "@angular/common/http";
import { AbstractServiceUserSentence } from "./user-sentence.service.abstract";
import { UserSentenceService } from "./user-sentence.service";
import { UserSentenceServiceMock } from "./user-sentence.service.mock";

export function FactoryServiceUserSentence(  httpClient: HttpClient, serviceMonitor: ServiceMonitoring,
  endpoints: AbstractEndpoints): AbstractServiceUserSentence {
    serviceMonitor.LogEvent('FactoryServiceUserSentence', 'Service User Sentence Factory loaded');
    if(AppSettings.environment == Enums.Environments.MockData)
      return new UserSentenceServiceMock(endpoints,httpClient);
    else
    return new UserSentenceService(endpoints,httpClient);
}
