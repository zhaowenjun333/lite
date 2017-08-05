'use strict';
/**
 * [GetDateStr 获取目标日期，比如今天，明天，后天未来几天，或者之前几天]
 * @param {[Number]} AddDayCount [想要获取哪天的日期，未来日期为正数，过去为负数]
 * @return {[String]} [返回日期 例如：2017-07-20]
 */
function GetDateStr(AddDayCount) {
/*  if(valueOf(AddDayCount)){
    AddDayCount = valueOf(AddDayCount);
  } else {
    error("GetDateStr: 参数错误");
    return;
  }*/
  var today = new Date();  
  var dd = new Date(today.getTime()+AddDayCount*86400000);//获取AddDayCount天后的日期  
  var y = dd.getFullYear();   
  var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0  
  var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0  
  return y+"-"+m+"-"+d;   
}  
console.time('123');
console.log(123);
console.timeEnd("123");


console.log("半年前："+GetDateStr(-180));  
console.log("三月前："+GetDateStr(-90));  
console.log("一月前："+GetDateStr(-30));  
console.log("昨天："+GetDateStr(-1));  
console.log("今天："+GetDateStr(0));  
console.log("明天："+GetDateStr(1));  
console.log("后天："+GetDateStr(2));  
console.log("一月后："+GetDateStr(30));  
console.log("三月后："+GetDateStr(90));  
console.log("半年后："+GetDateStr(180)); 

console.error("123");

console.warn("11111");
console.warn("11111");
console.warn("11111");
console.warn("11111");
