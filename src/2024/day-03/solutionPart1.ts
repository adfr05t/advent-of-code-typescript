import { readInput } from "../../utils/readInput";

const filePath = "src/2024/day-03/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);

function solvePuzzle(input: string): number
{
    // Create an array of strings matching a regular expression
    const matches = input.match(/mul\(\d+,\d+\)/g);

    let grandTotal = 0;

    if (matches)
    {
        for (const instruction of matches)
        {
            grandTotal += processInstruction(instruction);
        }
    }
    
    return grandTotal;
}

function processInstruction(instruction: string): number
{
    // Capture the two digit sequences
    const capture = instruction.match(/(\d+),(\d+)/);

    if (capture)
    {
        return Number(capture[1]) * Number(capture[2]);
    }
    
    return 0;
}