import { readInput } from "../../utils/readInput";

const filePath = "src/2024/day-03/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 2 Answer:", solution);

function solvePuzzle(input: string): number
{
    const matches = input.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g);

    if (matches)
    {
        return processInstructions(matches);
    }

    return 0;
}

function processInstructions(instructions: string[]): number
{
    let calculationsEnabled = true;
    let totalOfCalculations = 0;

    for (const instruction of instructions)
    {
        if (instruction === "do()")
        {
            calculationsEnabled = true;
        }
        else if (instruction === "don't()")
        {
            calculationsEnabled = false;
        }
        else if (calculationsEnabled)
        {   
            // Capture the two digit sequences
            const capture = instruction.match(/(\d+),(\d+)/);

            if (capture)
            {
                totalOfCalculations += Number(capture[1]) * Number(capture[2]);
            }
        }
    }

    return totalOfCalculations;
}