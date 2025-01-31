const path = require("path");
const express = require("express");
const connectDB = require("./src/config/database");
require("dotenv").config();

const authRoutes = require("./src/routes/authRoutes");
const annonceRoutes = require("./src/routes/annonceRoutes");
const session = require("express-session");
const passport = require("./src/config/passport");
const { generalLimiter } = require("./src/middleware/limiter");



connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: keys.jwtSecret, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(generalLimiter); 

app.use("/api/auth", authRoutes);

app.use("/api/annonces", annonceRoutes);

console.log("Routes enregistrées après ajout de /api/auth et /api/annonces :");
app._router.stack.forEach((middleware) => {
    if (middleware.route) { 
        console.log(middleware.route.path); 
    } else if (middleware.name === 'router') {
        middleware.handle.stack.forEach((handler) => {
            if (handler.route) {
                console.log(handler.route.path);
            }
        });
    }
});


app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API BoiteAnnonces 🚀");
});

s
console.log("Routes enregistrées :", app._router.stack.map(r => r.route && r.route.path).filter(Boolean));

app.listen(5000, () => console.log("🚀 Serveur sur http://localhost:5000"));
