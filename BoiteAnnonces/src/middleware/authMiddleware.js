const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Accès refusé" });

  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
};
