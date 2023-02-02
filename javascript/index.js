// var paraReference =document.getElementsByTagName("p");
// paraReference[0].style.color="blue"
// paraReference[1].style.color="green"
// paraReference[2].style.color="gray"
// paraReference[3].innerText="Hi all"
// paraReference[4].innerHTML="<h1>Sudeep Aryan</h1>"
// var headerReference = document.getElementById("header");
// headerReference[0].style.color="blue";
// headerReference[0].style.fontSize="40px";
// headerReference[1].innerText ="Hi all";

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// let intersetRate=0.3;
// intersetRate =1;
// console.log(intersetRate)

//Type of a noation
// let name="Sudeep";
// let age=30;
// let isApproved=false;
// let firstName=undefined;
// let selectedColor=null;

//array

// let selectedColor =['red','green','blue'];
// selectedColor[2]=2;
// console.log(selectedColor.length);


// function add(num){
//     console.log(num+"3")
// }
// add(10);

// function call(nam){
//     console.log(nam+"Aryan")
// }
// call("Sudeep " )

//Performing a task
    // function greet(name,lastName){
    //     console.log('Hello'+name+' '+lastName);
    // }
    // function sqaure(number){
    //     return number*number;
    // }
    // console.log(sqaure(2));



    //Conditional

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

// let name="hari";
// if (name==="aryan"){
//     alert("Sudeep is my favorite");
// }else alert("Aryan is my favorite");


// let myVariable = document.querySelector("hi");
// alert("hello")

// function multiple(num1,num2){
//     let result=num1*num2;
//     alert(result);
//     console.log(result);
//     return result;
// }
// multiple(5,9);

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
// });

// document.querySelector("html").addEventListener("click",()=>{
//     alert("Ouch! Stop poking me!");
// })
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Img.png") {
    myImage.setAttribute("src", "IMG!.png");
  } else {
    myImage.setAttribute("src", "Img.png");
  }
};
