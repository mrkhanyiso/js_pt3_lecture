// Updating CSS with JavaScript

// --- BEGINNER EXAMPLES (Direct Style Manipulation) ---

// B1: Change a single style property (backgroundColor)
let statusBox1 = document.querySelector('#road-status-1');
statusBox1.style.backgroundColor = 'yellow';
statusBox1.innerText = 'Status: Watch out for potholes.';


// B2: Change multiple style properties (color, fontSize)
let statusBox2 = document.querySelector('#road-status-2');
statusBox2.style.color = 'darkblue';
statusBox2.style.fontSize = '18px';
statusBox2.style.padding = '20px';


// --- INTERMEDIATE EXAMPLES (Logic and Classes) ---

// I1: Toggle a CSS class (Better than direct style for complex changes) (Integration: Logic, Events)
let toggleAlert = document.querySelector('#toggled-alert');
let toggleClassBtn = document.querySelector('#toggle-class-btn');
let isUrgent = false;

toggleClassBtn.addEventListener('click', function() {
    // Use .classList.toggle() which is cleaner than checking .style
    toggleAlert.classList.toggle('urgent-alert'); 
    
    // Update the button text based on the state
    isUrgent = !isUrgent; // Flip the state
    toggleClassBtn.innerText = isUrgent ? 'Unset Urgent Style' : 'Set Urgent Style';
    console.log(`Style Toggled: Urgent status is ${isUrgent}`);
});


// I2: Calculate and set a dynamic style (Integration: Logic, Math)
let densityBar = document.querySelector('#density-bar');
let densityLevel = document.querySelector('#density-level');
let densityBtn = document.querySelector('#random-density-btn');

densityBtn.addEventListener('click', function() { // (Integration: Events)
    // Generate a random density value between 30 and 90
    let density = Math.floor(Math.random() * 60) + 30; // (Integration: Math/Functions)
    
    // Update the text in the DOM
    densityLevel.innerText = density;
    
    // Set the width style dynamically based on the number
    densityBar.style.width = `${density}%`; 
    
    // Change the color based on the condition (Integration: Logic)
    if (density > 75) {
        densityBar.style.backgroundColor = 'red';
    } else if (density > 50) {
        densityBar.style.backgroundColor = 'orange';
    } else {
        densityBar.style.backgroundColor = 'green';
    }
});


// --- ADVANCED EXAMPLE (Objects & Functions) ---

// A1: Change style based on an object's property (Integration: Objects, Functions, Events)
let orderBox = document.querySelector('#order-box');
let processBtn = document.querySelector('#process-order-btn');

// The Biltong Order Object (Integration: Objects/Part 3)
const BiltongOrder = {
    flavour: 'Chilli Bite',
    weight: 250,
    isPaid: true
};

processBtn.addEventListener('click', function() {
    
    // Check the object property status
    if (BiltongOrder.isPaid) { // (Integration: Logic)
        orderBox.innerText = `Order: ${BiltongOrder.flavour} (${BiltongOrder.weight}g). PAID.`;
        // Apply success CSS using object property
        orderBox.style.backgroundColor = '#ccffcc'; // Light Green
        orderBox.style.border = '2px solid green';
    } else {
        orderBox.innerText = 'Order: Payment Pending.';
        orderBox.style.backgroundColor = '#ffcccc'; // Light Red
        orderBox.style.border = '2px solid red';
    }
});