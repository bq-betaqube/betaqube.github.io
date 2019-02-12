

var emailObject = {
  emailFrom = '',
  emailTo = 'connect@betaqube.com',
  emailSubject = 'Contact Form Betaqube Web Application',
  emailMessage = '',
  firstName =  '',
  lastName = '',
  name = '',
  phoneNumber ='',
  api = 'BETAQUBE'
};


function sendRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('errorMessage').innerText = "";
      document.getElementById('successMessage').innerText = "Email is successfully sent";
    }
  };
  xhttp.open("POST", "https://email-services-dev.herokuapp.com/" , emailObject);
  xhttp.send();
}

function submitEmailForm() {
  var email = document.getElementById('email').value();
  var name = document.getElementById('name').value();
  var message = document.getElementById('message').value();

  if(email === null || email ==='') {
    document.getElementById('errorMessage').innerText = "Please enter an email Id";
  } else if (name === null || name ==='' ) {
    document.getElementById('errorMessage').innerText = "Please enter your name";
  } else if(message === null || message ==='') {
    document.getElementById('errorMessage').innerText = "Please enter your Message";
  } else {
    emailObject.name = name;
    emailObject.email = email;
    emailObject.message = message;
    sendRequest();
  }

}
