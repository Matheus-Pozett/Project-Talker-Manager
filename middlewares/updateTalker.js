const fs = require('fs');

const updateTalker = (req, res) => {
  const { id } = req.params; 
  const { name, age, talk } = req.body;
  const readTalker = fs.readFileSync('talker.json', 'utf-8');
  const talker = JSON.parse(readTalker);

  const findTalkers = talker.findIndex((data) => data.id === Number(id));
  talker[findTalkers] = { ...talker[findTalkers], name, age, talk };

  fs.writeFileSync('./talker.json', JSON.stringify(talker));
  return res.status(200).json(talker[findTalkers]);
};

module.exports = updateTalker;
