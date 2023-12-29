const axios = require('axios');
const cherio = require('cheerio');

const url = 'https://pt.wikipedia.org/wiki/Oscar_de_melhor_filme';

// asynchronous function for HTTP requsio
async function getMovies() {
    const awayt = axios.get(url);
    
}

getMovies();