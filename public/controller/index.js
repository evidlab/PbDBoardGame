function shuffle() {
  var container = document.getElementById("deck");
  var elementsArray = collectionToArray(container.getElementsByClassName('pycard'));
  elementsArray.forEach(function(element){
    container.removeChild(element);
  });
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
    container.appendChild(element);
  });
  return elementsArray[0].childNodes[1].id;
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
  // disableElements(obj);

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
  var chosen = shuffle();
  cardEvent(chosen);
}

function cardEvent(elem){
  var points;
  var devType = "dev";
  var userType = "user";
  if(elem = "card_2"){

  }else if (elem = "card_3"){

  }else if (elem = "card_4"){
    points = 1;
    addPoints(points, devType);
  }else if (elem = "card_5"){
    points = 2;
    addPoints(points, devType);
  }else if (elem = "card_6"){
    points = 3;
    addPoints(points, devType);
  }else if (elem = "card_7"){

  }else if (elem = "card_8"){

  }else if (elem = "card_9"){

  }else if (elem = "card_10"){

  }else if (elem = "card_11"){

  }else if (elem = "card_12"){

  }else if (elem = "card_13"){

  }else if (elem = "card_14"){

  }else if (elem = "card_15"){

  }else if (elem = "card_16"){

  }else if (elem = "card_17"){

  }else if (elem = "card_18"){

  }else if (elem = "card_19"){

  }else if (elem = "card_20"){

  }else if (elem = "card_21"){

  }else if (elem = "card_22"){

  }else if (elem = "card_23"){

  }else if (elem = "card_2"){

  }else if (elem = "card_24"){

  }else if (elem = "card_25"){

  }else if (elem = "card_26"){
    $.ajax({
      url:"/gameBoard",
      type: 'GET',
      success: function(data){
        if (data > 15){
          points = 1;
          addPoints(points, devType);
        }
      }
    });

  }else if (elem = "card_27"){

  }else if (elem = "card_28"){

  }else if (elem = "card_29"){

  }else if (elem = "card_30"){

  }else if (elem = "card_31"){
    points = 3;
    addPoints(points, userType);

  }else if (elem = "card_32"){
    points = 2;
    addPoints(points, userType);
  }else if (elem = "card_33"){
    points = 1;
    addPoints(points, userType);
  }
}

// function disableElements(elem) {
//   var elem_id = elem.id;
//
//   if (elem_id == "arrow_one"){
//     var row = document.getElementsByClassName("row-one-a");
//     for(var i = 0; i < row.length; i++){
//       row[i].setAttribute("style", "opacity: 0.4; pointer-events: none");
//     }
//   }else if (elem_id == "arrow_two") {
//     var row = document.getElementsByClassName("row-one-b");
//     for(var i = 0; i < row.length; i++){
//       row[i].setAttribute("style", "opacity: 0.4; pointer-events: none");
//     }
//     // row.style.opacity = "0.4";
//     // row.stlye.pointerEvents = "none";
//   }else if (elem_id == "arrow_three") {
//
//   }else if (elem_id == "arrow_four") {
//
//   }else if (elem_id == "arrow_five") {
//
//   }else if (elem_id == "arrow_six") {
//
//   }else if (elem_id == "arrow_seven") {
//
//   }else if (elem_id == "arrow_eight") {
//
//   }else if (elem_id == "arrow_nine") {
//
//   }else if (elem_id == "arrow_ten") {
//
//   }else if (elem_id == "arrow_eleven") {
//
//   }
// }

function addPoints(points, type){
  $.ajax({
    url:"/gameBoard",
    type: 'PUT',
    data: {params: points, type: type}
  });
}

function collected(obj, item) {
  var currentDiv = obj.parentElement;
  var devTime;
  var userTrust;
  var devType = "dev";
  var userType = "user";
  if(obj.className == 'collect-button'){
    devTime = parseInt(currentDiv.getElementsByClassName('cost')[0].innerHTML);
    userTrust = parseInt(currentDiv.getElementsByClassName('cost')[1].innerHTML);
    addPoints(devTime, devType);
    addPoints(userTrust, userType);
    currentDiv.style.backgroundImage = "radial-gradient(white, blue)";
    currentDiv.innerHTML = "<span style='font-size:30px; color: white'>Collected</span>";

  } else {
    devTime = parseInt(currentDiv.getElementsByClassName('cost')[0].innerHTML);
    userTrust = parseInt(currentDiv.getElementsByClassName('cost')[1].innerHTML);
    addPoints(devTime, devType);
    addPoints(userTrust, userType);
    currentDiv.style.backgroundImage = "radial-gradient(white, red)";
    currentDiv.innerHTML = "<span style='font-size:30px; color: white'>Not Collected</span>";
  }
  openNav();

}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}
