// Form Handling & Events

// --- BEGINNER EXAMPLES (Events) ---

// B1: Basic button click event
let logClickBtn = document.querySelector('#log-click-btn');

logClickBtn.addEventListener('click', function() {
    console.log("Button clicked! (Event Listener Fired)");
    logClickBtn.innerText = 'Clicked!';
});


// B2: Form submission prevention (event.preventDefault)
let form = document.querySelector('#id-validation-form');

form.addEventListener('submit', function(e) {
    // CRITICAL: Stop the page refresh!
    e.preventDefault(); 
    console.log("Form submission intercepted. Page did not refresh.");
});


// --- INTERMEDIATE EXAMPLES (Validation & Objects) ---

// I1: Input field validation using an IF statement (Integration: Events, Logic, Functions)
let idInput = document.querySelector('#sa-id-input');
let feedback = document.querySelector('#validation-feedback');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let idValue = idInput.value.trim();
    feedback.innerText = ''; // Clear previous message
    idInput.style.border = '1px solid grey';

    // Simple length check
    if (idValue.length !== 13) { // (Integration: Logic)
        feedback.innerText = '❌ Error: ID must be exactly 13 digits.';
        idInput.style.border = '2px solid red'; // DOM/CSS Update
    } else {
        feedback.innerText = '✅ ID format is correct. Proceeding...';
        feedback.style.color = 'green';
    }
});


// I2: Taxi Fare Calculator (Integration: Events, Objects, Functions)
let calcFareBtn = document.querySelector('#calc-fare-btn');
let distInput = document.querySelector('#distance-input-fare');
let fareDisplay = document.querySelector('#fare-result-display');

// Taxi Fare rates Object (Integration: Objects/Part 3)
const TaxiFare = {
  BASE_RATE: 15.00,
  COST_PER_KM: 6.25
};

calcFareBtn.addEventListener('click', function() {
    let distance = parseFloat(distInput.value); 
    
    if (isNaN(distance) || distance <= 0) {
        fareDisplay.innerText = "R0.00 (Invalid distance)";
        return;
    }
    
    let finalFare = TaxiFare.BASE_RATE + (distance * TaxiFare.COST_PER_KM);
    fareDisplay.innerText = `R${finalFare.toFixed(2)}`;
});


// --- ADVANCED EXAMPLE (Error Handling) ---

// A1: Advanced Validation with specific DOM error messages (Integration: Events, Error Handling)
// This uses the same form as I1, but adds robust validation inside a try/catch.
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let idValue = idInput.value.trim();
    feedback.innerText = ''; 
    idInput.style.border = '1px solid grey';

    // Use try/catch for professional error management (Integration: Error Handling/Part 3)
    try {
        if (idValue === '') {
            throw new Error('empty');
        }
        if (idValue.length !== 13) {
            throw new Error('length');
        }
        if (isNaN(parseInt(idValue))) {
             throw new Error('numeric');
        }
        
        // If successful, proceed
        feedback.innerText = '✅ ID is valid and ready for server submission.';
        feedback.style.color = 'green';
        
    } catch (error) {
        // CATCH the error and update the DOM/CSS
        idInput.style.border = '2px solid red';
        feedback.style.color = 'red';
        
        if (error.message === 'empty') {
            feedback.innerText = '❌ Error: Please enter your SA ID number.';
        } else if (error.message === 'length') {
            feedback.innerText = '❌ Error: ID must be 13 digits long.';
        } else if (error.message === 'numeric') {
            feedback.innerText = '❌ Error: ID can only contain numbers.';
        }
        console.error("Validation Failed:", error.message);
    }
});