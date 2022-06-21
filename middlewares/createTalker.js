const fs = require('fs');

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const createTalker = (req, res) => {
  const { name, age, talk } = req.body;
  const readTalker = fs.readFileSync('talker.json', 'utf-8');
  const talker = JSON.parse(readTalker);

  const newTalker = {
    name, 
    age,
    id: talker.length + 1,
    talk,
  };

  talker.push(newTalker);
  fs.writeFileSync('./talker.json', JSON.stringify(talker));
  return res.status(201).json(newTalker);
};

module.exports = { validateName, validateAge, createTalker };