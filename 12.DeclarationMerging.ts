interface Box {
    height: number;
    width: number;
    test(a: string): void;
}
interface Box {
    scale: number;
    //width: number;//ok
    //width: string;//error
}
let box: Box = {height: 5, width: 6, scale: 10, test: ()=>{}};


interface Cloner {
    clone(a: string): string;
}
interface Cloner {
    clone(a: number): number;
}
class ClonerImpl implements Cloner {
   clone(a: any):  any {return "";}s
}

class Album {
    label: string;
}
namespace Album {
    export class AlbumLabel { }
}

function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}
namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}
console.log(buildLabel("Sam Smith"));