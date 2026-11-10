import { readInput } from "../../utils/readInput";

type OrderingRule = { before: number, after: number };

const filePath = "src/2024/day-05/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);

function solvePuzzle(input: string): number
{
    let sumOfMiddlePages = 0;

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

        if (isOrderIncorrect(pageNumbers, orderingRules))
        {
            const middlePageIndex = (pageNumbers.length - 1) / 2;
            sumOfMiddlePages += pageNumbers[middlePageIndex];
        }
    }

    return sumOfMiddlePages;
}

function isOrderIncorrect(pageNumbers: number[], orderingRules: OrderingRule[]): boolean
{
    // Iterate from last member to 2nd (no need to evaluate 1st as no pages come before it).
    for (let currentPage = pageNumbers.length - 1; currentPage > 0; currentPage--)
    {
        const page = pageNumbers[currentPage];

        for (let ruleIndex = 0; ruleIndex < orderingRules.length; ruleIndex++)
        {
            if (page === orderingRules[ruleIndex].before)
            {
                for (let earlierPage = 0; earlierPage < currentPage; earlierPage++)
                {
                    if (pageNumbers[earlierPage] === orderingRules[ruleIndex].after)
                    {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

function swapPages(update: number[], pageA: number, pageB: number)
{
    [update[pageA], update[pageB]] = [update[pageB], update[pageA]];
}