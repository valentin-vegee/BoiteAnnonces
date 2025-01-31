const rateLimit = require("express-rate-limit");

const adCreationLimiter = rateLimit({
  windowMs: 1000, // 1 seconde
  max: 10, // Max 10 requêtes
  message: { message: "Trop de requêtes. Réessayez plus tard." },
  standardHeaders: true,
  legacyHeaders: false,
});

const generalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limite globale à 100 requêtes par minute
  message: { message: "Trop de requêtes. Réessayez plus tard." },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { adCreationLimiter, generalLimiter };
