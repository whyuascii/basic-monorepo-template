import Fastify from 'fastify';
import registerPlugins from './plugins';
import registerRoutes from './routes';
import { errorHandler } from './errors/errorHandler';

const app = Fastify();

app.register(registerPlugins);
app.register(registerRoutes);
app.setErrorHandler(errorHandler);

export default app;
