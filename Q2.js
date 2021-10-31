var find_scope="global";//declared outside of all functions,so scope is global
console.log("This variable has "+find_scope+" scope");

var parent1=function()
{   
    console.log("This variable has "+find_scope+" scope");//not declared within this function,so access global variable
    child1();
    function child1()
    {
        var find_scope="function";
        console.log("This variable has "+find_scope+" scope");//access the variable declared within this function
    }
    child2();
    function child2()
    {
        console.log("This variable has "+find_scope+" scope");//access the global variable 
    }
}
parent1();

var parent2=function()
{   
    var find_scope="function";//This time declared within the function
    console.log("This variable has "+find_scope+" scope");//access the variable declared within this function
    child3();
    function child3()
    {
        var find_scope="function";
        console.log("This variable has "+find_scope+" scope");//access the variable declared within this function 
    }
    child4();
    function child4()
    {
        console.log("This variable has "+find_scope+" scope");//access the variable declared within its parent function
    }
}

parent2();
