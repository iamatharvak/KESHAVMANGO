document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("infoButton");
    button.addEventListener("click", function() {
        // Set the URL of the page you want to open
        var newPageUrl = "photos.html";
        
        // Open the new page
        window.location.href = newPageUrl;
    });
});