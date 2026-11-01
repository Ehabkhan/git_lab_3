

// Wait until HTML is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select the button
    const testButton = document.getElementById("testButton");

    // Select the message paragraph
    const message = document.getElementById("message");

    // Add a click event
    testButton.addEventListener("click", function () {

        message.textContent =
            "Success! JavaScript is working correctly.";

        testButton.textContent = "JavaScript Tested!";

        testButton.style.backgroundColor = "#16a34a";

        console.log("JavaScript test successful!");
    });

});
