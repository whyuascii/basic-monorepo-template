import { describe, it, expect, beforeEach, vi } from 'vitest';
import { HelperService } from '../../src/services/HelperService';

describe('HelperService', () => {
  let helperService: HelperService;

  beforeEach(() => {
    helperService = new HelperService();
  });

  describe('Documentation Generation', () => {
    it('should generate complete documentation structure', async () => {
      const endpoints = [
        { path: '/api/users', method: 'GET', description: 'List users' },
        { path: '/api/users/:id', method: 'GET', description: 'Get user by ID' }
      ];

      const documentation = await helperService.generateDocumentation({ endpoints });

      expect(documentation).toHaveProperty('openapi');
      expect(documentation).toHaveProperty('info');
      expect(documentation).toHaveProperty('paths');
      expect(Object.keys(documentation.paths)).toHaveLength(2);
    });

    it('should include security schemes in documentation', async () => {
      const options = {
        security: {
          type: 'bearer',
          scheme: 'jwt'
        }
      };

      const documentation = await helperService.generateDocumentation(options);

      expect(documentation.components.securitySchemes).toBeDefined();
      expect(documentation.components.securitySchemes.bearerAuth).toBeDefined();
    });

    it('should generate documentation with examples', async () => {
      const endpoints = [{
        path: '/api/users',
        method: 'POST',
        requestBody: {
          example: { email: 'test@example.com', name: 'Test User' }
        }
      }];

      const documentation = await helperService.generateDocumentation({
        endpoints,
        includeExamples: true
      });

      expect(documentation.paths['/api/users'].post.requestBody.content['application/json'].example)
        .toBeDefined();
    });

    it('should handle empty endpoint list', async () => {
      const documentation = await helperService.generateDocumentation({ endpoints: [] });
      expect(documentation.paths).toEqual({});
    });
  });

  describe('Path Parameter Parsing', () => {
    it('should parse path parameters correctly', () => {
      const path = '/api/users/:id/posts/:postId';
      const parameters = helperService.parsePathParameters(path);

      expect(parameters).toEqual([
        { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
        { name: 'postId', in: 'path', required: true, schema: { type: 'string' } }
      ]);
    });

    it('should handle paths without parameters', () => {
      const path = '/api/users';
      const parameters = helperService.parsePathParameters(path);
      expect(parameters).toEqual([]);
    });

    it('should handle optional parameters', () => {
      const path = '/api/users/:id?';
      const parameters = helperService.parsePathParameters(path);
      expect(parameters[0].required).toBe(false);
    });
  });

  describe('Schema Validation', () => {
    it('should validate object against JSON schema', () => {
      const schema = {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' }
        },
        required: ['name']
      };

      const validObject = { name: 'John', age: 30 };
      const result = helperService.validateSchema(validObject, schema);

      expect(result.valid).toBe(true);
      expect(result.errors).toEqual([]);
    });

    it('should detect validation errors', () => {
      const schema = {
        type: 'object',
        properties: {
          email: { type: 'string', format: 'email' }
        },
        required: ['email']
      };

      const invalidObject = { email: 'not-an-email' };
      const result = helperService.validateSchema(invalidObject, schema);

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should validate nested objects', () => {
      const schema = {
        type: 'object',
        properties: {
          user: {
            type: 'object',
            properties: {
              profile: {
                type: 'object',
                properties: {
                  age: { type: 'number', minimum: 0 }
                }
              }
            }
          }
        }
      };

      const validObject = {
        user: {
          profile: {
            age: 25
          }
        }
      };

      const result = helperService.validateSchema(validObject, schema);
      expect(result.valid).toBe(true);
    });
  });

  describe('Format Conversion', () => {
    it('should convert JSON to YAML', () => {
      const json = { name: 'Test', value: 123 };
      const yaml = helperService.convertToYAML(json);

      expect(yaml).toContain('name: Test');
      expect(yaml).toContain('value: 123');
    });

    it('should convert YAML to JSON', () => {
      const yaml = 'name: Test\nvalue: 123';
      const json = helperService.convertToJSON(yaml);

      expect(json).toEqual({ name: 'Test', value: 123 });
    });

    it('should handle conversion errors gracefully', () => {
      const invalidYaml = 'invalid: yaml: content:';
      expect(() => helperService.convertToJSON(invalidYaml))
        .toThrow('Invalid YAML format');
    });
  });

  describe('Example Generation', () => {
    it('should generate example from schema', () => {
      const schema = {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'John Doe' },
          age: { type: 'number', example: 30 },
          email: { type: 'string', format: 'email' }
        }
      };

      const example = helperService.generateExample(schema);

      expect(example.name).toBe('John Doe');
      expect(example.age).toBe(30);
      expect(example.email).toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    });

    it('should generate array examples', () => {
      const schema = {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' }
          }
        }
      };

      const example = helperService.generateExample(schema);
      expect(Array.isArray(example)).toBe(true);
      expect(example.length).toBeGreaterThan(0);
    });
  });

  describe('Documentation Merging', () => {
    it('should merge multiple documentation sources', () => {
      const doc1 = {
        paths: {
          '/api/users': { get: { summary: 'Get users' } }
        }
      };

      const doc2 = {
        paths: {
          '/api/posts': { get: { summary: 'Get posts' } }
        }
      };

      const merged = helperService.