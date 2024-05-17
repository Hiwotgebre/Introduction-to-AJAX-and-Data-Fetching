document,getElementById('fetch-button'). addEventListener('click', function() {
    fetch('https://www.colourlovers.com/api/colors/new?format=json')
    .then(response => response.jason())
    .then(data => {
        const container = document.getElementById('data-containre');
        container.innerHTML = ''; // Clear the loading message or existing data
        
    })
})