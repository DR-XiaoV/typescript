// function test(obj: {label: string}){
//   console.log(obj.label)
// }
// let myobj = {size: 10,label: 'qwer'}
// test(myobj)

// interface objValue{
//   label: string
// }
// function test(obj: objValue): void{
//   console.log(obj.label)
// }
// let myobj = {size: 10,label: 'qwer'}
// test(myobj)

// 定义一个接口
// interface myConfig{
//   color?: string,
//   width: number
// }
// function test(config: myConfig): {color: string; area: number} {
//   let newConfig = {color: 'red', area: 124}
//   if(config.color){
//     newConfig.color = config.color
//   }
//   if(config.width){
//     newConfig.area = config.width * config.width
//   }
//   return newConfig
// }
// let res = test({width: 3000})
// console.log(res)



// interface point{
//   readonly x: number;
//   readonly y: number;
// }

// let pl: point = {x : 10, y: 20}
// // pl.x = 12; error

// let arr: Array<any> = [12,2,3,'12',false]
// let map: Array<string> = ['123','23']
// let arr1: ReadonlyArray<any> = arr
// arr[1] = 123;
// arr1[1] = 356;
// console.log(arr1)
// map = arr1
// console.log(map);
// map = arr1 as number[];

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

interface SquareConfig {
  color?: string;
  width?: number;
  // [propName: string]: any
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig); // 使用断言不会进行类型检查

// let mySquare = createSquare({ colour: "red", width: 100 })

let squareOptions = {colour: 'red',width: 1000}
let mySquare = createSquare(squareOptions)


// ts的接口: 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

interface config {
  name: string, // name是必选的  而且name的值是string类型的
  age?: number, // age的值  不是必须的   值必须是 number类型的
  readonly weight: number, // weight的值是只读的  值必须是number类型的
  [otherOptions: string]: any,  // 可以添加一些接口中没有定义的值   值的类型是any
}

// 额外的属性检查
// 对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。
// 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

// 三种解决办法
// 最简便的方法是使用类型断言：
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 在接口中使用自定义值
// interface config {
  // [otherOptions: string]: any
// }

// 将这个对象赋值给一个另一个变量
