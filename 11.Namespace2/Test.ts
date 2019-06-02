/// <reference path="a.ts" />
/// <reference path="b.ts" />

/*namespace nms {
export interface a {test(s: string): void;};
export const d = 5;
const e = 'hello'
export class c implements a{test(s: string): void {console.log(e);}};
export class b implements a{test(s: string): void {}};
}*/

namespace nms {
export const d = 5;
const e = 'hello'
export class c implements a{test(s: string): void {console.log(e);}};
}

let v: nms.a = new nms.c();
v.test('');

console.log(nms.d);