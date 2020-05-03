// 该方法虽然 import 但是没有被使用，所以文件会被 tree-shaking 掉
// 如果使用在 package.json 中 sideEffects 添加该文件副作用，构建之后会留下 console.log(1)
export function b(v) {
    return v;
}

console.log(b(1));