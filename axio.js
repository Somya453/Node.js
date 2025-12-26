const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Data fetched successfully:', response.data);
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });