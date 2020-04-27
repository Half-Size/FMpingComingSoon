var form = document.notifyForm;
var emailBox = document.notifyForm.email;
var errorMsg = document.getElementById('invalidEmail')

//Turn off browser validation messages
form.setAttribute('novalidate', true);

//Function to define how page behaves if data input is invalid
function error(message){
    event.preventDefault();
    errorMsg.innerHTML = message;
    emailBox.classList.add('inval');
}

//Function to validate input
function validate(field){
    //check the validity of the input and store it variable
    var validity = emailBox.validity

    //if the box is empty prevent form submit and print error message
    if (validity.valueMissing){
        error("Whoops! It looks like you forgot to add your email");

    //if the input is not a valid email address prevent form submit and print error
    } else if (validity.typeMismatch) {
        error("Please provide a valid email address");
    }
};

//Listen for user attempt to submit email and run validate function on input
form.addEventListener("submit", validate);