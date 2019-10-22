import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a13a8dfe3def00facf13d75f92588aeb234e1c7e4d53f01ee46400ae318c1a86'
    }
});