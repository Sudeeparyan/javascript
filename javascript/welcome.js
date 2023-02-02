let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi Bro this is, ${myName}`;    
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hi Bro this is, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };

// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if (!myName) {
//       setUserName();
//     } else {
//       localStorage.setItem("name", myName);
//       myHeading.textContent = `Mozilla is cool, ${myName}`;
//     }
//   }