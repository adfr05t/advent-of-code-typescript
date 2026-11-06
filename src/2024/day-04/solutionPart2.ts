import { readInput } from "../../utils/readInput";

const filePath = "src/2024/day-04/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 2 Answer:", solution);

function solvePuzzle(input: string): number
{
    let rowLength = input.indexOf("\n");
    // Account for Windows-style line endings (\r\n)
    rowLength -= (input[rowLength - 1] === "\r") ? 1 : 0;

    // Remove new-line characters from input
    const flattenedInput = input.replace(/\r?\n/g, "");

    return findMatches(flattenedInput, rowLength);
}

function findMatches(input: string, rowLength: number): number
{
    let matches = 0;

    // Start at 2nd row, 2nd column
    const firstValidIndex = rowLength + 1;

    for (let i = firstValidIndex; i < input.length; i++)
    {
        if (input[i] === "A")
        {   
            const validPosition = (i % rowLength > 0 && i % rowLength < rowLength - 1 && i < input.length - rowLength);

            if (validPosition && findMatch(input, i, rowLength))
            {
                matches++;
            }
        }
    }

    return matches;
}

function findMatch(input: string, startingIndex: number, rowLength: number): boolean
{
    const leftUp = getCharacter(input, startingIndex, rowLength, -1, -1);
    const rightUp = getCharacter(input, startingIndex, rowLength, 1, -1);
    const leftDown = getCharacter(input, startingIndex, rowLength, -1, 1);
    const rightDown = getCharacter(input, startingIndex, rowLength, 1, 1);

    const firstDiagonal = (leftUp === "M" && rightDown === "S") || (leftUp === "S" && rightDown === "M");
    const secondDiagonal = (rightUp === "M" && leftDown === "S" || rightUp === "S" && leftDown === "M");

    return firstDiagonal && secondDiagonal;
}

function getCharacter(input: string, startingIndex: number, rowLength: number, horizontalDirection: number, verticalDirection: number): string
{
    return input[startingIndex + horizontalDirection + (rowLength * verticalDirection)];
}