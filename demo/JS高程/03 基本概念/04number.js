/*
* @Author: hua03
* @Date:   2017-08-04 19:24:35
* @Last Modified by:   hua03
* @Last Modified time: 2017-08-04 20:24:12
*/

/**
 * 1.八进制严格模式无效
 */


// 'use strict';
/*var no = 071;
console.log(no);
*/
var no16 = 0x1f;
console.log(no16);

var a = 0.23;
var b = 0.07;
var c = 0.3;
console.log(a+b == c);
console.log(a+b);


console.log("最大数：" + (Number.MAX_VALUE + Number.MAX_VALUE));
console.log("最小数：" + (Number.MIN_VALUE / Number.MIN_VALUE));

console.log(isFinite(Number.MAX_VALUE));

console.log(1321/0);
console.log(NaN == NaN);
console.log(isNaN("13ble"));
console.log(isNaN("13"));

var arr = [3,4];
console.log(Number(arr));
console.log(arr.toString());
// console.log(valueOf(arr));

var no = parseInt("ae", 10);
console.log(no);

