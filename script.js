document.getElementById("button").addEventListener("click", function () {

    let name = document.getElementById("name").value.trim();
    let year = document.getElementById("year").value.trim();

    let baseUrl = "https://localhost:8080/";
    let queryParams = [];

    // Add parameters only if they exist
    if (name !== "") {
        queryParams.push("name=" + encodeURIComponent(name));
    }

    if (year !== "") {
        queryParams.push("year=" + encodeURIComponent(year));
    }

    // Build final URL
    let finalUrl = baseUrl;

    if (queryParams.length > 0) {
        finalUrl += "?" + queryParams.join("&");
    }

    // Update h3 text
    document.getElementById("url").innerText = finalUrl;
});
