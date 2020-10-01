/*
Sample API in Javascript. Create an HTTP service (you are free to use libraries available in NPM) 
with a single route `POST /palindrome`. The request to `POST /palindrome` should accept a JSON payload 
with the following shape: ```js { "phrase": string } ``` Your service should return a boolean value 
indicating if the phrase is a palindrome or not 
([Wikipedia](https://es.wikipedia.org/wiki/Pal%C3%ADndromo)): ```js { "palindrome": boolean } ``` 
**Note**: The code to determine if the phrase is a palindrome should be written by you (not using a library). 
*/
const palindrome = require('./palindrome');

const express = require('express');
const { request } = require('http');
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.post('/palindrome', (req, res) => {
    res.send(palindrome(req.body.phrase));
});

app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});
