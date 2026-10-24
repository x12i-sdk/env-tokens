import assert from 'node:assert/strict';
import { resolveEnvTokens } from '@x12i/env-tokens';

const output = resolveEnvTokens('https://{{ENV.apiHost}}/{{ENV.apiVersion}}', {
  env: { API_HOST: 'api.example.com', API_VERSION: 'v1' },
});
assert.equal(output, 'https://api.example.com/v1');
console.log(output);
