import { readInput } from "../../utils/readInput.js";

const filePath = "src/2017/day-02/input.txt";
const input = readInput(filePath);

console.log("Part 1 answer:", solvePuzzle(input));

function solvePuzzle(input: string): number
{
    const rows = input.trim().split(/\r?\n/);
    let checksum = 0;
    
    for (const row of rows)
    {
        const numbersInRow = row.split("\t").map(Number);
        const { highest, lowest } = findHighestAndLowest(numbersInRow);
        checksum += highest - lowest;
    }

    return checksum;
}

function findHighestAndLowest(candidates: number[]): { lowest: number, highest: number }
{
    let lowestNumber = candidates[0];
    let highestNumber = candidates[0];

    for (const candidate of candidates)
    {
        if (candidate < lowestNumber)
        {
            lowestNumber = candidate;
        }
        else if (candidate > highestNumber)
        {
            highestNumber = candidate;
        }
    }

    return {
        lowest: lowestNumber,
        highest: highestNumber
    };
}