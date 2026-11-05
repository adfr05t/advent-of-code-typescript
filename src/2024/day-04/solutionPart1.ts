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
            // BACK
            if (i % rowLength >= 3)
            {
                if (backwardMatch(input, i, targetWord))
                {
                    targetWordOccurances++;
                }

                if (i >= rowLength * 3) // UP
                {
                    if (diagonalBackUpMatch(input, i, targetWord, rowLength))
                    {
                        targetWordOccurances++;
                    }
                }

                if (i < input.length - (rowLength * 3)) // DOWN
                {
                    if (diagonalBackDownMatch(input, i, targetWord, rowLength))
                    {
                        targetWordOccurances++;
                    }
                }
            }
            // FORWARD
            if (i % rowLength <= rowLength - 4)
            {
                if (forwardMatch(input, i, targetWord))
                {
                    targetWordOccurances++;
                }

                if (i >= rowLength * 3) // UP
                {
                    if (diagonalForwardUpMatch(input, i, targetWord, rowLength))
                    {
                        targetWordOccurances++;
                    }
                }

                if (i < input.length - (rowLength * 3)) // DOWN
                {
                    if (diagonalForwardDownMatch(input, i, targetWord, rowLength))
                    {
                        targetWordOccurances++;
                    }
                }
            }
            //UP 
            if (i >= rowLength * 3)
            {
                if (upwardMatch(input, i, targetWord, rowLength))
                {
                    targetWordOccurances++;
                }
            }
            //DOWN
            if (i < input.length - (rowLength * 3))
            {
                if (downwardMatch(input, i, targetWord, rowLength))
                {
                    targetWordOccurances++;
                }
            }
        }
    }

    return targetWordOccurances;
}

function backwardMatch(input: string, i: number, targetWord: string): boolean
{   
    for (let j = 1; j < targetWord.length; j++)
    {
        if (input[i - j] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}

function forwardMatch(input: string, i: number, targetWord: string): boolean
{
    for (let j = 1; j < targetWord.length; j++)
    {
        if (input[i + j] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}

function upwardMatch(input: string, i: number, targetWord: string, rowLength: number): boolean
{
    for (let j = 1; j < targetWord.length; j++)
    {
        if (input[i - (rowLength * j)] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}

function downwardMatch(input: string, i: number, targetWord: string, rowLength: number): boolean
{
    for (let j = 1; j < targetWord.length; j++)
    {
        if (input[i + (rowLength * j)] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}

function diagonalBackUpMatch(input: string, i: number, targetWord: string, rowLength: number): boolean
{
    for (let j = 1; j < targetWord.length; j++)
    {
        if (input[i - (rowLength * j) - j] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}

function diagonalBackDownMatch(input: string, i: number, targetWord: string, rowLength: number): boolean
{
    for (let j = 1; j < targetWord.length; j++)
    {
        if (input[i + (rowLength * j) - j] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}

function diagonalForwardUpMatch(input: string, i: number, targetWord: string, rowLength: number): boolean
{
    for (let j = 1; j < targetWord.length; j++)
    {
        if (input[i - (rowLength * j) + j] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}

function diagonalForwardDownMatch(input: string, i: number, targetWord: string, rowLength: number): boolean
{
    for (let j = 1; j < targetWord.length; j++)
    {
        if (input[i + (rowLength * j) + j] !== targetWord[j])
        {
            return false;
        }
    }
    return true;
}