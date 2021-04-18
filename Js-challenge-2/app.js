const form = document.getElementById('form'),
      firstName = document.getElementById('fname'),
      lastName = document.getElementById('lname'),
      email = document.getElementById('email'),
      password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;

    const span = formControl.querySelector('span');

    span.innerText = message;

    formControl.className = 'form-control error'
}


function setSuccessFor(input) {
    const formControl = input.parentElement; 

    formControl.className = 'form-control success';
}


function checkInput() {
    
    const fNameValue = firstName.value.trim();
    const lNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    //First Name Validation
    if(fNameValue === '') {
        
        setErrorFor(firstName, 'First Name cannot be empty');
    }
    else {
        
        setSuccessFor(firstName);
    }

    //Last Name Validation
    if(lNameValue === '') {

        setErrorFor(lastName, 'Last Name cannot be empty');
    }
    else {
        
        setSuccessFor(lastName);
    }


    //Email validation
    if(emailValue === '') {

        setErrorFor(email, 'Email cannot be empty');

    }
    else if(!isEmailValid(emailValue)){

        setErrorFor(email, 'Looks like this is not an email');

    }
    else {
        setSuccessFor(email);
    }

    //Password Validation
    if(passwordValue === '') {
        
        setErrorFor(password, 'Password cannot be empty');
    }
    else {
        
        setSuccessFor(password);
    }
}

function isEmailValid(email) {

    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);

}

