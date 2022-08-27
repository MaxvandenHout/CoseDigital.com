const express = require('express')
const axios = require('axios')
const app = express()
const port = 5000

app.get('/send',(request,response) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  axios.get('https://api.telegram.org/bot5303297833:AAFYRxyWC-vzJfRqkLKoR3NZZU38UW25zkQ/sendMessage?chat_id=1022930050&text=' + request.query.text)
  .then(res => {
    console.log('good');
    console.log(res);
  }).catch(err => {
    console.log('bad');
    console.log(err);
  });

  response.send('');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})