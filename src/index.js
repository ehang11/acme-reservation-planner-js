const { response } = require("express");
const router = require('express').Router();
// const axios = require('axios');
import axios from 'axios';
const ul = document.querySelector('#number-list');


/* Fetch routes for 'api/users and /api/resttaurants */
//const renderNumber = (numbers) => 

//window hashchange
window.addEventListener('hashchange', async()=> {
    //methods (ex: renderNumber();  ) 
});
//initiate the index.js
const init = async() => {
    const response = await axios.get(`/api/numbers${chosenNumber}`);
    try { }

    catch(error) {
        console.log(error);
    }
};

init();
