const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");

const { content } = require("../../pdfMake/pdfContent");
const { styles, defaultStyle } = require("../../pdfMake/pdfStyles");

pdfMake.vfs = pdfFonts.pdfMake.vfs;

module.exports = {
  main: (req, res) => {
    res.render("public/index");
  },
  generatePdf: (req, res) => {
    const dd = {
      content,
      styles,
      defaultStyle,
    };
    const pdfDoc = pdfMake.createPdf(dd);
    pdfDoc.getBase64((data) => {
      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment;filename=pdfTest.pdf",
      });
      const dowload = Buffer.from(data.toString("utf-8"), "base64");
      res.end(dowload);
    });
  },
};
