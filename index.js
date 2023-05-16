// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo); //myovject.foo
//         console.log("outer func:  self.foo = " + self.foo);  //myObject.foo
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo); //myObject.
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

//////////////////////////////////////////////////////////////////


// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// console.log(foo1())

// function foo2()
// {
//   return
//       {
//       bar: "hello"
//   }
// }
// console.log(foo2())

//////////////////////////////////////////////


// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);


//////////////////////////////////////////////////////
```js
 (function() {
     console.log(1);   
    setTimeout(function(){console.log(2)}, 1000); 
     setTimeout(function(){console.log(3)}, 0); 
    console.log(4);  
 })();
```
///////////////////////////////////////////////////

//   function sum(x, y) {
//   if (y !== undefined) {
//     return x + y;
//   } else {
//     return function(y) { return x + y; };
//   }
// }
/////////////////////////////////////////////////////

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5







