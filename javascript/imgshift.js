const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Img.png") {
    myImage.setAttribute("src", "IMG!.png");
  } else {
    myImage.setAttribute("src", "Img.png");
  }
};