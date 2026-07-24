import { readInput } from "../../utils/readInput.js";

const filePath = "src/2017/day-04/input.txt";
const input = readInput(filePath);

console.log("Part 1 answer:", solvePuzzle(input).part1);

function solvePuzzle(input: string): { part1: number, part2: number }
{
    const passPhrases = input.trim().split(/\r?\n/);
    let validPassPhraseCount = 0;

    for (const passPhrase of passPhrases)
    {
        if (isPassPhraseValid(passPhrase))
        {
            validPassPhraseCount++;
        }
    }

    return {
        part1: validPassPhraseCount,
        part2: 0
    };
}

function isPassPhraseValid(passPhrase: string): boolean
{
    const words = passPhrase.split(" ");

    for (let i = 0; i < words.length; i++)
    {
        for (let j = 0; j < words.length && j !== i; j++)
        {
            if (words[i] === words[j])
            {
                return false;
            }
        }
    }

    return true;
}