import { readInput } from "../../utils/readInput.js";

const filePath = "src/2015/day-01/input.txt";
const input = readInput(filePath);

const { part1, part2 } = solvePuzzle(input);

console.log("Part 1 answer:", part1);
console.log("Part 2 answer:", part2);

function solvePuzzle(input: string): { part1: number, part2: number | undefined }
{
    let currentFloor = 0;
    let firstBasementPosition: number | undefined;

    for (let i = 0; i < input.length; i++)
    {
        const char = input.charAt(i);

        if (char === "(")
        {
            currentFloor++;
        }
        else if (char === ")")
        {
            currentFloor--;
        }
        
        if (firstBasementPosition === undefined && currentFloor === -1)
        {
            firstBasementPosition = i + 1; // Puzzle requires 1-based position
        }
    }

    return { part1: currentFloor, part2: firstBasementPosition };
}