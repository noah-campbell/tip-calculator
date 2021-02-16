function calculate() {
	var bill = document.getElementById("bill").value;
	var serviceQuality = document.getElementById("range").value;
	var partySize = document.getElementById("people").value;

	var tip = bill * serviceQuality;
	var tipPerPerson = tip / partySize;

	/** Check for empty input fields, else display the tip breakdown **/
	if (bill==null || bill=="") {
		alert("You Didn't Do Anything!");
		return false;
	} else {
		document.getElementById("tipTotal").innerHTML = "Total tip $" + Math.round((tip)*100)/100;
	};

	if (partySize==null || partySize=="") {
		return false;
	} else {
		document.getElementById("perPerson").innerHTML = "$" + Math.round((tipPerPerson)*100)/100 + " per person";
	};
/**
	console.log(bill);
	console.log(serviceQuality);
	console.log(partySize);
	console.log(tip);
	console.log(tipPerPerson);
**/
}



