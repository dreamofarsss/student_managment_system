const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    next();
}

module.exports = hashPassword;