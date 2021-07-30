const axios = require('axios').default;

const apiKey = "5aca9160a4a90186a4129362a81146e2";
const uri = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=${apiKey}&format=json`;


exports.getTopArtists = function(req,res) {
    axios.get('http://ws.audioscrobbler.com/2.0/',{
        proxy: {
            host: 'proxy1.bank',
            port: 3128,
       },
        params: {
            method: 'chart.gettopartists',
            limit: '10',
            api_key: apiKey,
            format: 'json',
        }
    }).then(function (resp) {
        res.send(resp.data);
    }).catch(function (error) {
        console.log(error);
    });
}