import { readInput } from "../../utils/readInput.js";

const filePath = "src/2017/day-01/input.txt";
const input = readInput(filePath);

console.log("Part 1 answer:", sumMatchingNumbers(input, 1));
console.log("Part 2 answer:", sumMatchingNumbers(input, input.length / 2));

function sumMatchingNumbers(input: string, spacingBetweenCharactersToCheck: number): number
{
    let sumOfMatchingNumbers = 0;

    for (let i = 0; i < input.length; i++)
    {
        if (input.charAt(i) === input.charAt((i + spacingBetweenCharactersToCheck) % input.length))
        {
            sumOfMatchingNumbers += Number(input.charAt(i));
        }
    }

    return sumOfMatchingNumbers;
}