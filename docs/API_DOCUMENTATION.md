# API Documentation

## Overview

This API provides core functionality through the MainComponent class and HelperService. The system is designed to be extensible, maintainable, and production-ready.

## Table of Contents

- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Core Components](#core-components)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Examples](#examples)
- [Best Practices](#best-practices)

## Getting Started

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
API_PORT=3000
API_HOST=localhost
LOG_LEVEL=info
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX=100
```

### Quick Start

```javascript
const { MainComponent } = require('./src/MainComponent');
const { HelperService } = require('./src/HelperService');

// Initialize services
const helperService = new HelperService();
const mainComponent = new MainComponent(helperService);

// Start the application
await mainComponent.initialize();
```

## Authentication

### API Key Authentication

All API requests require an API key to be included in the header:

```
Authorization: Bearer YOUR_API_KEY
```

### OAuth 2.0 (Optional)

For OAuth 2.0 authentication, follow the standard OAuth flow:

1. Request authorization
2. Exchange code for token
3. Use token in subsequent requests

## Core Components

### MainComponent

The MainComponent is the primary class responsible for orchestrating core business logic.

#### Constructor

```javascript
new MainComponent(helperService, options)
```

**Parameters:**
- `helperService` (HelperService): Instance of HelperService
- `options` (Object): Configuration options
  - `maxRetries` (number): Maximum retry attempts (default: 3)
  - `timeout` (number): Request timeout in ms (default: 5000)
  - `enableLogging` (boolean): Enable detailed logging (default: true)

#### Methods

##### `initialize()`

Initializes the component and establishes connections.

```javascript
await mainComponent.initialize();
```

**Returns:** `Promise<void>`

**Throws:**
- `InitializationError`: If initialization fails

##### `process(data)`

Processes input data according to business logic.

```javascript
const result = await mainComponent.process(data);
```

**Parameters:**
- `data` (Object): Input data to process

**Returns:** `Promise<Object>` - Processed result

**Throws:**
- `ValidationError`: If data validation fails
- `ProcessingError`: If processing encounters an error

##### `shutdown()`

Gracefully shuts down the component.

```javascript
await mainComponent.shutdown();
```

**Returns:** `Promise<void>`

### HelperService

The HelperService provides utility functions and support operations.

#### Constructor

```javascript
new HelperService(config)
```

**Parameters:**
- `config` (Object): Service configuration
  - `cacheEnabled` (boolean): Enable caching (default: true)
  - `cacheTTL` (number): Cache TTL in seconds (default: 300)

#### Methods

##### `validate(data, schema)`

Validates data against a schema.

```javascript
const isValid = helperService.validate(data, schema);
```

**Parameters:**
- `data` (Object): Data to validate
- `schema` (Object): Validation schema

**Returns:** `boolean` - Validation result

##### `transform(input, transformationType)`

Transforms input data based on transformation type.

```javascript
const transformed = await helperService.transform(input, 'normalize');
```

**Parameters:**
- `input` (any): Input to transform
- `transformationType` (string): Type of transformation ('normalize', 'sanitize', 'format')

**Returns:** `Promise<any>` - Transformed data

##### `cache(key, value, ttl)`

Stores a value in cache.

```javascript
await helperService.cache('myKey', myValue, 600);
```

**Parameters:**
- `key` (string): Cache key
- `value` (any): Value to cache
- `ttl` (number): Time to live in seconds (optional)

**Returns:** `Promise<void>`

##### `getFromCache(key)`

Retrieves a value from cache.

```javascript
const value = await helperService.getFromCache('myKey');
```

**Parameters:**
- `key` (string): Cache key

**Returns:** `Promise<any>` - Cached value or null

## API Endpoints

### Health Check

**GET** `/health`

Check the health status of the API.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "1.0.0"
}
```

### Process Data

**POST** `/api/v1/process`

Process input data through the main component.

**Request Body:**
```json
{
  "data": {
    "field1": "value1",
    "field2": "value2"
  },
  "options": {
    "priority": "high",
    "async": false
  }
}
```

**Response:**
```json
{
  "success": true,
  "result": {
    "processedData": {},
    "metadata": {
      "processedAt": "2024-01-15T10:30:00Z",
      "duration": 150
    }
  }
}
```

**Status Codes:**
- `200`: Success
- `400`: Bad Request - Invalid input
- `401`: Unauthorized - Missing or invalid API key
- `429`: Too Many Requests - Rate limit exceeded
- `500`: Internal Server Error

### Transform Data

**POST** `/api/v1/transform`

Transform data using helper service.

**Request Body:**
```json
{
  "input": "raw data",
  "type": "normalize"
}
```

**Response:**
```json
{
  "success": true,
  "transformed": "normalized data",
  "transformationType": "normalize"
}
```

### Validate Data

**POST** `/api/v1/validate`

Validate data against a schema.

**Request Body:**
```json
{
  "data": {
    "email": "user@example.com",
    "age": 25
  },
  "schema": {
    "email": "string",
    "age": "number"
  }
}
```

**Response:**
```json
{
  "valid": true,
  "errors": []
}
```

## Error Handling

All errors follow a consistent format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {},
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "req-12345"
  }
}
```

### Common Error Codes

- `VALIDATION_ERROR`: Input validation failed
- `AUTHENTICATION_ERROR`: Authentication failed
- `AUTHORIZATION_ERROR`: Insufficient permissions
- `RESOURCE_NOT_FOUND`: Requested resource not found
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `PROCESSING_ERROR`: Error during processing
- `INTERNAL_ERROR`: Internal server error

## Rate Limiting

The API implements rate limiting to ensure fair usage:

- **Window:** 15 minutes
- **Max Requests:** 100 per window per API key

Rate limit information is included in response headers:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1705318200
```

