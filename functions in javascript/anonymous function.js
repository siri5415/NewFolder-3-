var anon=function (a,b){

    console.log("anonymous function is called");
     return a+b;
}

anon(2,2);
setTimeout(function(){console.log("anonymous function call in setTimeout")},3000);