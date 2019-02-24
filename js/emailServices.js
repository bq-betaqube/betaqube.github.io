

var emailObject = {
  fromEmail : '',
  toEmail : 'connect@betaqube.com',
  emailSubject : 'Contact Form Betaqube Web Application',
  emailMessage : '',
  firstName : '',
  lastName : '',
  name : '',
  phoneNumber : '',
  api : 'BETAQUBE'
};


function sendRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && JSON.parse(this.response).status === 'success') {
      document.getElementById('errorMessage').innerText = "";
      document.getElementById('successMessage').innerText = "Email is successfully sent";
      document.getElementById('email').value = '';
      document.getElementById('name').value = '';
      document.getElementById('message').value = '';
    } else {
      document.getElementById('errorMessage').innerText = "Network error please try again";
    }
  };
  xhttp.open("POST", "https://email-services-dev.herokuapp.com/emails/standard" , true);
  xhttp.setRequestHeader( 'Content-Type', 'application/json' );
  xhttp.send(JSON.stringify(emailObject));
}

function submitEmailForm() {
  console.log('Hello Reached here');
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;

  if(email === null || email ==='') {
    document.getElementById('errorMessage').innerText = "Please enter an email Id";
  } else if (name === null || name ==='' ) {
    document.getElementById('errorMessage').innerText = "Please enter your name";
  } else if(message === null || message ==='') {
    document.getElementById('errorMessage').innerText = "Please enter your Message";
  } else {
    emailObject.name = name;
    emailObject.fromEmail = email;
    emailObject.emailMessage = message;
    sendRequest();
  }

}
