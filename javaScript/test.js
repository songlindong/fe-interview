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

let a = 'abc'

let b = a.slice(0,1)

console.log(a)
console.log(b)