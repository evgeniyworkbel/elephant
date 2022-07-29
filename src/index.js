import * as fs from 'node:fs';
import path from 'path';
import process from 'process';

console.log('hello ' + fs.readFileSync('./__fixtures__/person1.json'))
console.log('extension: ', path.extname('./__fixtures__/person1.json'))