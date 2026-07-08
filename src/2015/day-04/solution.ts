import { createHash } from "node:crypto"
import { readInput } from "../../utils/readInput.js"

const filePath = "src/2015/day-04/input.txt"
const input = readInput(filePath);

const { part1, part2 } = solvePuzzle(input);

console.log("Part 1 answer:", part1);
// console.log("Part 2 answer:", part2);

function solvePuzzle(input: string): { part1: number, part2: number}
{
    for (let i = 1; ; i++)
    {
        const appendedInput = input.concat(i.toString());

        if (countInitialZeros(getHash(appendedInput)) >= 5)
        {
            return { part1: i, part2: 0};
        }
    }
}

function getHash(input: string): string
{
    const hashBuilder = createHash("md5");
    hashBuilder.update(input);
    const hash = hashBuilder.digest("hex");

    return hash;;
}

function countInitialZeros(hash: string): number
{
    let counter = 0;

    for (const character of hash)
    {
        if (character !== "0")
        {
            break;
        }
        
        counter++;
    }

    return counter;
}