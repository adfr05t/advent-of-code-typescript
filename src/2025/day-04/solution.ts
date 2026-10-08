import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-04/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer", solution);

function solvePuzzle(input: string): number
{
    /* parse input

    Need to know:
     - length of one row
     - length of the whole input string (remember line breaks and carriage returns are counted as characters!)

    ... so
     split by /\r?\n/, get length of one string, then join all strings into one

     Then:
     - iterate through characters in the string. If '@' use my math algorithm for checking 'surrounding' chars and check for === @. If less than 3, increment count of accessible rolls.
    */

    return 0;
}