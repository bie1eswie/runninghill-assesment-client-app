import { Enums } from "../../app/enums/enums";
import { ErrorSeverityLevel } from "../../app/enums/error-severity-level.enum";


export function InitializeConfig(): IConfig {
    const config: IConfig = {
        apiBaseURL: '',
        appInsightsKey: '',
        humanAPIClientId: '',
        logging: {
            errorLogTo: ['console', 'appInsights'],
            loggingLevel: Enums.ErrorSeverityLevel.Error
        }
    };
    return config;
}

export interface IConfig {
    apiBaseURL: string;
    appInsightsKey: string;
    logging: ILogging;
    humanAPIClientId: string;
}

export interface ILogging {
    errorLogTo: string[];
    loggingLevel: ErrorSeverityLevel | string;
}
