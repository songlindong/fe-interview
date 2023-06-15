// function fn() {
//     console.log('隐式绑定', this);
//    }

//    const obj = {
//      a: 1,
//      fn
//    }
//    obj.fn = fn;
//    obj.fn();
// function fn(num) {
//   let str = num.toString();
//   let str2 = null;
//   if(str.indexOf('.') !== -1) {
//       const str1 = str.split('.');
//       str  = str1[0];
//       str2 = str1[1];
//   }

//   let result = '';
//   while(str.length < 3){
//     result = ',' + str.slice(str.length -3, str.length) + result;

//     str = str.slice(0, str.length - 3);
//   }

//   if(str.length <= 3 && str.length > 0){
//       result = str + result
//   }

//   str2? result = result + '.' + str2 : ''

//   return result
  
// }

// fn(12242232)

// let a = 'abc'

// let b = a.slice(0,1)

// console.log(a)
// console.log(b)
const o1 = {
    text: 'o1',
    fn: function() {
        console.log('o1fn_this', this);
        return  this.text;
    }
   }

   const o2 = {
    text: 'o2', 
    fn: function() {
        return o1.fn();
    }
   }

   
   const o3 = {
    text: 'o3',
    fn: function() {
        let fn = o1.fn;
        return fn();
    }
   }

   // console.log('o1fn', o1.fn());
   // console.log('o2fn', o2.fn());
   console.log('o3fn', o3.fn());