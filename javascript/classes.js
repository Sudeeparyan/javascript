// document.getElementById("demo").innerHTML = "This is Sudeep Aryan";
// document.getElementById("text").value="Have a nice day";
// document.getElementById("demo").style.color="red";
// document.getElementById("demo").addEventListener("click", function)

// function myfun(){
//     let x=document.getElementById("numb").value;
//     let text;
//     if(isNaN(x)|| x<1 || x>10 )
//     {
//         text="Input not Valid";
//     }
//     else{
//         text="Input OK";
//     }
//     document.getElementById("demo").innerHTML=text;
// }


function myfun(){
    let x=document.getElementById("num").value;
    let test;
    if (isNaN(x)|| x<1 || x>10){
        test="Input not Valid";
    }else{
        test="Input OK";
    }
    document.getElementById("demo").innerHTML=test;
}

function col(){
    document.getElementById("color").style.color="red";
    
}
document.getElementById("new").style.color="green";


function mover(obj){
    obj.innerHTML="Thank You"
}
function mout(obj){
    obj.innerHTML="Mover Over Me"
}

function mdown(obj){
    obj.innerHTML="Release Me";
    obj.style.backgroundColor="blue";
}
function mup(obj){
    obj.innerHTML="Thank YOU";
    obj.style.backgroundColor="gray";
}
document.getElementById("demo").innerHTML=document.body.innerHTML;