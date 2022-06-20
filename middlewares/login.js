const crypto = require('crypto');

const login = (req, res) => {
  // const { email, password } = req.body;
  const tokens = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token: tokens });
};

module.exports = login;
