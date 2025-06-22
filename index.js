// Remove the <main id="main"> element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement('h1');

// Set the id to 'victory'
newHeader.id = 'victory';

// Set the text content (replace YOUR-NAME with my name)
newHeader.textContent = 'Tiara is the champion';