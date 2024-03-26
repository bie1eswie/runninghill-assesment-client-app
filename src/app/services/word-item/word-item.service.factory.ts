import { AbstractServiceWordItem } from "./word-item.service.abstract";
import { AbstractEndpoints } from "../../../environments/endpoints/endpoints.abstract";
import { AppSettings } from "../../../environments/app-settings/app-settings";
import { Enums } from "../../enums/enums";
import { WordItemServiceMock } from "./word-item.service.mock";
import { WordItemService } from "./word-item.service";
import { ServiceMonitoring } from "../monitor.service/monitor.service";
import { HttpClient } from "@angular/common/http";

export function FactoryServiceWordItem(  httpClient: HttpClient, serviceMonitor: ServiceMonitoring,
  endpoints: AbstractEndpoints): AbstractServiceWordItem {
    serviceMonitor.LogEvent('FactoryServiceWordItem', 'Service Word Item Factory loaded');
    if(AppSettings.environment == Enums.Environments.MockData)
      return new WordItemServiceMock(endpoints,httpClient);
    else
    return new WordItemService(endpoints,httpClient);
}
