
import { Enums } from '../../app/enums/enums';
import { ServiceConfig } from '../../app/services/config.service/config.service';
import { AbstractServiceMonitoring } from '../../app/services/monitor.service/monitor.service.abstract';
import { AppSettings } from '../app-settings/app-settings';
import { Endpoints } from './endpoints';
import { AbstractEndpoints } from './endpoints.abstract';
import { EndpointsMock } from './endpoints.mock';

export function FactoryEndpoints(serviceConfig: ServiceConfig, serviceMonitor: AbstractServiceMonitoring): AbstractEndpoints {
    serviceMonitor.LogEvent('FactoryEndpoints', 'Endpoints Factory loaded');
    switch (AppSettings.environment) {
        case Enums.Environments.MockData:
            return new EndpointsMock(serviceConfig);
        default:
            return new Endpoints(serviceConfig);
    }
}
