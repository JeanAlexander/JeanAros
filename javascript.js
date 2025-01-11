document.getElementById('contact-btn').addEventListener('click', function() {
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
});

