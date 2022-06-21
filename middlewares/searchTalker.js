const fs = require('fs');

const searchTalker = (req, res) => {
  const { q } = req.query;
  const readTalker = fs.readFileSync('talker.json', 'utf-8');
  const talker = JSON.parse(readTalker);

  const searchTalkers = talker.filter((data) => data.name.includes(q));

  return res.status(200).json(searchTalkers);
};

module.exports = searchTalker;