document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch("https://getform.io/f/zaxdeega", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                contactForm.reset();
            } else {
                return response.json().then(data => { throw new Error(data.error); });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an error submitting the form.");
        });
    });
});

function showImage(imageSrc, element) {
    document.getElementById('project-image').src = imageSrc;
    
    // Remove 'active' class from all text blocks
    var textBlocks = document.querySelectorAll('.text-block');
    textBlocks.forEach(function(item) {
        item.classList.remove('active');
    });
    
    // Add 'active' class to the clicked text block
    element.classList.add('active');
}

function showImage2(imageSrc, element) {
    document.getElementById('project-image-2').src = imageSrc;
    
    // Remove 'active' class from all text blocks
    var textBlocks = document.querySelectorAll('.text-block');
    textBlocks.forEach(function(item) {
        item.classList.remove('active');
    });
    
    // Add 'active' class to the clicked text block
    element.classList.add('active');
}


const images1 = [
    "img/2.jpg",
    "img/4.jpg",
];

let currentIndex1 = 0;
const slider1 = document.getElementById('slider1');

function changeImage1() {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    slider1.src = images1[currentIndex1];
}

setInterval(changeImage1, 3000);

const project1 = [
    "img/react1.png",
    "img/react2.png",
];

let currentIndex2 = 0;
const slider2 = document.getElementById('slider2');

function changeImage2() {
    currentIndex2 = (currentIndex2 + 1) % project1.length;
    slider2.src = project1[currentIndex2];
}

setInterval(changeImage2, 3000);

const project2 = [
    "img/shop (1).png",
    "img/shop (2).png",
    "img/shop (3).png",
    "img/shop (4).png",
    "img/shop (5).png",
];

let currentIndex3 = 0;
const slider3 = document.getElementById('slider3');

function changeImage3() {
    currentIndex3 = (currentIndex3 + 1) % project2.length;
    slider3.src = project2[currentIndex3];
}

setInterval(changeImage3, 3000);

let feedbacks = [];
let currentIndex = 0;

function postFeedback() {
    const name = document.getElementById('Name').value;
    const text = document.getElementById('textbox').value;

    if (name && text) {
        feedbacks.push({ name, text });
        document.getElementById('Name').value = '';
        document.getElementById('textbox').value = '';
        displayFeedback();
    }
}

function displayFeedback() {
    if (feedbacks.length > 0) {
        document.getElementById('feedbackList').style.display = 'block';
        currentIndex = feedbacks.length - 1;
        showFeedback();
    }
}

function showFeedback() {
    if (feedbacks.length > 0) {
        const feedbackItem = feedbacks[currentIndex];
        document.getElementById('feedbackName').innerText = `Name: ${feedbackItem.name}`;
        document.getElementById('feedbackText').innerText = `Feedback: ${feedbackItem.text}`;
        document.getElementById('feedbackItem').style.display = 'block';
    }
}

function nextFeedback() {
    if (currentIndex < feedbacks.length - 1) {
        currentIndex++;
        showFeedback();
    }
}

function previousFeedback() {
    if (currentIndex > 0) {
        currentIndex--;
        showFeedback();
    }
}