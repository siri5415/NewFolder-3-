//self-Invoking function
(function addNum(a,b){
    console.log("in self-Invoking function")
    return a+b;
}(5,8));