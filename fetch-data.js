// import fetch from 'node-fetch';

// async function fetchData() {

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log('Data fetched successfully:', data);
        
//     }
//     catch (error) {
//         console.log('Error fetching data:', error);
//     }
    
// }

// fetchData();



import axios from 'axios';

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data fetched successfully:', response.data);
    }
    catch (error) {
        console.log('Error fetching data:', error);
    }
 }