const express = require('express');
const bodyParser = require('body-parser');
const getTalker = require('./middlewares/talker');
const getTalkerId = require('./middlewares/talkerId');
const { validateEmail, validatePassword } = require('./middlewares/login');
const tokenValidation = require('./middlewares/tokenValidation');
const { validateName, validateAge, createTalker } = require('./middlewares/createTalker');
const { validateTalk, validateDate, validateRate } = require('./middlewares/talkValidation');
const updateTalker = require('./middlewares/updateTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getTalker);
app.get('/talker/:id', getTalkerId);
app.post('/login', validateEmail, validatePassword);
app.post('/talker', 
tokenValidation,
validateName,
validateAge,
validateTalk,
validateDate,
validateRate,
createTalker);

app.put('/talker/:id',
tokenValidation,
validateName,
validateAge,
validateTalk,
validateDate,
validateRate,
updateTalker);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
