const api = 'https://api.giphy.com/v1/gifs/trending?api_key=4hLxRWpsWJ7ksJHmkTiTfuhGXqWWA6BQ&limit=25&rating=G';

// Fetch the api
fetch(api)
    // Get the response and return it as JSON
    .then(reponse => {
        return reponse.json();
    })
    // Take the data and display it in the console
    .then(data => {
        console.log(data);
    })

    