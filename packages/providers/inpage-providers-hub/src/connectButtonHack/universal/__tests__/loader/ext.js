import { existsSync } from 'fs';
import { basename, dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';

export function resolve(specifier, context, nextResolve) {
  if (
    ['lodash/isPlainObject', 'lodash/isString', 'lodash/isFunction', 'lodash/isNil'].includes(
      specifier,
    )
  ) {
    return nextResolve(`${specifier}.js`, context, nextResolve);
  }
  // console.log('\n===>[dbg]: specifier:', specifier);
  // console.log('===>[dbg]: context:', context);
  return nextResolve(specifier, context, nextResolve);
}
