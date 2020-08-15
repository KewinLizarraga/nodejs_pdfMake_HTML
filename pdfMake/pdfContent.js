const imageBase64 = require("./imageBase64");

module.exports = {
  content: [
    {
      text: "Lorem ipsum\n\n",
      style: "header",
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac faucibus odio.",
      style: "subheader",
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, ofciis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur ofcii cotidie fnitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, ofciis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concedereturleguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur ofcii cotidie fnitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n\n`,
      style: "paragraph",
    },
    {
      alignment: "justify",
      columns: [
        {
          text: [
            "Lorem ipsum dolor sit amet,",
            { text: " consectetur adipisicing elit.", bold: true },
            " Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis.",
            {
              text:
                "Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute.",
              bold: true,
            },
            "Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.",
          ],
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n\n",
        },
      ],
    },
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit:",
    {
      ul: ["Column 1", "Column 2", "Column 3", "Column 4"],
    },
    {
      image: imageBase64,
      width: 200,
      alignment: "center",
    },
    "\n\n",
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      style: "subheader",
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et interdum nisl.",
      margin: [0, 20, 0, 8],
    },
    {
      style: "tableExample",
      table: {
        headerRows: 1,
        body: [
          [
            { text: "Column 1", style: "tableHeader" },
            { text: "Column 2", style: "tableHeader" },
            { text: "Column 3", style: "tableHeader" },
            { text: "Column 4", style: "tableHeader" },
          ],
          [
            "Sample value 1",
            "Sample value 2",
            "Sample value 3",
            "Sample value 4",
          ],
          [
            "Sample value 1",
            "Sample value 2",
            "Sample value 3",
            "Sample value 4",
          ],
          [
            "Sample value 1",
            "Sample value 2",
            "Sample value 3",
            "Sample value 4",
          ],
          [
            "Sample value 1",
            "Sample value 2",
            "Sample value 3",
            "Sample value 4",
          ],
        ],
      },
      layout: {
        hLineWidth: function (i, node) {
          return i === 0 || i === node.table.body.length ? 2 : 1;
        },
        vLineWidth: function (i, node) {
          return i === 0 || i === node.table.widths.length ? 2 : 1;
        },
        hLineColor: function (i, node) {
          return i === 0 || i === node.table.body.length ? "black" : "gray";
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table.widths.length ? "black" : "gray";
        },
      },
    },
    {
      text:
        "It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties",
      style: ["quote", "small"],
    },
  ],
};
