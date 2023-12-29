const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://pt.wikipedia.org/wiki/Oscar_de_melhor_filme';

// asynchronous function for HTTP requsio
async function getMovies() {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    $('.wikitable tbody tr').each((i,elem) => {
        const name = $(elem).find('td[style*="background:#FAEB86"]').last().text();
        if(name !== "") {
            console.log(name);
        };
    });
}

getMovies();