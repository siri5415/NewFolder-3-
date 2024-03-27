// using constructors
var cons=new Function("a","b","console.log('in constructors function');return a+b;");
console.log(cons(5,5));