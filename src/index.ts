function foo(num: number) {
    if (num > 10) {
      return 'cool';
    }
} 

//console.log(foo().toString());  // ok, cool

console.log(foo(11).toString()); 

console.log(foo(1).toString());  // not cool bro, not cool ...