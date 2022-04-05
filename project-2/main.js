let $draggable = $('.box').draggabilly();

function schedule() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  var today = date.getHours();

  //apply the time to the html element
  $("#time").text(time);

  if ((today >= 5) && (today <= 19)) {
    //remove and add class to change the gradient of the bg
    console.log("day");
    $(".canvas").css("background-image", "linear-gradient(0deg,#93bc94,#f6d6c0,#acdbf6,#aa96c1,#93bc94,#f6d6c0,#acdbf6,#aa96c1,#93bc94,#f6d6c0,#acdbf6,#aa96c1,#93bc94)");
  } 
  
   else {
      console.log("night");
      //remove and add class to change the gradient of the bg
      $(".canvas").css("background-image", "linear-gradient(0deg,#b9dbef,#212358,#c39468,#d76735,#b9dbef,#212358,#c39468,#d76735,#b9dbef,#212358,#c39468,#d76735)");
    }

}

schedule();


// $(".canvas").css("background-image", "linear-gradient(0deg,#cf5c5c,#c19b4a,#def2a0,#c6ee4a,#42eca6,#64b3d9,#208ea2,#498ada,#5b73df,#897ed3,#cf5c5c,#c19b4a)");

// night #b9dbef,#212358,#c39468,#d76735
// day #93bc94,#f6d6c0,#acdbf6,#aa96c1