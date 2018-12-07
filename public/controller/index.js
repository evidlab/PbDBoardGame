let deckArray = [];
let chosenCardsArray = [];
let gameTabs = [];
let chosenTabs = {};
let decisionsMade = [];

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function drawCard(obj) {
  shuffleArray(deckArray)
  // disableElements(obj);
  var activeCardsArray = [];
  var collected_cards = document.getElementById('collected-cards');
  var deck = document.getElementsByClassName('pycard');
  var currentDiv = obj.parentElement;
  var arrow_number = obj.getAttribute('data-arrow-value');
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal
  modal.style.display = "block";
  // var chosen = shuffle();
  var modal_div = document.getElementById('deck_content');
  for (var i = 0; i < arrow_number; i++){
    var elem_copy = deckArray[i].cloneNode(true);
    collected_cards.appendChild(elem_copy);
    modal_div.appendChild(deckArray[i]);
    chosenCardsArray.push(elem_copy);
    activeCardsArray.push(deckArray[i]);
  }

  cardEvent(activeCardsArray);
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      while(modal_div.firstChild){
        modal_div.removeChild(modal_div.firstChild);
      }
      deckArray.splice(0, arrow_number);
      openNav();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          while(modal_div.firstChild){
            modal_div.removeChild(modal_div.firstChild);
          }
          deckArray.splice(0, arrow_number);
          openNav();
      }
  }
}

function decisionCardEvent(){

}

function cardEvent(elem){
  var points;
  var devType = "dev";
  var userType = "user";
  for (var i = 0; i < elem.length; i++){
    points = 0;
    var selected_card;
    selected_card = elem[i].childNodes[1].id;
    switch(selected_card) {
      case "card_2":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-two-a"){
            point += -1;
          }else if(pointer_elem == "container-three-a"){
            point += -1;
          }else if(pointer_elem == "container-five-a"){
            point += -1;
          }
        }
        addPoints(points, devType);
        break;
      case "card_3":
        for(var key in chosenTabs){
          var pointer_elem = chosenTabs[i].classList.item(1);
          // if(pointer_elem == ""){
          //
          // }
        }
        break;
      case "card_4":
        points = 1;
        addPoints(points, devType);
        break;
      case "card_5":
        points = 2;
        addPoints(points, devType);
        break;
      case "card_6":
        points = 3;
        addPoints(points, devType);
        break;
      case "card_7":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-three"){
            points = 2;
            addPoints(points, devType);
          }else{
            //if you plan to share infromation in the future gain two points
          }
        }
        break;
      case "card_8":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-five"){
            points = 2;
            addPoints(points, devType);
          }else{
            //If you decide to share purchasing information with other companies in the future,
            //gain 2 additional Developer Resources
          }
        }
        break;
      case "card_9":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-seven"){
            points = 2;
            addPoints(points, devType);
          }else{
            //If you decide to share contact lists with other companies
            //in the future, gain 2 additional Developer Resources.
          }
        }
        break;
      case "card_10":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 2;
            addPoints(points, devType);
          }else{
            //If you decide to share location data with other companies
            //in the future, gain 2 additional Developer Resources.
          }
        }
        break;
      case "card_11":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 1;
            addPoints(points, devType);
          }else{
            //If you decide to collect location data to provide service and maintain
            //site in the future, gain 1 additional Developer Resources.
          }
        }
        break;
      case "card_13":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 1;
            addPoints(points, devType);
          }else{
            //If you decide to collect site activity for profiling
            // in the future, gain 1 additional Developer Resource.
          }
        }
        break;
      case "card_14":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 1;
            addPoints(points, devType);
          }else{
            //If you decide to collect contact lists to provide service and maintain
            //site in the future, gain 1 additional Developer Resource.
          }
        }
        break;
      case "card_15":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 1;
            addPoints(points, devType);
          }else{
              //If you decide to collect demographic information to provide service and maintain site
              //in the future, gain 1 additional Developer Resource.
          }
        }
        break;
      case "card_17":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 3;
            addPoints(points, userType);
          }else{
              //If you decide not to collect contact lists
              //for any reason in the future, gain 3 additional User Trust.
          }
        }
        break;
      case "card_18":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 3;
            addPoints(points, userType);
          }else{
              //If you decide not to collect contact lists
              //for any reason in the future, gain 3 additional User Trust.
          }
        }
        break;
      case "card_19":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 3;
            addPoints(points, userType);
          }else{
              //If If you decide not to collect demographic
              //information for any reason, gain 3 additional user trust
          }
        }
        break;
      case "card_20":
        //If you ever share more than 3 types of data with other companies, lose 2 User Trust and 2 Developer Resources.

        //If you ever share 1 or 2 types of data, lose 1 User Trust and 2 Developer Resources.
        break;
      case "card_21":
        //If you currently share no data with other companies, gain 2 User Trust & 2 Developer Resources.

        //If you currently share less than 3 data types, gain 1 User Trust & 1 Developer Resource.
        break;
      case "card_22":
        //You must choose to collect either purchasing OR demographic information for profiling. Adjust your score accordingly.

        break;
      case "card_23":
      //Negotiate with marketing to share either Demographic or Purchasing Information data, adjust your score accordingly, and gain 1 additional Developer Resource.

        break;
      case "card_24":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 3;
            addPoints(points, userType);
          }else{
              //If you decide not to collect health information for any
              //reason in the future, gain 3 additional Developer Resources.
          }
        }
        break;
      case "card_25":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = 3;
            addPoints(points, userType);
          }else{
              //If you decide not collect contact lists for any
              //reason in the future, gain 1 additional Developer Resource.
          }
        }
        break;
      case "card_26":
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
        break;
      case "card_28":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = -2;
            addPoints(points, userType);
          }else{
              //If you decide to share health information with other
              //companies in the future, lose an additional 2 User Trust.
          }
        }
        break;
      case "card_29":
        for (var i = 0; i < chosenTabs.length; i++){
          var pointer_elem = chosenTabs[i].classList.item(1);
          if(pointer_elem == "container-"){
            points = -2;
            addPoints(points, userType);
          }
        }
        break;
      case "card_30":
        //If you already collect location data for any reason, lose an additional -2 User Trust
        break;
      case "card_31":
        points = 3;
        addPoints(points, userTrust);
        break;
      case "card_32":
        points = 2;
        addPoints(points, userTrust);
        break;
      case "card_33":
        points = 1;
        addPoints(points, userTrust);
        break;
      case "card_34":

        break;
      case "card_36":

        break;
      default:
    }
  }
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

