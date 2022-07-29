import fs from 'fs';
import path from 'path';
import process from 'process';


console.log('hello ' + fs.readFileSync('./__fixtures__/person1.json'))