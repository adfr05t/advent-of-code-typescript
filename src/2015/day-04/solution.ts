import { createHash } from "node:crypto"
import { readInput } from "../../utils/readInput.js"

const filePath = "src/2015/day-04/input.txt"
const input = readInput(filePath);

const { part1, part2 } = solvePuzzle(input);

console.log("Part 1 answer:", part1);
console.log("Part 2 answer:", part2);

function solvePuzzle(input: string): { part1: number, part2: number}
{   
    const zerosTarget = { part1: 5, part2: 6 };
    const firstNumberToAppend = 1;

    const part1Solution = findLowestMatchingNumber(input, zerosTarget.part1, firstNumberToAppend);
    const part2Solution = findLowestMatchingNumber(input, zerosTarget.part2, part1Solution);

    return { part1: part1Solution, part2: part2Solution };
}

function getHash(input: string): string
{
    const hashBuilder = createHash("md5");
    hashBuilder.update(input);
    const hash = hashBuilder.digest("hex");

    return hash;
}

function findLowestMatchingNumber(input: string, zerosTarget: number, numberToAppend: number): number
{
    for (numberToAppend; ; numberToAppend++)
    {
        const appendedInput = appendNumberToInput(input, numberToAppend)

        if (countInitialZeros(getHash(appendedInput)) >= zerosTarget)
        {   
            return numberToAppend;
        }
    }
}

function appendNumberToInput(input: string, numberToAppend: number): string
{
    return input.concat(numberToAppend.toString());
}

function countInitialZeros(hash: string): number
{
    let counter = 0;

    for (const character of hash)
    {
        if (character !== "0")
        {
            break;
        }
        
        counter++;
    }

    return counter;
}