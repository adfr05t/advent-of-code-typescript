import { readInput } from "../../utils/readInput.js";

const filePath = "src/2017/day-04/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);

console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);


function solvePuzzle(input: string): { part1: number, part2: number }
{
    const passPhrases = input.trim().split(/\r?\n/);

    let validPhrasesCountPart1 = 0;
    let validPhrasesCountPart2 = 0;


    for (const passPhrase of passPhrases)
    {
		const words = passPhrase.split(" ");

		if (!hasDuplicateWords(words))
		{
            validPhrasesCountPart1++;

			if (!hasAnagrams(words))
			{
				validPhrasesCountPart2++;
			}
		}
    }

    return {
        part1: validPhrasesCountPart1,
        part2: validPhrasesCountPart2
    };
}

function hasDuplicateWords(words: string[]): boolean
{
    for (let i = 0; i < words.length; i++)
    {
        for (let j = i + 1; j < words.length; j++)
        {
            if (words[i] === words[j])
            {
                return true;
            }
        }
    }

	return false;
}

function hasAnagrams(words: string[]): boolean
{
	for (let i = 0; i < words.length - 1; i++)
    {
        for (let j = i + 1; j < words.length; j++)
        {
            if (words[j].length === words[i].length)
            {
                const firstWordSorted = words[i].split("").sort().join("");
                const secondWordSorted = words[j].split("").sort().join("");

                if (firstWordSorted === secondWordSorted)
                {
                    return true;
                }
            }
        }
    }

	return false;
}