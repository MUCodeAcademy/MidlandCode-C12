//! Steps:

//! Grab all of the red divs
const leftDivs = document.querySelectorAll(".leftDiv");

//! Add a click event listener to them
leftDivs.forEach((div) => {
    div.addEventListener("click", removeBox);
})

function removeBox(event) {     // Passing in an event object; this is automatically passed to event handlers
    //! Figure out which red div was clicked
    const clickedDiv = event.target     // Gets the element from the event object and stores it in a variable
                                        // The 'target' property is always a reference to the element the event occurred upon
    //! Find a way to correspond the red div to the matching orange div
    const id = "r" + clickedDiv.innerText;  // If we clicked on div 5, this variable would be r5
    const rightDiv = document.getElementById(id); // Gets the div on the right side

    //! See if the orange div is there or not
    if (rightDiv.style.display === "none") {
        //! If it's not, change it to display: block;
        rightDiv.style.display = "block";
    } else {
        //! If it is, change it to display: none;
        rightDiv.style.display = "none";
    }
}