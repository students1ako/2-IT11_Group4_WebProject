// Menu Items 
const menuItems = [
    // Coffee Items
    { id: 1, name: 'Americano', description: 'A classic espresso with hot water for a rich flavor.', image: 'Media/products/Americano.png', priceHot: 70.00, priceIced: 90.00 },
    { id: 2, name: 'Cafe Latte', description: 'Espresso with steamed milk and a light layer of foam.', image: 'Media/products/Caffe Latte.png', priceHot: 80.00, priceIced: 95.00 },
    { id: 3, name: 'OldCoast Signature', description: 'Our special blend of espresso and milk.', image: 'Media/products/OldCoast Signature.png', priceHot: 90.00, priceIced: 120.00 },
    { id: 4, name: 'Of the Sea', description: 'A refreshing blend of espresso and sea salt.', image: 'Media/products/Of the Sea.png', price: 130.00 },
    { id: 5, name: 'Cafe Mocha', description: 'Rich chocolate and espresso combined.', image: 'Media/products/Cafe Mocha.png', priceHot: 85.00, priceIced: 115.00 },
    { id: 6, name: 'Coffee Jelly', description: 'A unique dessert made with coffee jelly.', image: 'Media/products/Coffee Jelly.png', price: 130.00 },
    { id: 7, name: 'Biscoff Latte', description: 'Espresso with Biscoff cookie flavor.', image: 'Media/products/Biscoff Latte.png', priceHot: 95.00, priceIced: 150.00 },
    { id: 8, name: 'French Vanilla', description: 'Smooth vanilla flavor with espresso.', image: 'Media/products/French Vanilla.png', priceHot: 85.00, priceIced: 110.00 },
    { id: 9, name: 'White Mocha', description: 'Creamy white chocolate and espresso.', image: 'Media/products/White mocha.png', priceHot: 85.00, priceIced: 120.00 },
    { id: 10, name: 'Nutellaspresso', description: 'Espresso with Nutella flavor.', image: 'Media/products/Nutella Espresso.png', priceHot: 90.00, priceIced: 140.00 },
    { id: 11, name: 'Vanilla Latte', description: 'Espresso with vanilla flavor.', image: 'Media/products/Vanila Latte.png', priceHot: 85.00, priceIced: 110.00 },
    { id: 12, name: 'Hazelnut Macchiato', description: 'Rich hazelnut flavor with espresso.', image: 'Media/products/Hazelnut Macchiato.png', priceHot: 80.00, priceIced: 110.00 },
    { id: 13, name: 'Caramel Macchiato', description: 'Sweet caramel flavor with espresso.', image: 'Media/products/Caramel Macchiato.png', priceHot: 85.00, priceIced: 120.00 },
    { id: 14, name: 'Dirty Matcha', description: 'Matcha with a shot of espresso.', image: 'Media/products/Dirty Matcha.png', priceHot: 85.00, priceIced: 130.00 },
    { id: 15, name: 'Spanish Latte', description: 'Espresso with sweetened condensed milk.', image: 'Media/products/Spanish Latte.png', priceHot: 85.00, priceIced: 120.00 },

    // Non-Coffee Items
    { id: 16, name: 'Matcha', description: 'Traditional Japanese green tea.', image: 'Media/products/Matcha.png', priceHot: 80.00, priceIced: 130.00 },
    { id: 17, name: 'Biscoff Cream', description: 'Creamy Biscoff flavor drink.', image: 'Media/products/Biscoff Cream.png', priceHot: 90, priceIced: 160.00 },
    { id: 18, name: 'Strawberry Milk', description: 'Sweet strawberry flavored milk.', image: ' Media/products/Strawberry Milk.png', price: 120.00 },
    { id: 19, name: 'Nutella Almond', description: 'Nutella and almond flavored drink.', image: 'Media/products/Nutella Almond.png', price: 135.00 },
    { id: 20, name: 'Berry Matcha', description: 'Matcha with berry flavor.', image: 'Media/products/Berry Matcha.png', price: 140.00 },
    { id: 21, name: 'Dark Choco', description: 'Rich dark chocolate drink.', image: 'Media/products/Dark Choco.png', priceHot: 85, priceIced: 120.00 },
    { id: 22, name: 'Black Peach Tea', description: 'Refreshing black peach tea.', image: 'Media/products/Black Peach Tea.png', price: 100.00 },

    // Fruit Sodas
    { id: 23, name: 'Green Apple', description: 'Crisp and refreshing green apple soda.', image: 'Media/products/Green Apple.png', price: 70.00 },
    { id: 24, name: 'Blueberry', description: 'Sweet blueberry flavored soda.', image: 'Media/products/Blueberry.png', price: 70.00 },
    { id: 25, name: 'Strawberry', description: 'Delicious strawberry soda.', image: 'Media/products/Strawberry.png', price: 70.00 },
    { id: 26, name: 'Lychee', description: 'Exotic lychee flavored soda.', image: 'Media/products/Lychee.png', price: 70.00 },
    { id: 27, name: 'Honey Peach', description: 'Sweet honey peach soda.', image: 'Media/products/Honey Peach.png', price: 80.00 },
    { id: 28, name: 'Strawberry Cream', description: 'Creamy strawberry soda.', image: 'Media/products/Strawberry Cream.png', price: 100.00 },

    // Food Items
    { id: 29, name: 'Carbonara', description: 'Classic Italian carbonara pasta.', image: 'Media/products/Carbonara.png', price: 160.00 },
    { id: 30, name: 'Banana Bread', description: 'Moist and delicious banana bread.', image: 'Media/products/Banana Bread.png', price: 40.00 },
    { id: 31, name: 'Muffin', description: 'Freshly baked muffin of the day.', image: 'Media/products/Muffin.png', price: 70.00 },
    { id: 32, name: 'Chicken Spread', description: 'Savory chicken spread sandwich.', image: 'Media/products/Chicken Spread.png', price: 95.00 },
    { id: 33, name: 'Grilled Cheese', description: 'Classic grilled cheese sandwich.', image: 'Media/products/Grilled Cheese.png', price: 90.00 },
    { id: 34, name: 'Cheesy Nachos', description: 'Crispy nachos topped with cheese.', image: 'Media/products/Cheesy Nachos.png', price: 120.00 }
];

