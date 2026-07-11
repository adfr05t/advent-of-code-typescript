import { readInput } from "../../utils/readInput.js";

const filePath = "src/2015/day-05/input.txt";
const input = readInput(filePath);

const { part1, part2 } = solvePuzzle(input);
console.log("Part 1 answer:", part1);
console.log("Part 2 answer:", part2);


function solvePuzzle(input: string): { part1: number, part2: number }
{
    const stringsToEvaluate = input.split(/\r?\n/);
    let niceStringsCount = { part1: 0, part2: 0 }

    for (const candidate of stringsToEvaluate)
    {
        if (!containsNaughtyStrings(candidate) && containsDoubleLetter(candidate, 1) && containsAtLeastThreeVowels(candidate))
        {
            niceStringsCount.part1++;
        }

        if (doesAnyLetterPairRepeat(candidate) && containsDoubleLetter(candidate, 2))
        {
            niceStringsCount.part2++;
        }
    }

    return { part1: niceStringsCount.part1, part2: niceStringsCount.part2 };
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

function containsDoubleLetter(candidate: string, spacing: number): boolean
{
    for (let i = 0; i < candidate.length - 1; i++)
    {
        if (candidate.charAt(i) === candidate.charAt(i + spacing))
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

function doesAnyLetterPairRepeat(candidate: string): boolean
{
        for (let i = 0; i <= candidate.length - 4; i++)
        {
            const letterPair = candidate.charAt(i).concat(candidate.charAt(i + 1));
            const remainderOfString = candidate.substring(i + 2);

            if (remainderOfString.includes(letterPair))
            {
                return true;
            }
        }

    return false;
}