import { readInput } from "../../utils/readInput";

const filePath = "src/2024/day-04/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);

function solvePuzzle(input: string): number
{
    let rowLength = input.indexOf("\n");
    // Account for Windows-style line endings (\r\n)
    rowLength -= (input[rowLength - 1] === "\r") ? 1 : 0;

    // Remove new-line characters from input
    const flattenedInput = input.replace(/\r?\n/g, "");
    const targetWord = "XMAS";

    return findMatches(flattenedInput, rowLength, targetWord);
}

function findMatches(input: string, rowLength: number, targetWord: string): number
{
    let targetWordOccurances = 0;

    for (let i = 0; i < input.length; i++)
    {
        if (input[i] === targetWord[0])
        {   
            // LEFT
            if (i % rowLength >= targetWord.length - 1)
            {
                if (findMatch(input, i, targetWord, -1, 0))
                {
                    targetWordOccurances++;
                }
                // LEFT-UP
                if (i >= rowLength * (targetWord.length - 1))
                {
                    if (findMatch(input, i, targetWord, -1, -1, rowLength))
                    {
                        targetWordOccurances++;
                    }
                }
                // LEFT-DOWN
                if (i < input.length - (rowLength * (targetWord.length - 1)))
                {
                    if (findMatch(input, i, targetWord, -1, 1, rowLength))
                    {
                        targetWordOccurances++;
                    }
                }
            }
            // RIGHT
            if (i % rowLength < rowLength - (targetWord.length - 1))
            {
                if (findMatch(input, i, targetWord, 1, 0))
                {
                    targetWordOccurances++;
                }
                // RIGHT-UP
                if (i >= rowLength * (targetWord.length - 1))
                {
                    if (findMatch(input, i, targetWord, 1, -1, rowLength))
                    {
                        targetWordOccurances++;
                    }
                }
                // RIGHT-DOWN
                if (i < input.length - (rowLength * (targetWord.length - 1)))
                {
                    if (findMatch(input, i, targetWord, 1, 1, rowLength))
                    {
                        targetWordOccurances++;
                    }
                }
            }
            // UP 
            if (i >= rowLength * (targetWord.length - 1))
            {
                if (findMatch(input, i, targetWord, 0, -1, rowLength))
                {
                    targetWordOccurances++;
                }
            }
            // DOWN
            if (i < input.length - (rowLength * (targetWord.length - 1)))
            {
                if (findMatch(input, i, targetWord, 0, 1, rowLength))
                {
                    targetWordOccurances++;
                }
            }
        }
    }

    return targetWordOccurances;
}

function findMatch(input: string, startingIndex: number, targetWord: string,  horizontalDirection: number, verticalDirection: number, rowLength?: number,): boolean
{
    for (let j = 1; j < targetWord.length; j++)
    {
        rowLength = rowLength ?? 0;

        const indexToCheck = startingIndex + (horizontalDirection * j) + (verticalDirection * rowLength * j);

        if (input[indexToCheck] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}