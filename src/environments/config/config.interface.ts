import { Enums } from "../../app/enums/enums";
import { ErrorSeverityLevel } from "../../app/enums/error-severity-level.enum";


export function InitializeConfig(): IConfig {
    const config: IConfig = {
        apiBaseURL: 'http://localhost:5074',
        logging: {
            errorLogTo: ['console', 'appInsights'],
            loggingLevel: Enums.ErrorSeverityLevel.Error
        }
    };
    return config;
}

export interface IConfig {
    apiBaseURL: string;
    logging: ILogging;
}

export interface ILogging {
    errorLogTo: string[];
    loggingLevel: ErrorSeverityLevel | string;
}
