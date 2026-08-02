import { readInput } from "../../utils/readInput.js";

const filePath = "src/2025/day-01/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);

function solvePuzzle(input: string): { part1: number, part2: number } 
{
    let dialPosition = 50;
    let dialZeroCount = 0;

    for (const line of input.trim().split("\n"))
    {
        const instruction = parseInstruction(line);
        dialPosition = rotateDial(instruction.direction, instruction.distance, dialPosition);

        if (dialPosition === 0)
        {
            dialZeroCount++;
        }
    }

    return {
        part1: dialZeroCount,
        part2: 0
    }
}

function parseInstruction(line: string): { direction: string, distance: number }
{
    const direction = line.charAt(0);
    const distance = Number(line.substring(1));

    return {
        direction: direction,
        distance: distance
    }
}

function rotateDial(direction: string, distance: number, dialPosition: number): number
{
    const dialRange = 100;
    distance = distance % dialRange;

    if (direction === "R")
    {
        dialPosition = (dialPosition + distance) % dialRange;
    }
    else
    {
        dialPosition = (dialPosition - distance + dialRange) % dialRange;
    }

    return dialPosition;
}

