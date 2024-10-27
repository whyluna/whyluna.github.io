const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.jpg") {
    myImage.setAttribute("src", "images/firefox-icon.png");
  } else {
    myImage.setAttribute("src", "images/cat.jpg")
  }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
  const myName = prompt("pleace enter your name.")
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem("name", myName)
    myHeading.textContent = `Mozilla is cool,${myName}`
  }

}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name")
  myHeading.textContent = `Mozilla is cool,${storedName}`
}
myButton.onclick = () => {
  setUserName();
}

// localStorage.removeItem("name")