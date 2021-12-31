const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('simply for testing')
})

const CONTEXT_KEY=process.env.REACT_APP_BROWSER_CONTEXT_KEY; 
const API_KEY=process.env.REACT_APP_SEARCH_API_KEY;

async function getSearchResults(term) {
    const request = {
        method: 'GET',
        url: 'https://www.googleapis.com/customsearch/v1',
        params: {
            key: API_KEY,
            cx: CONTEXT_KEY,
            q: term
        }
    }
    return axios.request(request)
}

app.get('/search', async function (req, res) {
    try {
        const term = req.query.term;
        const data = await getSearchResults(term);
        res.status(200).json(data.data);
    } catch (e) {
        console.log(e)
        res.status(500).send({'error': e.message})
    }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))