class EnvironmentService {
    constructor(private environment: string) {
    }

    /**
     * Know if environment is 'development'
     */
    public isDevelopmentEnvironment(): boolean {
        return this.environment === 'development';
    }
}

export default new EnvironmentService(
    process.env.NODE_ENV
);