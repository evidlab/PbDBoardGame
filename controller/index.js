

var shuffle = function() {
  var container = document.getElementById("shuffle");
  var elementsArray = collectionToArray(container.getElementsByClassName('pycard'));
  elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
    container.appendChild(element);
  })
};

window.onload = function () {
  list = document.querySelectorAll(".collect-button");
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function (e) {
        e.shuffle();
    });
  }
};

// function shuffle() {
//     var container = document.getElementById("shuffle");
//     var elementsArray = collectionToArray(container.getElementsByClassName('pycard'));
//   	elementsArray.forEach(function(element){
//     	container.removeChild(element);
//     })
//     shuffleArray(elementsArray);
//     elementsArray.forEach(function(element){
//     container.appendChild(element);
//   })
// }


function drawCard(oby, item) {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementsByClassName(item)[0];

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

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
