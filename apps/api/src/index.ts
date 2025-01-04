import app from './app';
import { env } from './utils/env';

app.listen({ port: Number(env.PORT) }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on http://localhost:${env.PORT}`);
});
