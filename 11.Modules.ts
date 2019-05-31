import { pi } from "./math";
import { sum } from "./math";
console.log(sum(pi, pi));

import * as math from "./math";
console.log(math.sum(math.pi, math.pi));

import a from "./math";
console.log(a);

import b = require('./module2');
console.log(b);