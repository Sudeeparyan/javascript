let val;

function myfunction(e){
    val=e.target.value;
    // console.log(data);
    console.log(val);
    console.log(data[val]);

}

let city=document.querySelector("select").addEventListener("change",myfunction)



getText("./data.json");
let data;
async function getText(file){
    let myObject = await fetch(file);
    let myText = await myObject.json();
    data=myText
    // document.getElementById("data").innerHTML = myText;    
}



function myfunc(e){
    city=e.target.value;
    let headtext;
    if(city=="newyork")
    {
        headtext=mytext["newyork"]; 
        //headtext=;
    }
    else if(city=="nome")
    {
        headtext=mytext["nome"];
        headtext="Nome CIty";
    } 
    document.getElementByTag("h1")[0]=headtext;
}




