import * as cheerio from "cheerio";

const url = "https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub"

const response = await fetch(url);
const html = await response.text();

const data = extractTableData(html);

console.log(data);



function extractTableData(html: string): string[][]
{
    const $ = cheerio.load(html);
    const rows: string[][] = [];

    $("table tr").each((_, row) =>
    {
        const cells: string[] = [];

        $(row).find("td, th").each((_, cell) =>
        {
            cells.push($(cell).text().trim());
        });

        rows.push(cells);
    });

    return rows;
}