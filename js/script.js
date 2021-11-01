window.addEventListener('load', function(){
    document.getElementById('submit').addEventListener("click", function(){
        checkFields();
    })
});

function checkFields(){
	var firstName = document.getElementById("first_name_field").value;
	var lastName = document.getElementById("last_name_field").value;
	var userName = document.getElementById("username_field").value;
	var email = document.getElementById("email_field").value;
	var phoneNumber = document.getElementById("phone_field").value;
	var dateBirth = document.getElementById("date_field").value;


	if(firstName == "" || lastName == "" || userName == "" || email == ""|| phoneNumber == "" || dateBirth == ""){
		alert("All fields should be filled in! Please check and fill in the missing fields.");
		return false;
	}else if(!document.getElementById("age-verification").checked){
		alert("You Must Be 18 or Over!");
		return false;
	}else if(!document.getElementById("shooter_games").checked && !document.getElementById("puzzle_games").checked && !document.getElementById("sports_games").checked && !document.getElementById("racing_games").checked){
		alert("At least one game genre should be checked!");
		return false;
	}
	else{
		alert("Sign Up Complete!");
		alert("Your next game to test will be sent to you email: " + email);
		return true;
	}
}


