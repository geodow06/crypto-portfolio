import {coinbaseAxios} from '../config/axios';
const CryptoJS = require("crypto-js");

const exchangeInformation = {name:"Coinbase", logo:"", path:"coinbase"}

export const coinbaseService = {
    time,
    get,
    getUser,
    getAccounts,
    getCoinPrices,
    getSellPrice,
    getBuyPrice,
    getSpotPrice,
    exchangeInformation
};

async function time() {
    let method = 'GET';
    const response = await 
    coinbaseAxios({
        method: method,
        url: '/time'
    });
    return await response.data.data.epoch;
}

async function get(endpoint) {
    let timestamp = await time(),
        signature = `${timestamp}GET/v2/${endpoint}`,
        hmac = CryptoJS.HmacSHA256(signature, process.env.REACT_APP_API_SECRET),
        response = await coinbaseAxios({
            method: 'GET',
            url:endpoint,
            headers:{ 
                'CB-ACCESS-KEY': process.env.REACT_APP_API_KEY,
                'CB-ACCESS-SIGN': hmac,
                'CB-ACCESS-TIMESTAMP': timestamp,
                'Content-Type': 'application/json'
            }
        });
    return await response.data.data;
}

async function getCoinPrices(ticker, currency, date) {
    let sell = await getSellPrice(ticker, currency), 
        buy = await getBuyPrice(ticker, currency),
        spot = await getSpotPrice(ticker, currency);
    return {sell:sell.amount,buy:buy.amount,spot:spot.amount}
}

async function getUser() {
    return await get('user');
}

async function getSellPrice(ticker, currency) {
    return get(`prices/${ticker}-${currency}/sell`);
}

async function getBuyPrice(ticker, currency) {
    return get(`prices/${ticker}-${currency}/buy`);
}

async function getSpotPrice(ticker, currency) {
    return get(`prices/${ticker}-${currency}/spot`);
}

async function getAccounts(){
    return get('accounts');
}

export default coinbaseService;