import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-05/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 2 Answer:", solution);

function solvePuzzle(input: string): number
{
    // Take only the part of the input before blank line
    const idRangesList = input.split(/\r?\n\r?\n/)[0];
    const idRangeStrings = idRangesList.split(/\r?\n/);

    const ranges = idRangeStrings.map((range) =>
    {
        const [min, max] = range.split("-").map(Number);

        return { min, max };
    });

    // Sort ranges by min
    ranges.sort((a, b) => a.min - b.min);

    const compressedRanges = [];

    for (const range of ranges)
    {
        const lastRange = compressedRanges[compressedRanges.length - 1];

        if (!lastRange || range.min > lastRange.max)
        {
            // No overlap: add as a new range
            compressedRanges.push(range);
        }
        else
        {
            // Overlap: disregard range.min since it falls within an existing range; extend the max of the existing range, if required
            lastRange.max = Math.max(lastRange.max, range.max);
        }
    }

    // Count the total number of ids in the adjusted ranges
    let totalIds = 0;

    for (const range of compressedRanges)
    {
        totalIds += range.max - range.min + 1;
    }

    return totalIds;
}