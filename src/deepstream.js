import deepstream from 'deepstream.io-client-js';

import config from 'config';

const client = deepstream(config.websockets.deepstreamURL);
client.login();

export default client;
