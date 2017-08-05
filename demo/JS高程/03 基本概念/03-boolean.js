/*
* @Author: hua03
* @Date:   2017-08-04 19:03:34
* @Last Modified by:   hua03
* @Last Modified time: 2017-08-04 19:24:23
*/

var no1 = 1;
console.log("1==true? : " + (1 == true));
console.log(Boolean(no1));
var no0 = 0;
console.log(Boolean(no0));
var no2 = 2;
console.log(Boolean(no2));
var no3 = -1;
console.log(Boolean(no3));
var no4 = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
console.log(no4);
console.log(Boolean(no4));

var no;
console.log(Boolean(no));
var cat = null;
console.log("null:  " + Boolean(cat));

if (no1){
  console.log("自动转换");
}