// Addons
const addOns = [
    // Sauces
    { id: 1, name: 'White Choco', price: 35.00 },
    { id: 2, name: 'Chocolate', price: 35.00 },
    { id: 3, name: 'Strawberry Jam', price: 35.00 },
    { id: 4, name: 'Matcha', price: 35.00 },
    { id: 5, name: 'Caramel', price: 35.00 },

    // Syrup
    { id: 6, name: 'French Vanilla', price: 25.00 },
    { id: 7, name: 'Vanilla', price: 25.00 },
    { id: 8, name: 'Hazelnut', price: 25.00 },
    { id: 9, name: 'Strawberry', price: 25.00 },

    // Milk Options
    { id: 10, name: 'Oatmilk', price: 35.00 },
    { id: 11, name: 'Almond Milk', price: 35.00 },
    { id: 12, name: 'Non Fat Milk', price: 35.00 },

    // Extras
    { id: 13, name: 'Espresso Shot', price: 40.00 },
    { id: 14, name: 'Coffee Jelly', price: 25.00 },
    { id: 15, name: 'Upsize 12oz', price: 25.00 },
    { id: 16, name: 'Nata', price: 20.00 },
    { id: 17, name: 'Whipped Cream', price: 35.00 }
];

// UPDATING CONTENTS CUSTOMIZATION MENU BASED FROM THE SELECTED PRODUCT
let selectedItemPrice;
let basePrice; // Declare basePrice here

// Global cart array
let cartItem = [];

// Function to add item to cart
function orderNow() {
    const itemName = document.getElementById('itemName').innerText;

    // Alert the user
    alert(`${itemName} succesfully purchased for a total of ${(totalPrice).toFixed(2)}`);

    window.location.href='Menu.html';
}

