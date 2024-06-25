document.addEventListener('DOMContentLoaded', function() {
    // Set default category to "earrings"
    showCategory('earrings');
  
    const categoryLinks = document.querySelectorAll('.category-link');
  
    // Add event listeners to category links
    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.dataset.category;
            showCategory(category);
        });
    });
  
    function showCategory(category) {
        // Hide all categories
        const categories = document.querySelectorAll('.earrings, .necklaces, .bangles, .rings');
        categories.forEach(function(category) {
            category.style.display = 'none';
        });
  
        // Show selected category
        const selectedCategory = document.querySelector('.' + category);
        selectedCategory.style.display = 'block';
    }
});

//------------------------------------------//
// document.querySelector('#image').addEventListener('click',event =>{

//     const descriptionBox =document.querySelector('.description-box');
//     descriptionBox.style.display=(descriptionBox.style.display=='block')? 'none' : 'block';
//     document.querySelector('#image').idList.toggle('active');
// });

// Get the image container with the id "image"
// Get all elements with the id "image"
const imageContainers = document.querySelectorAll('[id="image"]');

imageContainers.forEach(imageContainer => {
    imageContainer.addEventListener('click', event => {
        if (event.target.classList.contains('btn2')) {
            event.preventDefault(); 
            return; 
        }

        const descriptionBox = imageContainer.querySelector('.description-box');

        descriptionBox.style.display = (descriptionBox.style.display == 'block') ? 'none' : 'block';


        imageContainer.classList.toggle('active');
    });
});

// ------------------------------------------------
// document.addEventListener('DOMContentLoaded', function() {
//     const descriptionBoxes = document.querySelectorAll('.description-container');

//     // Loop through each description box and attach the event listener
//     descriptionBoxes.forEach(descriptionBox => {
//         // Set default rating to 4 stars
//         const defaultRating = descriptionBox.querySelector('#star4');
//         if (defaultRating) {
//             defaultRating.checked = true;
//         }
//     });
// });


//----search----


