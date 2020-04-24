var form = document.notifyForm;
form.setAttribute('novalidate', true);
var emailBox = document.notifyForm.email;

function validate(field){
    event.preventDefault();
    var validity = emailBox.validity

    if (validity.valueMissing){
        document.getElementById('invalidEmail').innerHTML = "Whoops! It looks like you forgot to add your email";
        document.notifyForm.email.classList.add("inval");
    } else if (validity.typeMismatch) 
        document.getElementById('invalidEmail').innerHTML = 'Please provide a valid email address';
        document.notifyForm.email.classList.add("inval");
};

form.addEventListener("submit", validate);