import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { MainComponent } from '../../src/components/MainComponent';
import { HelperService } from '../../src/services/HelperService';

// Mock HelperService
vi.mock('../../src/services/HelperService');

describe('MainComponent', () => {
  let mainComponent: MainComponent;
  let mockHelperService: jest.Mocked<HelperService>;

  beforeEach(() => {
    mockHelperService = new HelperService() as jest.Mocked<HelperService>;
    mainComponent = new MainComponent(mockHelperService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Initialization', () => {
    it('should initialize with default configuration', () => {
      expect(mainComponent).toBeDefined();
      expect(mainComponent.isInitialized()).toBe(true);
    });

    it('should initialize with custom configuration', () => {
      const customConfig = {
        apiVersion: 'v2',
        baseUrl: 'https://custom.api.com',
        timeout: 5000
      };
      const component = new MainComponent(mockHelperService, customConfig);
      expect(component.getConfig()).toEqual(customConfig);
    });

    it('should throw error when initialized without HelperService', () => {
      expect(() => new MainComponent(null as any)).toThrow('HelperService is required');
    });
  });

  describe('API Documentation Generation', () => {
    it('should generate API documentation successfully', async () => {
      const mockDocumentation = {
        version: '1.0.0',
        endpoints: [],
        schemas: {}
      };
      mockHelperService.generateDocumentation.mockResolvedValue(mockDocumentation);

      const result = await mainComponent.generateApiDocumentation();
      
      expect(result).toEqual(mockDocumentation);
      expect(mockHelperService.generateDocumentation).toHaveBeenCalledTimes(1);
    });

    it('should handle documentation generation failure', async () => {
      mockHelperService.generateDocumentation.mockRejectedValue(
        new Error('Generation failed')
      );

      await expect(mainComponent.generateApiDocumentation())
        .rejects.toThrow('Generation failed');
    });

    it('should generate documentation with custom options', async () => {
      const options = {
        includeExamples: true,
        format: 'openapi',
        outputPath: './docs'
      };

      await mainComponent.generateApiDocumentation(options);
      
      expect(mockHelperService.generateDocumentation)
        .toHaveBeenCalledWith(expect.objectContaining(options));
    });
  });

  describe('Endpoint Registration', () => {
    it('should register a new endpoint', () => {
      const endpoint = {
        path: '/api/users',
        method: 'GET',
        description: 'Get all users'
      };

      mainComponent.registerEndpoint(endpoint);
      const endpoints = mainComponent.getEndpoints();
      
      expect(endpoints).toContainEqual(endpoint);
    });

    it('should prevent duplicate endpoint registration', () => {
      const endpoint = {
        path: '/api/users',
        method: 'GET',
        description: 'Get all users'
      };

      mainComponent.registerEndpoint(endpoint);
      
      expect(() => mainComponent.registerEndpoint(endpoint))
        .toThrow('Endpoint already registered');
    });

    it('should validate endpoint structure', () => {
      const invalidEndpoint = {
        path: '',
        method: 'INVALID'
      };

      expect(() => mainComponent.registerEndpoint(invalidEndpoint as any))
        .toThrow('Invalid endpoint structure');
    });

    it('should support multiple HTTP methods for same path', () => {
      const getEndpoint = { path: '/api/users', method: 'GET' };
      const postEndpoint = { path: '/api/users', method: 'POST' };

      mainComponent.registerEndpoint(getEndpoint);
      mainComponent.registerEndpoint(postEndpoint);

      const endpoints = mainComponent.getEndpoints();
      expect(endpoints).toHaveLength(2);
    });
  });

  describe('Schema Management', () => {
    it('should add schema definition', () => {
      const schema = {
        name: 'User',
        properties: {
          id: { type: 'string' },
          email: { type: 'string' }
        }
      };

      mainComponent.addSchema(schema);
      expect(mainComponent.getSchema('User')).toEqual(schema);
    });

    it('should update existing schema', () => {
      const schema = { name: 'User', properties: {} };
      mainComponent.addSchema(schema);

      const updatedSchema = {
        name: 'User',
        properties: { id: { type: 'string' } }
      };
      mainComponent.updateSchema('User', updatedSchema);

      expect(mainComponent.getSchema('User')).toEqual(updatedSchema);
    });

    it('should throw error for non-existent schema', () => {
      expect(() => mainComponent.getSchema('NonExistent'))
        .toThrow('Schema not found');
    });
  });

  describe('Validation', () => {
    it('should validate API request against schema', () => {
      const schema = {
        name: 'CreateUserRequest',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 8 }
        }
      };
      mainComponent.addSchema(schema);

      const validRequest = {
        email: 'test@example.com',
        password: 'securepass123'
      };

      expect(mainComponent.validateRequest('CreateUserRequest', validRequest))
        .toBe(true);
    });

    it('should reject invalid requests', () => {
      const schema = {
        name: 'CreateUserRequest',
        required: ['email'],
        properties: {
          email: { type: 'string', format: 'email' }
        }
      };
      mainComponent.addSchema(schema);

      const invalidRequest = {
        email: 'not-an-email'
      };

      const result = mainComponent.validateRequest('CreateUserRequest', invalidRequest);
      expect(result.valid).toBe(false);
      expect(result.errors).toBeDefined();
    });
  });

  describe('Export Functionality', () => {
    it('should export documentation as JSON', async () => {
      const exported = await mainComponent.exportDocumentation('json');
      expect(typeof exported).toBe('string');
      expect(() => JSON.parse(exported)).not.toThrow();
    });

    it('should export documentation as YAML', async () => {
      const exported = await mainComponent.exportDocumentation('yaml');
      expect(typeof exported).toBe('string');
      expect(exported).toContain('openapi:');
    });

    it('should throw error for unsupported format', async () => {
      await expect(mainComponent.exportDocumentation('xml' as any))
        .rejects.toThrow('Unsupported format');
    });
  });

  describe('Event Handling', () => {
    it('should emit events on endpoint registration', () => {
      const listener = vi.fn();
      mainComponent.on('endpoint:registered', listener);

      const endpoint = { path: '/api/test', method: 'GET' };
      mainComponent.registerEndpoint(endpoint);

      expect(listener).toHaveBeenCalledWith(endpoint);
    });

    it('should emit events on documentation generation', async () => {
      const listener = vi.fn();
      mainComponent.on('documentation:generated', listener);

      mockHelperService.generateDocumentation.mockResolvedValue({});
      await mainComponent.generateApiDocumentation();

      expect(listener).toHaveBeenCalled();
    });
  });
});