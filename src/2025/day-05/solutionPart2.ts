import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-05/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 2 Answer:", solution);

function solvePuzzle(input: string)
{
    // Only need the first part of the input
    const idRangesList = input.split(/\r?\n\r?\n/)[0];
    const idRangeStrings = idRangesList.split(/\r?\n/);

    const ranges = idRangeStrings.map((range) =>
    {
        const [min, max] = range.split("-").map(Number);

        return { min, max };
    });

    ranges.sort((a, b) => a.min - b.min);

    const compressedRanges = [];

    for (let i = 0; i < ranges.length; i++)
    {
        const currentRange = ranges[i];
        const nextRange = ranges[i + 1]; 

        // if overlapping
        if (nextRange.min <= currentRange.max)
        {
            // merge the two ranges
            mergeRanges(currentRange, nextRange);
        }
    }
}

function mergeRanges(rangeA: { min: number, max: number }, rangeB: { min: number, max: number })
{
    // change A max to the greater of A and B max
    rangeA.max = Math.max(rangeA.max, rangeB.max);
}