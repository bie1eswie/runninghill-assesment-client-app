import { Injectable } from '@angular/core';
import { ServiceConfig } from '../config.service/config.service';
import { Enums } from '../../enums/enums';
import { ErrorSeverityLevel } from '../../enums/error-severity-level.enum';
import { AbstractServiceMonitoring } from './monitor.service.abstract';
@Injectable({
  providedIn: 'root',
})
export class ServiceMonitoring extends AbstractServiceMonitoring {

  loggingLevel = Enums.ErrorSeverityLevel.Info;

  constructor() {
    super();
    this.loggingLevel = ErrorSeverityLevel.Error;
  }

 override LogEvent(
    origin: any,
    descriptionOfEvent: string,
    properties?: { [key: string]: any }
  ): void {
    const originName = this.getOriginName(origin);
      if (this.loggingLevel === Enums.ErrorSeverityLevel.Info) {
        console.log(`${originName}: `, descriptionOfEvent);
        if (properties) {
          console.log('properties', properties);
        }
      }
  }

 override LogException(
    origin: any,
    exception: Error | string,
    properties: { [key: string]: any } = {},
    severityLevel:
      | ErrorSeverityLevel.Error
      | ErrorSeverityLevel.Critical = Enums.ErrorSeverityLevel.Error
  ): void {
    const originName = this.getOriginName(origin);
    exception =
      typeof exception === 'string' ? new Error(exception) : exception;
    this.addOriginToProperties(originName, properties);
      console.error(originName, exception);
      console.log('Error properties:', properties);
  }

  private getOriginName(origin: any): string {
    const originName =
      typeof origin === 'string' ? origin : origin?.constructor.name;
    return originName;
  }

  private addOriginToProperties(
    origin: string,
    properties: { [key: string]: any }
  ): void {
    const originParameterName = 'origin';
    properties[originParameterName] = origin;
  }
}
