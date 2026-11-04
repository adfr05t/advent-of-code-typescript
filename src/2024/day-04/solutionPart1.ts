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
        console.log(input[i], i);

        if (input[i] === targetWord[0])
        {   
            // BACKWARDS
            // does i - 1 === M
            console.log(input[i], "is X")
            if (backwardsMatch(input, i, targetWord))
            {
                targetWordOccurances++;
                console.log(i, "back");
            }
            if (forwardsMatch(input, i, targetWord))
            {
                targetWordOccurances++;
                console.log(i, "forwards");

            }

            //FORWARDS
            // i + 1

            //UP 
            // i - row length

            //DOWN
            // i + grid row length

            //DIAGONAL: forwards-up, forwards-down, backwards-up, backwards-down
        }
    }

    return targetWordOccurances;
}

// NEED RULES ABOUT VALID START POINTS
// forward: if i % 10 <= 6
// backward: if i % 10 >= 3
// up: i >= rowLength * 3
// down: i < input.length - (rowLength * 3) 

// each diagonal is a COMB0 of two from above rules.

// these should be checked before decideing which match-checking functions to call. They should be nested conditions. eg if forward valid --> if ...


function backwardsMatch(input: string, i: number, targetWord: string): boolean
{   
    console.log("looking for backwards match")

    if (i % 10 < 3)
    {
        console.log("not enough characters in direction");
        return false;
    }

    for (let j = 1; j < targetWord.length; j++)
    {
        console.log(i - j, input[i - j]);

        if (input[i - j] !== targetWord[j])
        {
            console.log("check failed");
            return false;
        }
    }

    console.log("MATCH");

    return true;
}

function forwardsMatch(input: string, i: number, targetWord: string): boolean
{
    console.log("looking for forward match")

    if (i % 10 > 6)
    {
        console.log("not enough characters in direction");
        return false;
    }

    for (let j = 1; j < targetWord.length; j++)
    {
        console.log(i + j, input[i + j]);
        if (input[i + j] !== targetWord[j])
        {
            console.log("check failed");
            return false;
        }
    }
    console.log("MATCH");

    return true;
}

