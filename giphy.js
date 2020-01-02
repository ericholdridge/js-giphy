const apiKey = '4hLxRWpsWJ7ksJHmkTiTfuhGXqWWA6BQ';

document.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById('btnSearch').addEventListener('click', event => {
        event.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=`;
        let str = document.getElementById('search').value.trim();
        url = url.concat(str);
        console.log(url);

        // Fetch the api
        fetch(url)
            // Get the response and return it as JSON
            .then(reponse => {
                return reponse.json();
            })
            // Take the data and display it in the console
            .then(data => {
                console.log(data);
                let fig = document.createElement("figure");
                let img = document.createElement("img");
                let fc = document.createElement("figcaption");
                img.src = data.data[0].images.downsized.url;
                img.alt = data.data[0].title;
                fc.textContent = data.data[0].title;
                fig.appendChild(img)
                fig.appendChild(fc);
                let out = document.querySelector('.out');
                out.insertAdjacentElement("afterbegin", fig);
            });
    });
}


    