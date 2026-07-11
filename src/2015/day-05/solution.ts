import { readInput } from "../../utils/readInput.js";

const filePath = "src/2015/day-05/input.txt";
const input = readInput(filePath);

const { part1, part2 } = solvePuzzle(input);
console.log("Part 1 answer:", part1);
console.log("Part 2 answer:", part2);


function solvePuzzle(input: string): { part1: number, part2: number }
{
    const stringsToEvaluate = input.split(/\r?\n/);
    let niceStringsCount = 0;

    for (const candidate of stringsToEvaluate)
    {
        if (!containsNaughtyStrings(candidate) && containsDoubleLetter(candidate) && containsAtLeastThreeVowels(candidate))
        {
            niceStringsCount++;
        }
    }

    return { part1: niceStringsCount, part2: 0 };
}

function containsNaughtyStrings(candidate: string): boolean
{
    const naughtyStrings = ["ab", "cd", "pq", "xy"];

    for (const naughtyString of naughtyStrings)
    {
        if (candidate.includes(naughtyString))
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
    let vowelCount = 0;

    for (const character of candidate)
    {
        if (vowels.includes(character))
        {
            vowelCount++;

            if (vowelCount >= 3)
            {
                return true;
            }
        }
    }

    return false;
}