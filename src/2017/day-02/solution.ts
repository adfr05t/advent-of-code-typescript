import { readInput } from "../../utils/readInput.js";

const filePath = "src/2017/day-02/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);


function solvePuzzle(input: string): { part1: number, part2: number }
{
    const rows = input.trim().split(/\r?\n/);
    let sumOfHighestMinusLowest = 0;
    let sumOfQuotients = 0;
    
    for (const row of rows)
    {
        const numbersInRow = row.split("\t").map(Number);

        const { highest, lowest } = findHighestAndLowest(numbersInRow);
        sumOfHighestMinusLowest += highest - lowest;

        sumOfQuotients += findQuotientWithNoRemainder(numbersInRow);
    }

    return { 
        part1: sumOfHighestMinusLowest,
        part2: sumOfQuotients
    };
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

function findQuotientWithNoRemainder(candidates: number[]): number
{
    for (let i = 0; i < candidates.length; i++)
    {
        const dividend = candidates[i];

        for (let j = 0; j < candidates.length; j++)
        {
            if (j !== i)
            {
                if (dividend % candidates[j] === 0)
                {
                    return dividend / candidates[j];
                }
            }
        }
    }

    throw new Error("No evenly divisible pair found.");
}