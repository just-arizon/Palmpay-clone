const dropdown = document.getElementById("myDropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownItem = document.querySelectorAll(".dropdown-item") 
console.log(dropdownItem);

dropdown.addEventListener("mouseenter", function() {
    dropdownContent.style.display = "block";
   
});

dropdownItem.forEach(item => item.addEventListener('click', () => {
    dropdownContent.style.display = 'none' 
}))

// dropdown.addEventListener("mouseleave", function(e) {
//     if (!dropdown.contains(e.relatedTarget)) {
//         dropdownContent.style.display = "none";
//     }
// });
