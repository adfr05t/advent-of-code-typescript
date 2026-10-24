import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-06/input.txt"
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);

function solvePuzzle(input: string): number
{
    let grandTotal = 0;

    // Parse input
    const inputLines = input.split(/\r?\n/);
    const rowInputs = parseRows(inputLines)
    const operationIndicators = parseOperationIndicators(inputLines);

    // Perform the calculations and add results to grandTotal
    for (let i = 0; i < rowInputs[0].length; i++)
    {
        if (operationIndicators[i] === "*")
        {
            let multipliedColumn = 1;

            for (let j = 0; j < rowInputs.length; j++)
            {
                multipliedColumn *= rowInputs[j][i];
            }

            grandTotal += multipliedColumn;
        } 
        else if (operationIndicators[i] === "+")
        {
            let sumOfColumn = 0;

            for (let j = 0; j < rowInputs.length; j++)
            {
                sumOfColumn += rowInputs[j][i];
            }

            grandTotal += sumOfColumn;
        }
    }

    return grandTotal;
}

function parseRows(inputLines: string[]): number[][]
{
    const rowInputs: number[][] = []

    for (let i = 0; i < inputLines.length -1; i++)
    {
        let numberString = "";
        rowInputs[i] = [];

        for (let j = 0; j < inputLines[i].length; j++)
        {
            const candidate = inputLines[i][j];

            if (candidate !== " ")
            {
                numberString += candidate;
            }
            else
            {
                if (numberString)
                {
                    rowInputs[i].push(Number(numberString));
                    numberString = "";
                }
            }
        }

        if (numberString)
        {
            rowInputs[i].push(Number(numberString));
        }
    }

    return rowInputs;
}

function parseOperationIndicators(inputLines: string[]): string[]
{
    const operationIndicators: string[] = [];

    for (let i = 0; i < inputLines[inputLines.length - 1].length; i++)
    {
        const candidate = inputLines[inputLines.length - 1][i];

        if (candidate !== " ")
        {
            operationIndicators.push(candidate);
        }
    }

    return operationIndicators;
}