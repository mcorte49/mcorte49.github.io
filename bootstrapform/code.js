function checkEmail()
{
    //check textboxes are not empty
    //check if both texts are the same

    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if(email == "") //conditional expression ; when true, code executes
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field.";
    }
    else{
        document.getElementById("email-error").innerHTML = "";
    }


    if(confirm == "") //conditional expression ; when true, code executes
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field.";
    }
    else{
        document.getElementById("confirm-error").innerHTML = "";
    }
    // check if both boxes have same value
    if(email != confirm)
    {
        //print error
        document.getElementById("email-error").innerHTML = "Both emails must be the same.";
        document.getElementById("confirm-error").innerHTML = "Both emails must be the same.";
    }
}

function pizzaOrder()
{
    var output = "<h3> Pizza Order: ";
    //radio buttons
    if(document.getElementById("small").checked == true)
    {
        output += " Small ";
    }
    else if(document.getElementById("medium").checked == true)
    {
        output += " Medium ";
    }
    else
    {
        output += " Large ";
    }

   //checkboxes

    if(document.getElementById("peperoni").checked == true)
    {
        output += " Peperoni ";
    }
    if(document.getElementById("sausage").checked == true)
    {
        output += " Sausage ";
    }
    if(document.getElementById("mushrooms").checked == true)
    {
        output += " Mushrooms ";
    } 
    
    //output statement
    document.getElementById("output").innerHTML = output + "<h3>";
}