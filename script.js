// function to show date

document.addEventListener("DOMContentLoaded",function() {
    
    const today = new Date();

    const day = today.getDate();
    const year = today.getFullYear();

    // months
    const monthname = [
        "Jan","Feb","Mar","Apr","May","June","july","Aug","Sept","Oct","Nov","Dec"
    ]
    const month = monthname[today.getMonth()];

    const formateDate = month+' '+ day.toString().padStart(2,'0')+' '+year;

    const predefined = "A letter From ";

    document.getElementById("dateareatext").value = predefined + formateDate;

    document.getElementById("dateareatext").placeholder = predefined + formateDate;

});


// function to validate email

function validateEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById('future-email').addEventListener('submit',function(event){
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    if (validateEmail(emailInput)) {
        errorMessage.textContent = "";
        alert("Email is valid!");

    } else {
        errorMessage.textContent = "Please enter a valid email address.";
    }
});