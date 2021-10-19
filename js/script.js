var firstName = document.getElementByID("first_name_field").value;
var lastName = document.getElementByID("last_name_field").value;
var userName = document.getElementByID("username_field").value;
var email = document.getElementByID("email_field").value;
var phoneNumber = document.getElementByID("phone_field").value;
var dateBirth = document.getElementByID("date_field").value;


function jsSwitch(){
	var html = document.getElementByTagName('html')[0];
	html.setAttribute('class','hasjs');
}
function checkFields(){
	if(firstName == null || lastName == null || userName == null || email == null || phoneNumber == null || dateBirth == null){
		alert("All fields should be filled in! Please check and fill in the missing fields.");
		return false;
	} 
}

window.addEventListener('load',jschg);