## Examples

### Basic Usage

```javascript
const { MainComponent } = require('./src/MainComponent');
const { HelperService } = require('./src/HelperService');

async function main() {
  try {
    // Initialize services
    const helperService = new HelperService({
      cacheEnabled: true,
      cacheTTL: 600
    });
    
    const mainComponent = new MainComponent(helperService, {
      maxRetries: 3,
      timeout: 5000
    });
    
    await mainComponent.initialize();
    
    // Process data
    const result = await mainComponent.process({
      field1: 'value1',
      field2: 'value2'
    });
    
    console.log('Processing result:', result);
    
    // Cleanup
    await mainComponent.shutdown();
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

### Using HelperService

```javascript
const { HelperService } = require('./src/HelperService');

const helperService = new HelperService();

// Validation
const schema = {
  name: 'string',
  age: 'number',
  email: 'string'
};

const data = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

const isValid = helperService.validate(data, schema);
console.log('Valid:', isValid);

// Transformation
const transformed = await helperService.transform(
  'Raw Data',
  'normalize'
);
console.log('Transformed:', transformed);

// Caching
await helperService.cache('userSession', { userId: 123 }, 3600);
const session = await helperService.getFromCache('userSession');
```

### REST API Usage

```bash
# Health check
curl -X GET http://localhost:3000/health

# Process data
curl -X POST http://localhost:3000/api/v1/process \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "data": {
      "field1": "value1",
      "field2": "value2"
    },
    "options": {
      "priority": "high"
    }
  }'

# Validate data
curl -X POST http://localhost:3000/api/v1/validate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "data": {
      "email": "user@example.com"
    },
    "schema": {
      "email": "string"
    }
  }'
```

## Best Practices

### 1. Error Handling

Always wrap API calls in try-catch blocks:

```javascript
try {
  const result = await mainComponent.process(data);
  // Handle success
} catch (error) {
  if (error.code === 'VALIDATION_ERROR') {
    // Handle validation error
  } else {
    // Handle other errors
  }
}
```

### 2. Resource Cleanup

Always call shutdown when done:

```javascript
try {
  await mainComponent.initialize();
  // Do work
} finally {
  await mainComponent.shutdown();
}
```

### 3. Caching Strategy

Use caching for frequently accessed data:

```javascript
const cacheKey = `user:${userId}`;
let userData = await helperService.getFromCache(cacheKey);

if (!userData) {
  userData = await fetchUserData(userId);
  await helperService.cache(cacheKey, userData, 3600);
}
```

### 4. Validation

Always validate input before processing:

```javascript
if (!helperService.validate(data, schema)) {
  throw new Error('Invalid input data');
}

const result = await mainComponent.process(data);
```

### 5. Async/Await

Use async/await for better readability:

```javascript
// Good
async function processData(data) {
  const validated = helperService.validate(data, schema);
  if (!validated) throw new Error('Invalid data');
  
  return await mainComponent.process(data);
}

// Avoid
function processData(data) {
  return helperService.validate(data, schema).then(validated => {
    if (!validated) throw new Error('Invalid data');
    return mainComponent.process(data);
  });
}
```

## Versioning

The API follows semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

Current version: **1.0.0**

## Support

For issues, questions, or feature requests:

- Email: support@example.com
- GitHub Issues: https://github.com/example/repo/issues
- Documentation: https://docs.example.com

## Changelog

### v1.0.0 (2024-01-15)
- Initial release
- MainComponent implementation
- HelperService implementation
- REST API endpoints
- Rate limiting
- Authentication support