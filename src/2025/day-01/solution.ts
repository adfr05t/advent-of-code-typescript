import { readInput } from "../../utils/readInput.js";

const filePath = "src/2025/day-01/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);

function solvePuzzle(input: string): { part1: number, part2: number } 
{
    let dialPosition = 50;
    let dialAtZeroCount = 0;
    let dialPassingZeroCount = 0;

    for (const line of input.trim().split("\n"))
    {
        const instruction = parseInstruction(line);
        const result = rotateDial(instruction.direction, instruction.distance, dialPosition);

        dialPosition = result.dialPosition;
        dialPassingZeroCount += result.dialPassedZeroCount;

        if (dialPosition === 0)
        {
            dialAtZeroCount++;
        }
    }

    return {
        part1: dialAtZeroCount,
        part2: dialPassingZeroCount
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

function rotateDial(direction: string, distance: number, dialPosition: number): { dialPosition: number, dialPassedZeroCount: number }
{
    let dialPassedZeroCount = 0;
    const dialRange = 100;
    const wrappedDistance = distance % dialRange;

    if (direction === "R")
    {
        dialPassedZeroCount = Math.floor((dialPosition + distance) / dialRange);
        dialPosition = (dialPosition + wrappedDistance) % dialRange;
    }
    else
    {
        dialPassedZeroCount = Math.floor(
            (distance + ((dialRange - dialPosition) % dialRange)) / dialRange
        );

        dialPosition = (dialPosition - wrappedDistance + dialRange) % dialRange;
    }

    return {
        dialPosition: dialPosition,
        dialPassedZeroCount: dialPassedZeroCount
    }
}

