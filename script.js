document.addEventListener('DOMContentLoaded', () => {
  // Select the hamburger menu icon
    const hamburger = document.querySelector('.hamburger');
    // Select the menu that should be toggled
    const menu = document.querySelector('.menu');
  
    // Add a click event listener to the hamburger 
    hamburger.addEventListener('click', () => {

      // Toggle the 'active' class on the menu to show or hide it
      menu.classList.toggle('active');
    });
  

    document.querySelectorAll('.menu-item a').forEach(link => {
      // Add a click event listener to each link
      link.addEventListener('click', () => {
        // Remove the 'active' class from the menu to hide it
        menu.classList.remove('active');
      });
    });
  });
  // use arrow function to select the hamburger menu icon and the menu that should be toggled;
  
