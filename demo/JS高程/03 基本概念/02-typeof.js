/*
* @Author: hua03
* @Date:   2017-08-01 21:06:54
* @Last Modified by:   hua03
* @Last Modified time: 2017-08-04 18:57:15
*/

// 'use strict';
var str = "helloworld!";
var num = 123;
var un = undefined;
var un2;
var bool = false;
var null2 = null;
var obj = new Object();
var reg = new RegExp();
var arr = [];
var say = function() {
  console.log(13);
}
console.log(typeof str);
console.log(typeof num);
console.log(typeof un);
console.log(typeof un2);
console.log(typeof bool);
console.log(typeof null2);
console.log(typeof obj);
console.log(typeof reg);
console.log(typeof arr);
console.log("-------------------")
console.log(typeof say);
console.log("-------------------")
// 没声明会报错
// console.log(age);
console.log(typeof age);


/*tips：报错，函数变量声明提前*/
// var eval = 12;
// var arguments = 13;
// console.log(arguments);

console.log("用null判断变量是否存在：")
var cat = "ca";
console.log(cat != null);
var ca;
console.log(null == ca);