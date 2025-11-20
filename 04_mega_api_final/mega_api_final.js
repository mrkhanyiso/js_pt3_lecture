// Final Mega Example: JSON/API, Promises, Async/Await, and Error Handling

// Mock API URL (using a real public endpoint for demonstration)
const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5'; 

let statusSpan = document.querySelector('#api-status');
let maintenanceList = document.querySelector('#maintenance-list');

// ADVANCED EXAMPLE: Function using Async/Await to handle the asynchronous API call
async function fetchAndRenderMaintenanceStatus() {
    
    statusSpan.textContent = 'Fetching data...';
    maintenanceList.innerHTML = '<p>Please wait for the data to resolve...</p>';
    
    // Use try/catch to manage the entire process (Integration: Error Handling/Part 3)
    try {
        
        // 1. Await the fetch call (the Promise) (Integration: Promises/Async)
        let response = await fetch(API_URL);
        
        // Check if the response was successful (Integration: Logic)
        if (!response.ok) {
            // Throw an error that is caught below if the network fails (e.g., 404 or 500)
            throw new Error(`API Error: Status ${response.status} returned.`);
        }

        // 2. Await the conversion of the response body to JSON
        let data = await response.json(); 

        // SUCCESS: Clear loading message and render the dynamic content
        statusSpan.textContent = 'Loaded and Rendered!';
        maintenanceList.innerHTML = ''; // Clear the 'Please wait' message

        // 3. Loop through the data and create DOM elements (Integration: Loops/Data)
        data.forEach(item => {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('service-item');
            
            // Generate a random priority to simulate real-world data
            let priority = Math.floor(Math.random() * 3); 
            let statusText, statusClass;
            
            // (Integration: Logic/Switch Statement)
            switch(priority) {
                case 0:
                    statusText = 'Normal';
                    statusClass = 'normal';
                    break;
                case 1:
                    statusText = 'High Priority';
                    statusClass = 'high';
                    break;
                case 2:
                    statusText = 'CRITICAL';
                    statusClass = 'critical';
                    break;
            }
            
            // Add the CSS class based on priority (DOM Manipulation/CSS Update)
            itemDiv.classList.add(statusClass);

            // Update the DOM element's content (DOM Manipulation)
            itemDiv.innerHTML = `
                <h4>Task ID: ${item.id}</h4>
                <p><strong>Title:</strong> ${item.title}</p>
                <p><strong>Impact Level:</strong> ${statusText}</p>
                <p><strong>Completed:</strong> ${item.completed ? '✅ Yes' : '❌ No'}</p>
            `;

            maintenanceList.appendChild(itemDiv);
        });

    } catch (error) {
        // FAILURE: Catch the error and update the DOM
        statusSpan.textContent = 'DATA LOAD FAILED';
        maintenanceList.innerHTML = `<p style="color: red;">❌ System Maintenance Error: ${error.message}</p>`;
        console.error("API Fetch/Render Error:", error);
    }
}

// Start the process when the page loads
fetchAndRenderMaintenanceStatus();