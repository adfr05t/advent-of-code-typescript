import { readInput } from "../../utils/readInput"

const filePath = "src/misc-puzzles/warehouse-scanner/input.txt";
const input = readInput(filePath);

solvePuzzle(input);


function solvePuzzle(input: string): { part1: number, part2: number }
{
    const codes = input.split(/\r?\n/);

    for (const code of codes)
    {
        findLargestSumOfTwo(code);
    }

console.log(input);

    return {
        part1: 0,
        part2: 0
    }
}

function findLargestSumOfTwo(sequence: string)
{
    const largest = 0;
    const secondLargest = 0;

    for (const digit of sequence)
    {
        console.log(digit); // works as expected
    }
}