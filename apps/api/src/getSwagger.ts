import fs from 'fs';

import { build } from './app';

const main = async () => {
  try {
    const fastify = await build();
    console.log('getting swagger');
    await fastify.after();
    console.log('ready');
    await fastify.ready();
    console.log('swagger');

    const output = fastify.swagger();
    console.log(output);
    fs.writeFileSync('swagger.json', JSON.stringify(output, null, 2));
  } catch (e) {
    console.error(e);
  }
};

main();
