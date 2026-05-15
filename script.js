function showMessage() {
    alert("Going to game pitch!");
}

let button = document.getElementById("playButton")
button.onmouseover = function() {

    button.style.backgroundColor = "orange";

    document.getElementById("playButton").innerHTML =
      "This will take you to my game pitch!";

}
button.onmouseout = function() {
    button.style.backgroundColor = "pink";
}


function changeImage() {

  let currentImage =
    document.getElementById("gameImage");

  if (currentImage.src.includes("image1.png")) {

    currentImage.src = "image2.png";

  }

  else if (currentImage.src.includes("image2.png")) {

    currentImage.src = "image3.png";

  }

  else {

    currentImage.src = "image1.png";

  }

}