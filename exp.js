
function addToCart(button) {
    // Retrieve existing cart items from local storage or initialize an empty array
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Extract details of the current item
    var itemContainer = button.parentElement.parentElement;
    var imageSrc = itemContainer.querySelector('.original-images').src;
    var itemName = itemContainer.querySelector('h4').innerText;
    var itemDetails = itemContainer.querySelector('.details-box p').innerText;

    // Check if the item already exists in the cart
    var existingItemIndex = cartItems.findIndex(function(item) {
        return item.name === itemName;
    });

    if (existingItemIndex !== -1) {
        // If the item already exists, increase its quantity
        cartItems[existingItemIndex].quantity++;
    } else {
        // If the item doesn't exist, create a new cart item object
        var newItem = {
            image: imageSrc,
            name: itemName,
            details: itemDetails,
            quantity: 1
        };
        // Add the new item to the cart
        cartItems.push(newItem);
    }

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Disable the button to prevent multiple clicks
    button.disabled = true;

    // Show the cart page
    showCartPage();
}

function showCartPage() {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the cart page container
    var cartPage = document.getElementById('cart-page');

    // Get the cart items container
    var cartItemsContainer = document.getElementById('cart-items');

    // Clear previous cart items
    cartItemsContainer.innerHTML = '';

    var totalPrice = 0;

    // Check if there are items in the cart
    if (cartItems.length > 0) {
        // Add items to the cart page
        cartItems.forEach(function(item, index) {
            var cartItemElement = document.createElement('div');
            var itemCost = item.quantity * parseFloat(item.details.split('cost:')[1].split(' ')[0]);
            totalPrice += itemCost;
            cartItemElement.innerHTML = `
                <div>
                    <img src="${item.image}" alt="${item.name}" width="100">
                    <p>${item.name}</p>
                    <p>${item.details}</p>
                    <p>Quantity: 
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        ${item.quantity}
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                    <p>Cost: ${itemCost}</p>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        // Show the total price
        document.getElementById('total-price').textContent = totalPrice.toFixed(2);

        // Show the cart page
        cartPage.style.display = 'block';
    }
}

function updateQuantity(index, change) {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Update the quantity of the specified item
    cartItems[index].quantity += change;

    // If quantity is less than 1, remove the item from the cart
    if (cartItems[index].quantity < 1) {
        cartItems.splice(index, 1);
    }

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Refresh the cart page
    showCartPage();
}

function removeFromCart(index) {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the specified item from the cart
    cartItems.splice(index, 1);

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Refresh the cart page
    showCartPage();
}

// Show the cart page when the page loads
showCartPage();
