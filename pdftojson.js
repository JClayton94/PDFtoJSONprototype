const PDFParser = require("pdf2json");
const fs = require("fs");
const dir =  "./pdfs";

let dirLength = fs.readdirSync(dir).length;

let pdf;
console.log(dirLength);

for(let i = 1; i < dirLength + 1; i++){
    console.log("here");
    pdf  = new PDFParser();
    pdf.on("pdfParser_dataError", errData => console.error(errData.parserError));
    pdf.on("pdfParser_dataReady", pdfData => {
            fs.writeFile("./jsons/content" + i +  ".json", JSON.stringify(pdfData), err => {
                if (err) throw err;
            });
        }); 
        
    pdf.loadPDF("./pdfs/test" + i + ".pdf");
}
