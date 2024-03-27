import { AbstractEndpoints } from "../../../environments/endpoints/endpoints.abstract";
import { AppSettings } from "../../../environments/app-settings/app-settings";
import { Enums } from "../../enums/enums";
import { ServiceMonitoring } from "../monitor.service/monitor.service";
import { HttpClient } from "@angular/common/http";
import { WordGroupServiceMock } from "./word-group.service.mock";
import { WordGroupService } from "./word-group.service";
import { AbstractServiceWordGroup } from "./word-group.service.abstract";

export function FactoryServiceWordGroup(  httpClient: HttpClient, serviceMonitor: ServiceMonitoring,
  endpoints: AbstractEndpoints): AbstractServiceWordGroup {
    serviceMonitor.LogEvent('FactoryServiceWordGroup', 'Service Word Group Factory loaded');
    if(AppSettings.environment == Enums.Environments.MockData)
      return new WordGroupServiceMock(endpoints,httpClient);
    else
    return new WordGroupService(endpoints,httpClient);
}
