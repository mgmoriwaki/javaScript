//validate user input and return error messages
function validateItems() {
    var StartingNumber = Number(document.forms["evens"]["StartingNumber"].value);
    var EndingNumber = Number(document.forms["evens"]["EndingNumber"].value);
    var Step = Number(document.forms["evens"]["Step"].value);

    //If StartingNumber is NaN
    if (StartingNumber == "" || isNaN(StartingNumber)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["evens"]["StartingNumber"]
           .parentElement.className = "form-group has-error";
        document.forms["evens"]["StartingNumber"].focus();
        return false;
    }

    // If EndingNumber is NaN
   if (EndingNumber == "" || isNaN(EndingNumber)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["evens"]["EndingNumber"]
          .parentElement.className = "form-group has-error"
       document.forms["evens"]["EndingNumber"].focus();
       return false;
   }

   // If Step is NaN
   if (Step < 0 || isNaN(Step)) {
       alert("Step must be filled in with a positive number.");
       document.forms["evens"]["Step"]
          .parentElement.className = "form-group has-error"
       document.forms["evens"]["Step"].focus();
       return false;
   }
    
    //If EndingNumber is less than StartingNumber
    if (EndingNumber <= StartingNumber) {
        alert("The Ending Number must be greater than the Starting Number.");
        document.forms["evens"]["EndingNumber"]
           .parentElement.className = "form-group has-error"
        document.forms["evens"]["EndingNumber"].focus();
        return false;
    }

    var numbers = [];
    var counter = 0; //serves as index value
    

   for (var i=StartingNumber; i <= EndingNumber; i++) {
        if(i%2 == 0){ 
            alert("The number: " + i  + " is even, adding to array.");
            numbers[counter]=i;
            counter++;
        }else{
            alert("The number: " + i  + " is odd, not adding to array.");

        }
        i+= Step-1;
    }
  
    document.getElementById("results").style.display = "block";
    document.getElementById("evensMessage").innerText = 
    "Here are the even numbers between " + StartingNumber + " and " + EndingNumber + " by " + Step + "'s:";
    document.getElementById("evenNumbers").innerText= numbers.toString();

    return false;
}