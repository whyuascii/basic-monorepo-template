export const selectAllowedCORS = (environmentStage: string): string[] => {
  switch (environmentStage) {
    case 'production':
      return ['https://www.my-production-domain.com', 'https://api.my-production-domain.com'];
    case 'staging':
      return ['https://staging.my-domain.com', 'https://api.staging.my-domain.com'];
    case 'development':
      return ['http://localhost:3000', 'http://127.0.0.1:3000'];
    default:
      return []; // Default to no allowed origins
  }
};
