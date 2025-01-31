const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { jwtSecret } = require("../config/keys");

exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email déjà utilisé" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ firstName, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "Utilisateur créé" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }
    
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Déconnexion réussie" });
};
