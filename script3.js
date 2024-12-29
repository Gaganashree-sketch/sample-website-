document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const formData = new FormData(this); // Collect form data
    const data = Object.fromEntries(formData.entries()); // Convert to an object
    
    console.log("Submitted Data:", data); // Display data in the console
    alert("Form submitted successfully!");
});