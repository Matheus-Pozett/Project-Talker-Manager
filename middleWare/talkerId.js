const fs = require('fs');

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

const getTalkerId = (req, res) => {
  const readTalker = fs.readFileSync('talker.json', 'utf-8');
  const talker = JSON.parse(readTalker);
  const { id } = req.params;
  const talkerId = talker.find((data) => data.id === parseInt(id, 10));

  if (!talkerId) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(HTTP_OK_STATUS).json(talkerId);
};

module.exports = getTalkerId;