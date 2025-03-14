

//  advertisement close section

// Select the close button and advertisement section

let closeAdButton = document.getElementById('close-ad');
let advertisementSection = document.getElementById('advertisement');

// Add an event listener for the click event
closeAdButton.addEventListener('click', function() {
    advertisementSection.style.display = 'none';  // Hide the advertisement section
});


// Code will run only after the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filter-checkbox"); //Select All Checkboxes and Dress Items
    const dresses = document.querySelectorAll(".image-item"); //Select All Checkboxes and Dress Items

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", filterDresses);
    });

    function filterDresses() {
        let selectedOccasions = [];
        let selectedColors = [];
        let selectedArrivals = [];

        // Get selected checkboxes from each category
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                if (checkbox.name === "occasion") {
                    selectedOccasions.push(checkbox.value);
                } else if (checkbox.name === "color") {
                    selectedColors.push(checkbox.value);
                } else if (checkbox.name === "arrival") {
                    selectedArrivals.push(checkbox.value);
                }
            }
        });

        // Show all dresses if no filters are selected
        if (selectedOccasions.length === 0 && selectedColors.length === 0 && selectedArrivals.length === 0) {
            dresses.forEach((dress) => {
                dress.style.display = "block";
            });
            return;
        }

        // Filter dresses based on selected filters
        dresses.forEach((dress) => {
            let category = dress.getAttribute("data-category") || "";
            let color = dress.getAttribute("data-color") || "";
            let arrival = dress.getAttribute("data-arrival") || "";

            let matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.some(filter => category.includes(filter));
            let matchesColor = selectedColors.length === 0 || selectedColors.includes(color);
            let matchesArrival = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);

            // Show dress only if it matches all selected filters
            if (matchesOccasion && matchesColor && matchesArrival) {
                dress.style.display = "block";
            } else {
                dress.style.display = "none";
            }
        });
    }
});
