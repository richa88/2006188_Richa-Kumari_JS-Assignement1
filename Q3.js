
var a;//variable 'a' has only been declared not initialized,hence it is UNDEFINED
if(a==undefined)
{
    console.log("a is undefined");
}
a=5;//Now variable 'a' has been initialized,hence it is DEFINED
if(a==undefined)
{
    console.log("a is undefined");
}
else
{
    console.log("a has been defined");
}
console.log(b);//variable 'b' has not been even declared,hence it is NOT DEFINED
