document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var topic = document.getElementById("topic").value;
    var message = document.getElementById("message").value;

    // Create a data object to send to Formspree
    var data = {
        name: name,
        email: email,
        topic: topic,
        message: message
    };

    var submitButton = document.getElementById("submit-button");
    var successMessage = document.getElementById("success-message");

    fetch("https://formspree.io/f/mnqknqqa", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.ok) {
                // Clear the form after a successful submission
                document.getElementById("contact-form").reset();
                console.log("Form submitted successfully.");

                // Show the success message
                submitButton.style.display = "none";
                successMessage.style.display = "block";
            } else {
                console.log("Form submission failed.");
            }
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
});
