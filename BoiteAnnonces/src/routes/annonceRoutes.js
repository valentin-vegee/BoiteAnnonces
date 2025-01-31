const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { adCreationLimiter } = require("../middleware/limiter");
const { createAnnonce, getAnnonces, getAnnonceById, updateAnnonce, deleteAnnonce } = require("../controllers/annonceController");

const router = express.Router();

router.post("/", adCreationLimiter, createAnnonce);
router.get("/", getAnnonces);
router.get("/:id", getAnnonceById);
router.delete("/:id", authMiddleware, deleteAnnonce);

module.exports = router;
