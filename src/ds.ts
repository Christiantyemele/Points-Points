// Select the other div element you want to compare with
const otherDiv = document.getElementById('otherDivId');

// Get the bounding rectangle of the other div
const otherDivRect = otherDiv.getBoundingClientRect();

// Select all div elements on the page
const allDivs = document.querySelectorAll('div');

// Iterate through each div element
allDivs.forEach(div => {
    // Get the background color of the div
    const backgroundColor = div.style.backgroundColor;

    // Get the bounding rectangle of the div
    const divRect = div.getBoundingClientRect();

    // Check if the div rests on the borders of the other div or is inside it
    const restsOnBorderOrInside = (
        divRect.top === otherDivRect.top ||            // Top border
        divRect.bottom === otherDivRect.bottom ||      // Bottom border
        divRect.left === otherDivRect.left ||          // Left border
        divRect.right === otherDivRect.right ||        // Right border
        (divRect.top >= otherDivRect.top &&            // Inside the other div
            divRect.bottom <= otherDivRect.bottom &&
            divRect.left >= otherDivRect.left &&
            divRect.right <= otherDivRect.right)
    );

    // Apply styling based on background color and comparison result
    if (backgroundColor === 'red') {
        // If background color is 'red'
        if (restsOnBorderOrInside) {
            // If the div rests on the borders of the other div or is inside it
            div.style.border = '2px solid red';
        }
    } else if (backgroundColor === 'blue') {
        // If background color is 'blue'
        // Apply different styling or perform a different action
        // Add your logic here
    }
});
