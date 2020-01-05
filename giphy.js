const api = '4hLxRWpsWJ7ksJHmkTiTfuhGXqWWA6BQ';
const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=25&rating=G`;
const translateURL = `https://api.giphy.com/v1/gifs/translate?api_key=${api}&s=`

document.addEventListener('DOMContentLoaded', init);
function init() {
    // Search feature
    document.getElementById('btnSearch').addEventListener('click', event => {
        event.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${api}&limit=1&q=`;
        let str = document.getElementById('search').value.trim();
        url = url.concat(str);

        // Fetch the api
        fetch(url)
            // Get the response and return it as JSON
            .then(reponse => {
                return reponse.json();
            })
            // Take the data and display it on the page
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

    // Get trending giphy's
    fetch(trendingURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for(let i = 0; i < data.data.length - 21; i++) {
                let fig = document.createElement("figure");
                let img = document.createElement("img");
                img.src = data.data[i].images.downsized.url;
                img.alt = data.data[i].title;
                fig.appendChild(img)
                let wrap  = document.querySelector('.wrap');
                wrap.insertAdjacentElement("afterbegin", fig);
            }
        });
    
    // 
}


    