// Sets the info for selected item
function selectItem(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (item) {
        const selectedItem = {
            name: item.name,
            description: item.description,
            image: item.image, // Assuming item.image contains the image URL
            price: item.price ? item.price : (item.priceHot + ' (Hot), ' + item.priceIced + '(Iced)')
        };

        // Set basePrice to the selected item's price
        basePrice = item.priceIced ? item.priceIced : item.price; // Ensure basePrice is a number

        localStorage.setItem('selectedItem', JSON.stringify(selectedItem));

        window.location.href='SelectItem.html';

    } else {
        alert('Item not found.');
    }
}

// Function to update item 
function updateItemDetails() {
    const item = JSON.parse(localStorage.getItem('selectedItem'));
    
    if (item) {
        document.getElementById('itemName').textContent = item.name;
        document.getElementById('itemImage').src = item.image;
        document.getElementById('itemDescription').textContent = item.description;
        basePrice = item.priceIced ? item.priceIced : item.price; // Use priceIced if available, otherwise use price
        document.getElementById('totalPrice').innerText = basePrice.toFixed(2); // Display the default price
    }
}

// Call the function to update item details on page load
document.addEventListener('DOMContentLoaded', function() {
    updateItemDetails();
});

// ITEM CUSTOMIZATION AND PRICE UPDATE
let totalPrice = basePrice;

// Function to update the price based on selections
function updatePrice() {
    totalPrice = 0; 

    // Get selected temperature
    const temp = document.querySelector('input[name="temp"]:checked').value;
    const item = menuItems.find(i => i.name === document.getElementById('itemName').textContent);

    // Calculate base price based on temperature
    if (item) {
        if (temp === "Hot" && item.priceHot) {
            totalPrice += item.priceHot; // Add hot price
        } else if (temp === "Iced" && item.priceIced) {
            totalPrice += item.priceIced; // Add iced price
        } else {
            totalPrice += item.price; // Fallback to base price if neither is available
        }
    }

    // Get item quantity
    const quantity = parseInt(document.getElementById('itemQuantity').value);
    
    // Calculate add-ons
    totalPrice += calculateAddOns();

    // Calculate extras
    totalPrice += calculateExtras();

    // Multiply total price by quantity
    totalPrice *= quantity;

    // Update the displayed price
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

// Function to calculate add-ons price
function calculateAddOns() {
    let addOnPrice = 0;

    const sauces = document.getElementById('sauces').value;
    const syrup = document.getElementById('syrup').value;
    const milk = document.getElementById('milk').value;

    // Add costs for selected add-ons
    if (sauces !== "none") addOnPrice += 35; // Example cost for sauces
    if (syrup !== "none") addOnPrice += 25; // Example cost for syrup
    if (milk !== "none") addOnPrice += 35; // Example cost for milk

    return addOnPrice;
}

// Function to calculate extras price
function calculateExtras() {
    let extrasPrice = 0;
    const extras = document.querySelectorAll('#extras input[type="number"]');

    extras.forEach(extra => {
        const quantity = parseInt(extra.value);
        const price = parseInt(extra.parentElement.previousElementSibling.innerText);
        extrasPrice += quantity * price; // Add cost for extras
    });

    return extrasPrice;
}

// Function to change item quantity
function changeQuantity(amount) {
    const quantityInput = document.getElementById('itemQuantity');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity += amount;

    // Prevent negative quantity
    if (currentQuantity < 1) currentQuantity = 1; 
    quantityInput.value = currentQuantity;
    updatePrice(); // Update price after changing quantity
}

// Function to change the quantity of extras
function changeExtraQuantity(button, change) {
    const quantityInput = button.parentElement.querySelector('input[type="number"]');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;

    // Ensure quantity does not go below 0
    if (currentQuantity < 0) {
        currentQuantity = 0;
    }

    quantityInput.value = currentQuantity;
    updatePrice(); // Update the price whenever the quantity changes
}


// Function to redirect to the cart page
function linkToCart() {
    // Logic to redirect to the cart page 
    window.location.href = 'Cart.html'; 
}