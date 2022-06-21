const fs = require('fs');

const deleteTalker = (req, res) => {
  const { id } = req.params;
  const readTalker = fs.readFileSync('talker.json', 'utf-8');
  const talker = JSON.parse(readTalker);
  const findTalkers = talker.findIndex((data) => data.id === Number(id));

  talker.splice(findTalkers, 1);

  fs.writeFileSync('./talker.json', JSON.stringify(talker));
  
  return res.status(204).end();
};

module.exports = deleteTalker;