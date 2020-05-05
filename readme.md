# typescript



## 数据类型

### 基本数据类型

```tsx
数字: let num: number = 123

字符串: let str: string = '123'

布尔值: let boo: boolean = false

数组: let arr: number[] = [1,2,3,4,5,6]
		 let arr1: Array<number> = [1,2,3,4,5,6]
```

### 元组

> 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。

```ts
let list: [string,number] = [123,'123']
```

### 枚举

> enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### 类型断言



## 函数
```tsx
function test: void(){ // void或者是any
  // 不能return
}

function test: string(){
  // 返回值只能是string
}
```
## interface
```tsx
ts的接口: 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

interface config {
  name: string, 
  // name是必选的  而且name的值是string类型的
  age?: number, 
 	// age的值  不是必须的   值必须是 number类型的
  readonly weight: number, 
  // weight的值是只读的  值必须是number类型的
  [otherOptions: string]: any,  
   // 可以添加一些接口中没有定义的值   值的类型是any
}

额外的属性检查
// 对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。
// 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

// 三种解决办法
// 最简便的方法是使用类型断言：
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// 在接口中使用自定义值
interface config {
   [otherOptions: string]: any
 }
// 将这个对象赋值给一个另一个变量
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```




