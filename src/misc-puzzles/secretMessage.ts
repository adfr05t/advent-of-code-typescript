import * as cheerio from "cheerio";

async function printSolution(url: string): Promise<void>
{
    const response = await fetch(url);
    const html = await response.text();

    const dataRows = extractTableData(html);

    const grid = createGrid(dataRows);

    for (const row of grid)
    {
        console.log(row.join(""));
    }
}

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

    // Remove first row, which contains only column headings
    return rows.slice(1);
}

function createGrid(dataRows: string[][]): string[][]
{
    // Find the highest grid coordinates for x and y.
    let maxXPosition = 0;
    let maxYPosition = 0;

    for (const [x, , y] of dataRows)
    {
        maxXPosition = Math.max(maxXPosition, Number(x));
        maxYPosition = Math.max(maxYPosition, Number(y));
    }

    // Initialise the grid.
    const grid: string[][] = Array.from({ length: maxYPosition + 1 },() => Array(maxXPosition + 1).fill(" "));

    for (const [x, characterToPrint, y] of dataRows)
    {
        // (0, 0) is bottom-left
        grid[maxYPosition - Number(y)][Number(x)] = characterToPrint;
    }

    return grid;
}

const url = "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub";

await printSolution(url);