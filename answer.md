## Q:如何将如下的JSON正确解析成 Object
```json
{
  "userId": 111323290434354540545
}
```
## A:JSON 中的数字会被解析为 `JavaScript` 的数字类型。然而，`JavaScript` 中的数字类型有精度限制，无法精确表示超出范围的整数。在这种情况下，该数字会被解析为科学计数法表示的字符串。解决方法是将其解析为字符串，而不是 `JavaScript` 数字类型。

```javascript
const jsonString = `{
  "userId": 111323290434354540545
}`;

const jsonObject = JSON.parse(jsonString, (key, value) => {
  // 将所有值解析为字符串，包括超出范围的整数
  if (typeof value === 'number' && !Number.isSafeInteger(value)) {
    return value.toString();
  }
  return value;
});
```

## Q:前端需要*稳定*每隔`1s`向服务端请求`API`, 请问如何实现？

## A:使用setInterval

## Q:什么情况下，你会为你的项目引入状态管理库，比如`Redux`, `Pinia`, 可以简述一下起到了什么作用么？

## A:当组件通信较为频繁时会引入状态管理库，作用：引入状态管理库可以帮助我们更好地组织和管理应用的状态，提高开发效率和代码质量。

## Q:为什么`ESM`与`CJS`不能兼容？

## A:并不是完全不能兼容，`Node.js`以及开始支持`ESM`，可以通过一些工具和转换器（如`Bable`）将`CJS`模块转化为`ESM`模块，从而实现部分兼容

