import * as env from '@assets/../env.json';
import {Singleton} from "typescript-ioc";

@Singleton
export default class EnvironmentService {
    /**
     * Know if environment is 'development'
     */
    public isDevelopmentEnvironment(): boolean {
        return env.ENVIRONMENT === 'development';
    }

    /**
     * Know if environment is 'production'
     */
    public isProductionEnvironment(): boolean {
        return env.ENVIRONMENT === 'production';
    }

    public getParameter(name: string): any | null {
        return env[name] || null;
    }
}
