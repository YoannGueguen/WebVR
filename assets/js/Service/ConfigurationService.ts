import {Singleton} from "typescript-ioc";

@Singleton
export default class ConfigurationService {
    private readonly config;

    constructor() {
        this.config = require('@config/parameters.yml').config;
    }

    /**
     * Know if environment is 'development'
     */
    public isDevelopmentEnvironment(): boolean {
        return this.config.environment === 'development';
    }

    /**
     * Know if environment is 'production'
     */
    public isProductionEnvironment(): boolean {
        return this.config.environment === 'production';
    }

    /**
     * Get parameter from parameters.yml
     * @param name
     */
    public getParameter(name: string): any | null {
        return this.config[name] || null;
    }
}
