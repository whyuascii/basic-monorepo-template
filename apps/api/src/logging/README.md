6. Logging Directory
Centralized logging configuration.

logger.ts:
ts
Copy code
import pino from "pino";

export const logger = pino({
  level: "info",
  transport: {
    target: "pino-pretty",
  },
});