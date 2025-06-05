// Get references to the buttons
const reservationsBtn = document.getElementById('reservationsBtn');
const orderNowBtn = document.getElementById('orderNowBtn');
const viewFullMenuBtn = document.getElementById('viewFullMenuBtn');
const learnMoreBtn = document.getElementById('learnMoreBtn');
const getDirectionsBtn = document.getElementById('getDirectionsBtn');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn'); // Select all "Add to Cart" buttons

// Add event listeners with alert messages
reservationsBtn.addEventListener('click', () => {
    alert('Thank you for your interest in reservations! Please call us at +91 98765 43210 or visit in person.');
});

orderNowBtn.addEventListener('click', () => {
    alert('Order Now is currently in development! You can view our menu below.');
});

viewFullMenuBtn.addEventListener('click', () => {
    alert('Our full digital menu is being prepared. For now, enjoy our highlights!');
});

learnMoreBtn.addEventListener('click', () => {
    alert('We are proud of our story! Visit our restaurant to learn more about The Flavor Hub.');
});

getDirectionsBtn.addEventListener('click', () => {
    alert('Getting directions to 123 Foodie Lane, Chennai. See you soon!');
});

// Add event listeners for all "Add to Cart" buttons
addToCartBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const menuItem = event.target.closest('.menu-item');
        const itemName = menuItem.querySelector('h3').textContent;
        alert(`"${itemName}" has been added to your cart! (Note: This is a demo alert)`);
    });
});