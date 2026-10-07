// Welcome message when the page loads
window.onload = function () {
    alert("Welcome to Cecilia's Chicken Restaurant!");
};

// Handle the order form
const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const food = document.getElementById("food").value;
        const quantity = document.getElementById("quantity").value;

        if (name === "" || food === "" || quantity === "") {
            alert("Please fill in all the fields.");
        } else {
            alert(
                "Thank you, " + name +
                "! Your order for " + quantity +
                " " + food + " has been received."
            );

            orderForm.reset();
        }
    });
};

// Show a message when a menu item is clicked
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        alert("You selected " + item.innerText);
    });
});
