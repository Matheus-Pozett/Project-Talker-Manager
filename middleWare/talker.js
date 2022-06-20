const fs = require('fs');

const HTTP_OK_STATUS = 200;

const getTalkers = (_req, res) => {
  const readTalker = fs.readFileSync('talker.json', 'utf-8');
  const talker = JSON.parse(readTalker);

  res.status(HTTP_OK_STATUS).json(talker);
};

module.exports = getTalkers;