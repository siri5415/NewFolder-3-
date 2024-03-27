//self-Invoking function
(function(a){
    console.log("calling self invoking function:"+a*a);
    return a*a;
}(5));