function addPoints(points, type){
  $.ajax({
    url:"/gameBoard",
    type: 'PUT',
    data: {params: points, type: type}
  });
}

function collected(obj, item) {
  var currentDiv = obj.parentElement;
  var tabId =  currentDiv.id;
  var devTime;
  var userTrust;
  var devType = "dev";
  var userType = "user";
  var collected;
  if(obj.className == 'collect-button'){
    collected = 0;
    chosenTabs[tabId] = collected;
    devTime = parseInt(currentDiv.getElementsByClassName('cost')[0].innerHTML);
    userTrust = parseInt(currentDiv.getElementsByClassName('cost')[1].innerHTML);
    // addPoints(devTime, devType);
    // addPoints(userTrust, userType);
    currentDiv.style.backgroundImage = "radial-gradient(white, blue)";
    currentDiv.style.opacity = "0.7";
    // currentDiv.innerHTML = "<span style='font-size:30px; color: white'>Collected</span>";
    currentDiv.innerHTML = "<h4 style='color: white;'>Provide Service, Maintain Site</h4>"+
    "<span style='color: white; font-size: 24pt;' class = 'cost'>"+devTime+"</span>"+
    "<img class = 'img-resource' src='/images/resources.png' alt='resources' height='60' width='60'>"+
    "<span></span>"+
    "<br>"+
    "<span style='color: white; font-size: 24pt;' class = 'cost'>"+userTrust+"</span>"+
    "<img class = 'img-trust' src='images/trust.png' alt='trust' height='60' width='60'>"+
    "<span></span>"+
    "<span style='font-size:30px; color: white; background-color: black;'>Collected</span>";

  } else {
    collected = 1;
    chosenTabs[tabId] = collected;
    devTime = parseInt(currentDiv.getElementsByClassName('benefit')[0].innerHTML);
    userTrust = parseInt(currentDiv.getElementsByClassName('benefit')[1].innerHTML);
    // addPoints(devTime, devType);
    // addPoints(userTrust, userType);
    currentDiv.style.backgroundImage = "radial-gradient(white, red)";
    currentDiv.style.opacity = "0.7";
    currentDiv.innerHTML = "<h4 style='color: white;'>Provide Service, Maintain Site</h4>"+
    "<span></span>"+
    "<img class = 'img-resource' src='/images/resources.png' alt='resources' height='60' width='60'>"+
    "<span style='color: white; font-size: 24pt;' class = 'cost'>"+devTime+"</span>"+
    "<br>"+
    "<span></span>"+
    "<img class = 'img-trust' src='images/trust.png' alt='trust' height='60' width='60'>"+
    "<span style='color: white; font-size: 24pt;' class = 'cost'>"+userTrust+"</span>"+
    "<br>"+
    "<span style='font-size:30px; color: white; background-color: black;'>Not Collected</span>";
  }
  openNav();

}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}

$('document').ready(function(){
  let parentDeck = document.getElementById('deck');
  let childCards = document.getElementsByClassName('pycard');
  deckArray = [...childCards];

  //Add Tabs to deckArray
  let tabs = document.getElementsByClassName('tabs');
  gameTabs = [...tabs];

});
