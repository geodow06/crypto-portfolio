import axios from 'axios'

const coinbaseAxios = axios.create({
    baseURL: 'https://api.coinbase.com/v2/',
    
})

const cryptoAxios = axios.create({
    baseURL: 'https://api.crypto.com/v2/'
})

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

coinbaseAxios.defaults.headers.common['Authorization'] = 'Auth Token From Instance'

export {coinbaseAxios,cryptoAxios}