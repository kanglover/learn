// 定义命名空间，避免变量重复
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    // export 暴露方法
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// 使用命令空间的方法
let validation = new Validation.LettersOnlyValidator();

// 别名
namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}
import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // "new Shapes.Polygons.Square()"