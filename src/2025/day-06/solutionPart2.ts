import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-06/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 2 Answer:", solution);

function solvePuzzle(input: string): number
{
    const inputRows = input.split(/\r?\n/);
    let grandTotal = 0;
    let valuesInColumn: number[] = [];

    for (let column = inputRows[0].length - 1; column >= 0; column--)
    {
        const charactersInColumn: string[] = [];

        for (let row = 0; row < inputRows.length - 1; row++)
        {   
            const candidate = inputRows[row][column];

            if (candidate !== " ")
            {
                charactersInColumn.push(candidate);
            }
        }
        
        const operator = inputRows[inputRows.length - 1][column];

        if (charactersInColumn.length > 0)
        {
            valuesInColumn.push(Number(charactersInColumn.join("")));

            if (operator === "+" || operator === "*")
            {
                if (operator === "+")
                {
                    grandTotal += getSum(valuesInColumn);
                }
                else if (operator === "*")
                {
                    grandTotal += getProduct(valuesInColumn);
                }

                valuesInColumn = [];
                column--;
            }
            
        }
    }

    return grandTotal;
}

function getSum(values: number[]): number
{
    let result = 0;

    for (const value of values)
    {
        result += value;
    }

    return result;
}

function getProduct(values: number[]): number
{
    let result = 1;

    for (const value of values)
    {
        result *= value;
    }

    return result;
}