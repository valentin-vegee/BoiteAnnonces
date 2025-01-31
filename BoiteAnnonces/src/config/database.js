const mongoose = require("mongoose");
require("dotenv").config(); 

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; 

    if (!uri) {
      throw new Error("MONGO_URI n'est pas défini dans le fichier .env");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connecté");
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB :", error);
    process.exit(1);
  }
};

module.exports = connectDB;
