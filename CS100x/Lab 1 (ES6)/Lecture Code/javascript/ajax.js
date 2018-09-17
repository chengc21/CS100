const API_KEY = "43a19a70-b76e-11e8-bf0e-e9322ccde4db";

window.addEventListener('DOMContentLoaded', () => {

    // URL for all the galleries
    const galleries_url = `https://api.harvardartmuseums.org/gallery?apikey=${API_KEY}`;

    // Ajax request for the galleries
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", galleries_url);
    xhttp.send();

    // Once it's loaded...
    xhttp.onreadystatechange = (e) => {

        // Iterate over all of the galleries
        const galleries_data = JSON.parse(xhttp.responseText);
        galleries_data["records"].forEach((element) => {

            // Within each gallery, get all the objects therein, new request
            const objects_url = `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&gallery=${element['gallerynumber']}`;
            const xhttp2 = new XMLHttpRequest();
            xhttp2.open("GET", objects_url);
            xhttp2.send();

            // Once loaded, create a new div for each of those objects
            xhttp2.onreadystatechange = (e) => {
                const objects_data = JSON.parse(xhttp2.responseText);
                objects_data["records"].forEach((element) => {
                    var div = document.createElement('div');
                    div.innerHTML = element["accessionyear"];
                    document.body.appendChild(div);
                });
            };
        });
    };
});
