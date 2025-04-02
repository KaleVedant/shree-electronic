document.addEventListener("DOMContentLoaded", function () {
    // Load the Home Page by default
    loadPage("home");

    // Handle Navigation Clicks
    document.querySelectorAll("nav ul li a").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let page = this.getAttribute("href").replace(".html", ""); // Extract page name
            loadPage(page);
        });
    });
});

// Function to Load Pages Dynamically
function loadPage(page) {
    fetch("./pages/"+page + ".html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(() => {
            document.getElementById("content").innerHTML = "<h2>Page Not Found</h2>";
        });
}
