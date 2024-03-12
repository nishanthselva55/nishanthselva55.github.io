function promptName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("output").innerHTML = "Hello, " + name + "! My name is Nishanth. Thanks for visiting, I hope you enjoy your stay! :D";
    } 
}

function enlargeImage() {
    var img = document.getElementById("pic_of_me_professional");
   
    img.classList.toggle("enlarged");
}

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const formData = {};
        for (let element of form.elements) {
            if (element.type === 'radio') {
                if (element.checked) {
                    formData[element.name] = element.value;
                }
            } else if (element.type === 'checkbox') {
                if (!formData[element.name]) {
                    formData[element.name] = [];
                }
                if (element.checked) {
                    formData[element.name].push(element.value);
                }
            } else if (element.type !== 'submit' && element.type !== 'button') {
                formData[element.name] = element.value;
            }
        }

        // Store form data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Display summary
        displaySummary(formData);
    });

    // Clear form fields
    const clearButton = document.querySelector('button[type="button"]');
    clearButton.addEventListener('click', function () {
        form.reset();
        document.getElementById('summary').innerHTML = ''; // Clear summary
    });
});

function displaySummary(formData) {
    // Generate summary HTML
    let summaryHTML = '<h2>Form Data Summary</h2>';
    for (let key in formData) {
        if (Array.isArray(formData[key])) {
            summaryHTML += `<p>${key}: ${formData[key].join(', ')}</p>`;
        } else {
            summaryHTML += `<p>${key}: ${formData[key]}</p>`;
        }
    }

    // Display summary
    document.getElementById('summary').innerHTML = summaryHTML;
}
