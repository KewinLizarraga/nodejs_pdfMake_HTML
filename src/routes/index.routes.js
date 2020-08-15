const { Router } = require("express");
const router = Router();

const pdf = require("../controllers/pdf.controller");

router.get("/", pdf.main);
router.get("/pdf", pdf.generatePdf);

module.exports = router;
