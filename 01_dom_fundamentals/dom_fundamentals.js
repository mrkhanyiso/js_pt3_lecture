// DOM Fundamentals: Selecting and Manipulating Elements

// --- BEGINNER EXAMPLES (Selection & Content) ---

// B1: Change text content of a single element (getElementById)
let messageBox = document.querySelector('#message-box');

// Use innerText to update the message after 2 seconds
setTimeout(() => {
    messageBox.innerText = 'Welcome! All systems are Green.';
}, 2000);


// B2: Select multiple elements and loop to change them (querySelectorAll)
function highlightCapeTownRegions() {
    // Select ALL elements with the class 'city-item'
    let cityItems = document.querySelectorAll('.city-item'); 
    
    // Loop through the list of items (Integration: Loops/Arrays)
    for (let i = 0; i < cityItems.length; i++) {
        // Change the text content and style of each item
        cityItems[i].innerHTML = `✔️ <b>Region #${i + 1}:</b> ${cityItems[i].innerText}`;
    }
}
highlightCapeTownRegions();


// --- INTERMEDIATE EXAMPLE (Creating Elements) ---

// I1: Create a new HTML element and add it to the page (createElement)
function createLoadsheddingAlert(stage) {
    // 1. Create a new div element
    let newAlert = document.createElement('div'); 
    
    // 2. Set its content using string literals
    newAlert.innerHTML = `🚨 **LOADSHEDDING STAGE ${stage}:** Power cuts start soon!`; 
    
    // 3. Set a specific ID for future removal (optional)
    newAlert.setAttribute('id', 'temp-alert'); 
    
    // 4. Find the container to place the alert inside
    let container = document.querySelector('#alert-container');
    
    // 5. Add the new alert to the page (prepend puts it at the top of the container)
    container.prepend(newAlert);
}

// Call the function to display the alert (Integration: Functions)
createLoadsheddingAlert(4);


// --- ADVANCED EXAMPLE (Manipulation & Logic) ---

// A1: Remove an item based on a condition (Integration: Functions, Logic, Data)
document.querySelector('#remove-btn').addEventListener('click', function() {
    // Select the last item in the list
    let lastItem = document.querySelector('.final-item'); 
    
    // Check if the item contains the text "Incorrect Region" (Integration: Logic)
    if (lastItem && lastItem.innerText.includes('Incorrect Region')) {
        // Use the remove() method to delete the element from the DOM
        lastItem.remove(); 
        console.log("Advanced Example: Removed incorrect region element.");
    } else {
        console.log("No incorrect item found to remove.");
    }
});