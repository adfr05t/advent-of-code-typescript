import { isNumberObject } from "node:util/types";
import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-06/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 2 Answer:", solution);

function solvePuzzle(input: string): number
{

    const inputRows = input.split(/\r?\n/);

    for (let column = inputRows[0].length - 1; column >= 0; column--)
    {
        // Get the character in each row barring last and form them into a value (unless all spaces)
        // When last row contains * or + perform the operation and skip the next column (can simply do i - 1).

        const charactersInColumn: string[] = [];
        const valuesInColumn: number[] = [];

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

            if (operator === "+")
            {
                // Get sum of values
                column--;
            }
            else if (operator === "*")
            {
                // Get product of values
                column--;
            }
        }

        console.log(column, valuesInColumn, operator);
    }

    return 0;
}