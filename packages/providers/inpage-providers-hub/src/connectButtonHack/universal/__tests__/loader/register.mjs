import { register } from 'node:module';
import { argv } from 'node:process';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
register('./ext.js', import.meta.url, { data: { argv1: argv[1] } });
