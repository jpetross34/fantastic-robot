const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

<form onsubmit="return false"></form>
var fields = {
    document.addEventListener("DOMContentLoaded", function () {
        fields.firstName = document.getElementById('firstName');
        fields.lastName = document.getElementById('lastName');
        fields.email = document.getElementById('email');
        fields.address = document.getElementById('address');
        fields.country = document.getElementById('country');
        fields.newsletter = document.getElementById('newsletter');
        fields.question = document.getElementById('question');
    })
}
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}
function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}
function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}
function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);
    valid &= arePasswordsEqual();

    return valid;
}
class User {
    constructor(firstName, lastName, address, country, email, newsletter, question) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.email = email;
        this.newsletter = newsletter;
        this.question = question;
    }
}
class User {
    constructor(firstName, lastName, address, country, email, newsletter, question) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.email = email;
        this.newsletter = newsletter;
        this.question = question;
    }
}
if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        myInitCode();
    });
}

function myInitCode() { }