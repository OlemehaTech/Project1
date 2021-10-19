

function checkFields(){
	var firstName = document.getElementById("first_name_field").value;
	var lastName = document.getElementById("last_name_field").value;
	var userName = document.getElementById("username_field").value;
	var email = document.getElementById("email_field").value;
	var phoneNumber = document.getElementById("phone_field").value;
	var dateBirth = document.getElementById("date_field").value;


	if(firstName == "" || lastName == "" || userName == "" || email == ""|| phoneNumber == "" || dateBirth == ""){
		document.getElementById("errorMsg").innerHTML = "All fields should be filled in! Please check and fill in the missing fields.";
		return false;
	} 
	if(!document.getElementById("age-verification").checked){
		document.getElementById("errorMsg").innerHTML = "You Must Be 18 or Over!";
		return false;
	}else if(!document.getElementById("shooter_games").checked && !document.getElementById("puzzle_games").checked && !document.getElementById("sports_games").checked && !document.getElementById("racing_games").checked){
		alert("At Least One Should be Checked!");
		return false;
	}
	else{
		return true;
	}
}

document.getElementById("submit"). addEventListener("click", 
	function(evt){
		evt.preventDefault();

		if(checkFields()){
			alert("Congratulations on Completing Your Sign Up! We will send you a confirmation via email: " + email +  " and phone: " + phoneNumber);
		}
		input.value = '';
	}	
);