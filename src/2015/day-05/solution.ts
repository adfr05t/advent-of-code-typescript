import { readInput } from "../../utils/readInput.js";

const filePath = "src/2015/day-05/input.txt";
const input = readInput(filePath);

const { part1, part2 } = solvePuzzle(input);
console.log("Part 1 answer:", part1);
console.log("Part 2 answer:", part2);


function solvePuzzle(input: string): { part1: number, part2: number }
{
    const stringsToEvaluate = input.split(/\r?\n/);
    let niceStringCount = 0;

    for (const candidate of stringsToEvaluate)
    {
        if (!containsNaughtyStrings(candidate) && containsDoubleLetter(candidate) && containsAtLeastThreeVowels(candidate))
        {
            niceStringCount++;
        }
    }

    return { part1: niceStringCount, part2: 0 };
}

function containsNaughtyStrings(candidate: string): boolean
{
    const naughtyStrings = ["ab", "cd", "pq", "xy"];

    for (let i = 0; i < candidate.length - 1; i++)
    {
        const characterPair = candidate.substring(i, i + 2);

        if (naughtyStrings.includes(characterPair))
        {
            return true;
        }
    }

    return false;
}

function containsDoubleLetter(candidate: string): boolean
{
    for (let i = 0; i < candidate.length - 1; i++)
    {
        if (candidate.charAt(i) === candidate.charAt(i + 1))
        {
            return true;
        }
    }

    return false;
}

function containsAtLeastThreeVowels(candidate: string): boolean
{
    const vowels = [ "a", "e", "i", "o", "u" ];
    let numberOfVowels = 0;

    for (const character of candidate)
    {
        for (const vowel of vowels)
        {
            if (character === vowel)
            {
                numberOfVowels++;
            }
        }

        if (numberOfVowels >= 3)
        {
            return true;
        }
    }

    return false;
}