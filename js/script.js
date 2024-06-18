const input = document.getElementById("input");

function reverseString(str){
	return str.split("").reverse().join("");
}

function check() {
	const value = input.value;
	const reverse = reverseString(input.value);
	
	if (value === reverse){
		input.value = "PALINDROME!";
		setTimeout(() => input.value = "", 1500);
	}
	else{
		input.value = "Not today...";
		setTimeout(() => input.value = "", 1500);
	}
}