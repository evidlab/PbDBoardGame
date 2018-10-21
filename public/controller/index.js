function shuffle() {
  var container = document.getElementById("deck");
  var elementsArray = collectionToArray(container.getElementsByClassName('pycard'));
  elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
    container.appendChild(element);
  })
};

function collectionToArray(collection) {
  var i;
  var arr = [];
  for (i = 0; i < collection.length; i++) {
    arr.push(collection[i]);
  }
  return arr.slice();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
   }
   return array;
}


function drawCard(obj) {
  disableElements(obj);

  var currentDiv = obj.parentElement;

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

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
  shuffle();
}

function disableElements(elem) {
  var elem_id = elem.id;

  if (elem_id == "arrow_one"){
    var row = document.getElementsByClassName("row-one-a");
    for(var i = 0; i < row.length; i++){
      row[i].setAttribute("style", "opacity: 0.4; pointer-events: none");
    }
  }else if (elem_id == "arrow_two") {
    var row = document.getElementsByClassName("row-one-b");
    for(var i = 0; i < row.length; i++){
      row[i].setAttribute("style", "opacity: 0.4; pointer-events: none");
    }
    // row.style.opacity = "0.4";
    // row.stlye.pointerEvents = "none";
  }else if (elem_id == "arrow_three") {

  }else if (elem_id == "arrow_four") {

  }else if (elem_id == "arrow_five") {

  }else if (elem_id == "arrow_six") {

  }else if (elem_id == "arrow_seven") {

  }else if (elem_id == "arrow_eight") {

  }else if (elem_id == "arrow_nine") {

  }else if (elem_id == "arrow_ten") {

  }else if (elem_id == "arrow_eleven") {

  }
}


function collected(obj, item) {
  var currentDiv = obj.parentElement;
  if(obj.className == 'collect-button'){
    currentDiv.style.backgroundImage = "radial-gradient(white, blue)";
    currentDiv.innerHTML = "<span style='font-size:30px; color: white'>Collected</span>";
  } else {
    currentDiv.style.backgroundImage = "radial-gradient(white, red)";
    currentDiv.innerHTML = "<span style='font-size:30px; color: white'>Not Collected</span>";
  }
  openNav();

}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
