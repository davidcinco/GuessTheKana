import { API } from './api.js'

async function runApi(){
    const response = await fetch(API);
    const res = await response.json();
    console.log(res);
}

runApi();