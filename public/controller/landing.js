
function instructions(){
  // Get the modal
  let modal = document.getElementById('instructionsModal');

  // Get the button that opens the modal
  let btn = document.getElementById("instructions-btn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  modal.style.display = "block";


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function background(){
  // Get the modal
  let modal = document.getElementById('backgroundModal');

  // Get the button that opens the modal
  let btn = document.getElementById("background-btn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal

  modal.style.display = "block";


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
