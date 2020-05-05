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

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   // [propName: string]: any
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig); // 使用断言不会进行类型检查

// let mySquare = createSquare({ colour: "red", width: 100 })

// let squareOptions = {colour: 'red',width: 1000}
// let mySquare = createSquare(squareOptions)


// ts的接口: 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

// interface config {
//   name: string, // name是必选的  而且name的值是string类型的
//   age?: number, // age的值  不是必须的   值必须是 number类型的
//   readonly weight: number, // weight的值是只读的  值必须是number类型的
//   [otherOptions: string]: any,  // 可以添加一些接口中没有定义的值   值的类型是any
// }

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


// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// }

// 可索引的类型
// interface stringArray {
//   [index: number]: string
// }

// let myArray: stringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];



/*
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
// 错误：使用'string'索引，有时会得到Animal!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }
interface NumberDictionary {
  [index: string]: number | string;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface ReadonlyStringArray {
  readonly [index: number]: string
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"]
*/




// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }



// 继承接口
// interface a{
//   color: string
// }
// interface b extends a{
//   width: number
// }
// interface c extends b{
//   height: number
// }
// let obj = <c>{}
// obj.color = '123'
// obj.width = 123

 
// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {
    let obj = <Counter>function(start: number){}
    obj.interval = 123
  };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

