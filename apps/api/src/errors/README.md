# Custom Errors

This directory contains custom errors that are used throughout the application. These errors are used to provide more context to the error that occurred and to provide a more user-friendly error message. These are different then what fastify-sensible can provide.

For example we want to customize an error for filters not passed in the query string. We can create a custom error for this and throw it when the filters are not passed.