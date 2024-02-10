// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#btnSubmit").click(function () {

    //establish variables with values taken from html
    var iHours = parseFloat($("#numHours").val());
    var ichargePerHour = parseFloat($("#chargePerHour").val());

    //validate a positive entry and correct a negative one
    if (iHours > 0)
    {
        //move forward with correct input
        var quote = iHours * ichargePerHour;
        $("#totalPrice").val(quote.toFixed(2));
    }
    else
    {
        //set boxes to empty, alert them to enter a valid positive number, set the cursor to the hours box
        $("#numHours").val("");
        $("#totalPrice").val("");
        alert("Please enter a valid positive number.")
        $("#numHours").val("").focus();
    }    
})