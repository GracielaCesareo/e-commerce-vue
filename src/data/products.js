const axios = require('axios');

export async function getAllUsers() {

    const response = await axios.get('http://localhost:3000/products');
    return response.data;
}