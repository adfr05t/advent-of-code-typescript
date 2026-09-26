import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-02/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);

function solvePuzzle(input: string): { part1: number, part2: number }
{
    let sumOfInvalidIds = 0;
    const productIdRangeStrings = input.split(",");

    for (const idRangeString of productIdRangeStrings)
    {
        const [idRangeStart, idRangeEnd] = idRangeString.split("-").map(Number);

        for (let id = idRangeStart; id <= idRangeEnd; id++)
        {
            if (isInvalid(id))
            {
                sumOfInvalidIds += id;
            }
        }
    }

    return {
        part1: sumOfInvalidIds, 
        part2: 0
    };
}

function isInvalid(id: number): boolean
{
    const idString = id.toString();

        // only IDs with an even number of digits can be invalid.
        if (idString.length % 2 === 0)
        {
            const halfwayPoint = idString.length / 2;
            const firstHalfId = idString.slice(0, halfwayPoint);
            const secondHalfId = idString.slice(halfwayPoint);

            return firstHalfId === secondHalfId;
        }

        return false;
}