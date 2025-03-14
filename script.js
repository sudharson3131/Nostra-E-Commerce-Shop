

// redirect Navigation Page

let navigateButton = document.getElementById("navigateButton")
navigateButton.addEventListener("click",function(){
    window.location.href = "brand.html";
})


//  advertisement close section

// Select the close button and advertisement section

let closeAdButton = document.getElementById('close-ad');
let advertisementSection = document.getElementById('advertisement');

// Add an event listener for the click event
closeAdButton.addEventListener('click', function() {
    advertisementSection.style.display = 'none';  // Hide the advertisement section
});



// banner image slider section

// Select elements
let slider = document.querySelector('.slider');
let prevButton = document.getElementById('prevBtn');
let nextButton = document.getElementById('nextBtn');

let index = 0;  
let totalSlides = document.querySelectorAll('.slide').length; 
console.log(totalSlides) // how many slide find

// Function to update the slider position
function updateSlider() {
    let offset = index * -600;
    console.log(offset)
    slider.style.transform = `translateX(${offset}px)`; 
}

// Next button functionality
nextButton.addEventListener('click', function() {
    index++;  
    if (index >= totalSlides) {
        index = 0;
    }
    updateSlider();  // Update the slider
});

// Previous button functionality
prevButton.addEventListener('click', function() {
    index--;  // Move to the previous image
    if (index < 0) { // If we're at the first image, loop back to the last slide
        index = totalSlides - 1;
        
    }
    updateSlider();  // Update the slider
});

