document.getElementById('fetch-quote').addEventListener('click', () => {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
        method: "GET",
        headers: {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": "caa13812a9msh52abc25e0430024p1a2b7cjsn3235412aff85" 
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerHTML = `<h3>${data.content}</h3><p>— ${data.originator.name}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('quote-container').innerHTML = 'Failed to fetch quote.';
    });
});


