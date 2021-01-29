import { baseURL } from './apiConfig'
import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// export const register = (data) => {
//     return fetch(baseURL + 'users', {
//         method: 'POST',
//         body: JSON.stringify({ data }),
//         mode: 'no-cors',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//             'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
//             'Content-Type': 'application/json'
//         }
//     }).then(() => console.log('Works...')).catch(err => console.log(err)) ;
// }

// export const register = (data) => {
//     var request = new XMLHttpRequest();
//     request.open('POST', baseURL + 'users', true);
//     request.setRequestHeader("Content-Type", "application/json");
//     request.setRequestHeader("Access-Control-Allow-Origin", "*");

//     request.send(JSON.stringify(data));

//     request.onreadystatechange = function () {
//         if (request.readyState == XMLHttpRequest.DONE) {
//             if (JSON.parse(request.responseText).error_code === 2) {
//                 console.log(JSON.parse(request.responseText).err_desc)
//                 return
//             }
//             if (JSON.parse(request.responseText).error_code === 1) {
//                 console.log(JSON.parse(request.responseText).err_desc)
//                 return
//             }
//             return console.log(request.responseText);
//         }
//     }

// }

const api = axios.create({
    baseURL: baseURL
})

export default api;

