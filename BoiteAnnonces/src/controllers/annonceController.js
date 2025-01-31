const Annonce = require("../models/Annonce");

exports.createAnnonce = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const annonce = new Annonce({ title, description, image, user: req.user.id });

    await annonce.save();
    res.status(201).json(annonce);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getAnnonces = async (req, res) => {
  try {
    const annonces = await Annonce.find().populate("user", "firstName lastName");
    res.json(annonces);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getAnnonceById = async (req, res) => {
  try {
    const annonce = await Annonce.findById(req.params.id).populate("user", "firstName lastName");
    if (!annonce) return res.status(404).json({ message: "Annonce non trouvée" });

    res.json(annonce);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.deleteAnnonce = async (req, res) => {
  try {
    const annonce = await Annonce.findById(req.params.id);
    if (!annonce) return res.status(404).json({ message: "Annonce non trouvée" });

    if (annonce.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Non autorisé" });
    }

    await annonce.remove();
    res.json({ message: "Annonce supprimée" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
