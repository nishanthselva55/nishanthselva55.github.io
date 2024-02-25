function promptName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("output").innerHTML = "Hello, " + name + "! My name is Nishanth. Thanks for visiting, I hope you enjoy your stay! :D";
    } 
}

function enlargeImage() {
    var img = document.getElementById("pic_of_me_professional");
   
    img.classList.toggle("enlarged");
}
