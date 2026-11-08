import { readInput } from "../../utils/readInput";

type OrderingRule = { before: number, after: number };

const filePath = "src/2024/day-05/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);

function solvePuzzle(input: string): number
{
    let total = 0;
    // Split at the full blank line
    const splitInput = input.split(/\r?\n\r?\n/);

    const ruleStrings = splitInput[0].split(/\r?\n/);
    const updateStrings = splitInput[1].split(/\r?\n/);

    const orderingRules: OrderingRule[] = ruleStrings.map((rule) => 
    {
        const [ before, after ] = rule.split("|").map(Number);

        return { before, after };
    });

    for (const updateString of updateStrings)
    {
        const pageNumbers = updateString.split(",").map(Number);

        if (isOrderCorrect(pageNumbers, orderingRules))
        {
            const middlePageIndex = (pageNumbers.length - 1) / 2;
            total += pageNumbers[middlePageIndex];
        }
    }

    return total;
}

function isOrderCorrect(pageNumbers: number[], orderingRules: OrderingRule[]): boolean
{
    // Iterate from last member to 2nd (no need to evaluate 1st as there are no pages before it)
    for (let i = pageNumbers.length - 1; i > 0; i--)
    {
        const page = pageNumbers[i];

        for (let j = 0; j < orderingRules.length; j++)
        {
            if (page === orderingRules[j].before)
            {
                for (let k = 0; k < i; k++)
                {
                    if (pageNumbers[k] === orderingRules[j].after)
                    {
                        return false;
                    }
                }
            }
        }
    }

    return true;
}