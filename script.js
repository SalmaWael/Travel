//////arrow
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
////////////////////////////////////




/////////////////////////////////form
$('#usercheck').hide();
$('#emailvalid').hide();
$('#telephoneNumbervalid').hide();
$('#alertMsg').hide();

let usernameError = false;
let emailError = false;
let phoneError = false;

//validate Username
function validateUsername() {
  // let usernameValue = $('#username').val();
  const usernameValue = document.getElementById('username').value;
  if (usernameValue.length == '' || (!usernameValue.match(/^[A-Za-z]{3,10}$/))) {
    $('#usercheck').show();
    usernameError = false;
  }
  else {
    $('#usercheck').hide();
    usernameError = true;
  }
}


// Validate phone number
function validatePhone() {
  const phoneValue = document.getElementById('telephoneNumber').value;
  if (phoneValue.length == '' || (!phoneValue.match(/^01[0125][0-9]{8}$/))) {
    $('#telephoneNumbervalid').show();
    phoneError = false;
  }
  else {
    $('#telephoneNumbervalid').hide();
    phoneError = true;
  }
}

// Validate Email
const email = document.getElementById('email');
function validateEmail() {

  let emailValue = email.value;
  if (emailValue == "" || (!emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
    $('#emailvalid').show();
    // console.log(emailValue);
    emailError = false;
  }
  else {
    // console.log(emailValue);
    $('#emailvalid').hide();
    emailError = true;

  }
}



// Submit button
$('#submitbtn').click(function (event) {
  validateUsername();
  validatePhone();
  validateEmail();
  if ((usernameError == true) &&
    (emailError == true) && (phoneError == true)) {
      $("#staticBackdrop").modal('show');
      document.getElementById("username").value = "";
      document.getElementById("telephoneNumber").value = "";
      document.getElementById("email").value = "";


  } else {
    event.preventDefault();
  }
});

//////////////////////////////////

///////////////////////////////////////////////counting down
// Set the date we're counting down to
var countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="StayTuned"
  document.getElementById("StayTuned").innerHTML ="Stay Tuned : "+ days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, change style
  if (distance < 0) {
    document.getElementById("StayTuned").style.display="none";
    document.getElementById("fire").style.display = "block";
  }
}, 100);

document.getElementById("playAnimation").onclick=function(){
  // document.getElementById("fire").style.display = "block";
  document.getElementById("fire").classList.toggle("animationDisplay");
}






