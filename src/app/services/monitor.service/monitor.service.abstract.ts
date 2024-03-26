import { ErrorSeverityLevel } from "../../enums/error-severity-level.enum";

export abstract class AbstractServiceMonitoring{
  abstract LogEvent(
    origin: any,
    descriptionOfEvent: string,
    properties?: { [key: string]: any }
  ): void;

 abstract LogException(
    origin: any,
    exception: Error | string,
    properties: { [key: string]: any },
    severityLevel: ErrorSeverityLevel.Critical | ErrorSeverityLevel.Error
  ): void
}
