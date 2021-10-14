// create a class for items - define  a constructor
function item(id, name, price)
{
    this.id = id;
    this.name = name;
    this.price = price;
}

//create an array  of items
var items = [];

items[0] = new item(1, "Crochet Pumpkin Coasters", 9.99);
items[1] = new item(2, "Crochet Frog with Strawberry Hat", 39.99);
items[2] = new item(3, "Crochet Tote Bag", 29.99);

items[3] = new item(4, "Crochet Bucket Hat", 19.99);
items[4] = new item(5, "Crochet Sunflower Top", 49.99);
items[5] = new item(6, "Crochet Multicolored Flower Blanket", 99.99); 

//function to update the number of itemsin shopping cart
function updateCheckout()
{
    document.getElementById("cart-link").innerHTML = "Checkout (" + sessionStorage.length + ")";
}

//function to get id of the item
function getID(arg)
{
    var counter = 0;
    while( items[counter].name != arg)
    {
        counter++;
    }

    return items[counter].id;
}

//function to add items to shopping cart
function add(arg)
{
    sessionStorage.setItem(items[arg].name, items[arg].price);
    updateCheckout();
}

//function to remove items from cart
function remove(arg)
{
    sessionStorage.removeItem(arg);
    displayCart(); //display remaining items in cart
    updateCheckout(); //update number if items in the cart 
}

//function to display the cart
function displayCart()
{
    var total = 0;
    var output = "<table class ='table table-hover'>";

    //check to see if the cart is empty
    if ( sessionStorage.length == 0 )
    {
        document.getElementById("cart").innerHTML = "<h3 style='color: black;'>Cart is empty!</h3>";
        document.getElementById("total").innerHTML = "<h3 style='color: black;'> Total: $" + total + "</h3>";

    }
    else{ 
        output += "<tr><th>Image</th><th>Name</th><th>Price</th><th>Delete</th>"; //header row

        for( var x = 0; x < sessionStorage.length; x++)
        {
            var key = sessionStorage.key(x); //get key
            output += "<tr><td><img src='images/img" + getID(key) +".jpeg' width='50px' height='50px'></td>"; //image of item
            output += "<td>" + key + "</td><td> $" + sessionStorage.getItem(key) + "</td>"; //name and price of item
            output += "<td><input type= 'button' class='btn btn-primary' value='Delete' onclick='remove(\"" + key + "\")'></td></tr>"; //delete button and configure arg for remove function
            total += parseFloat(sessionStorage.getItem(key)); 
        }
        //output
        document.getElementById("cart").innerHTML = output;
        document.getElementById("total").innerHTML = "<h3 id='total'>Total: $ " + total.toFixed(2) + "</h3>";
    }
}