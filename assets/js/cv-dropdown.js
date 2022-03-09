
function myCv(id) {
  var x = document.getElementById("mycv");
  if (x.style.display === "block") {
    x.style.display = "none";
    id.innerHTML = "Download Cv";
  } else {
    x.style.display = "block";
   id.innerHTML = "Close Cv!";
  }
};


// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var btnIcon = document.getElementById("myresume");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
btnIcon.onclick = function () {
  modal.style.display = "block";
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};







