import {cryptoAxios} from '../config/axios';
const crypto = require("crypto-js");

const exchangeInformation = {name:"Crypto.com", logo:"", path:"crypto"}

export const cryptoService = {
    get,
    getTicker,
    exchangeInformation
};

// const signRequest = (request, apiKey, apiSecret) => {
//     const { id, method, params, nonce } = request;
  
//     const paramsString =
//       params == null
//         ? ""
//         : Object.keys(params)
//             .sort()
//             .reduce((a, b) => {
//               return a + b + params[b];
//             }, "");
  
//     const sigPayload = method + id + apiKey + paramsString + nonce;
  
//     request.sig = crypto
//       .HmacSHA256(sigPayload, apiSecret)
//       .toString(crypto.enc.Hex);
  
//     return request;
// };
  
const apiKey = process.env.REACT_APP_CRYPTO_API_KEY;
const apiSecret = process.env.REACT_APP_CRYPTO_API_SECRET;

// let request = {
//     id: 11,
//     method: "private/get-order-detail",
//     api_key: apiKey,
//     params: {
//         order_id: 53287421324
//     },
//     nonce: 1587846358253,
// };

// const requestBody = JSON.stringify(signRequest(request, apiKey, apiSecret));

async function get(endpoint) {
    let response = await cryptoAxios({
        method: 'GET',
        // Change to endpoint variable
        // url:"private/get-order-detail",
        url:'public/get-instruments',
        headers:{ 
            // 'CB-ACCESS-KEY': apiKey,
            // 'CB-ACCESS-SIGN': hmac,
            // 'CB-ACCESS-TIMESTAMP': timestamp,
            'Content-Type': 'application/json'
        },
        // data: requestBody
    });
    console.log(response)
    return null;
}

async function getTicker(ticker) {
    let instrumentParam = (ticker) ? `?instrument_name=${ticker}` : ''; 
    let response = await cryptoAxios({
        method: 'GET',
        // Can specify instrument_name=<ticker> or omit for all
        url:`public/get-ticker${instrumentParam}`,
    });
    console.log(response);
    return null;
}

export default cryptoService;