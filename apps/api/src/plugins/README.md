Key Directories and Files
1. Plugins Directory
Custom plugins for Fastify, like CORS and type provider.

cors.ts:

ts
Copy code
import fp from "fastify-plugin";

export const corsPlugin = fp(async (fastify) => {
  fastify.register(import("@fastify/cors"), {
    origin: true, // Allow all origins
    credentials: true, // Allow cookies and headers
  });
});
type-provider.ts:

ts
Copy code
import fp from "fastify-plugin";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

export const typeProviderPlugin = fp(async (fastify) => {
  fastify.withTypeProvider<TypeBoxTypeProvider>();
});
index.ts: Register all plugins.

ts
Copy code
import { corsPlugin } from "./cors";
import { typeProviderPlugin } from "./type-provider";

export default async function registerPlugins(fastify: FastifyInstance) {
  fastify.register(corsPlugin);
  fastify.register(typeProviderPlugin);
}