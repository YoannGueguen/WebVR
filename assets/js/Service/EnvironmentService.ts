class EnvironmentService {
    constructor(private environment: string) {
    }

    public isDevelopmentEnvironment(): boolean {
        return this.environment === 'development';
    }
}

export default new EnvironmentService(
    process.env.NODE_ENV
);