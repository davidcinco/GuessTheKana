const API = require('../js/api');

async function runApi(){
    const response = await fetch(API);
    const res = await response.json();
    console.log(res);
}
