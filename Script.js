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


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
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

        
        localStorage.setItem('formData', JSON.stringify(formData));

        
        displaySummary(formData);
    });

    
    const clearButton = document.querySelector('button[type="button"]');
    clearButton.addEventListener('click', function () {
        form.reset();
        document.getElementById('summary').innerHTML = ''; 
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const textToSpeechBtn = document.getElementById('text-to-speech-btn');
    textToSpeechBtn.addEventListener('click', function () {
        const textToSpeak = document.body.innerText;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        speechSynthesis.speak(utterance);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const increaseFontSizeBtn = document.getElementById('increase-font-size');
    const decreaseFontSizeBtn = document.getElementById('decrease-font-size');
    const paragraphs = document.querySelectorAll('p, h1, h2, h3');

    increaseFontSizeBtn.addEventListener('click', function () {
        paragraphs.forEach(p => {
            p.style.fontSize = parseInt(window.getComputedStyle(p).fontSize) + 1 + 'px';
        });
    });

    decreaseFontSizeBtn.addEventListener('click', function () {
        paragraphs.forEach(p => {
            p.style.fontSize = parseInt(window.getComputedStyle(p).fontSize) - 1 + 'px';
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const colorSchemeSelector = document.getElementById('color-scheme');
    colorSchemeSelector.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', colorSchemeSelector.value === 'dark');
    });
});


function displaySummary(formData) {
    
    let summaryHTML = '<h2>Form Data Summary</h2>';
    for (let key in formData) {
        if (Array.isArray(formData[key])) {
            summaryHTML += `<p>${key}: ${formData[key].join(', ')}</p>`;
        } else {
            summaryHTML += `<p>${key}: ${formData[key]}</p>`;
        }
    }

    
    document.getElementById('summary').innerHTML = summaryHTML;
}
