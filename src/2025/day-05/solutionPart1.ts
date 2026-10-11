import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-05/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer", solution);

function solvePuzzle(input: string): number
{
    // NB: if the empty line might contain spaces use /\r?\n\s*\r?\n/
    const splitInput = input.split(/\r?\n\r?\n/);

    const freshIdRangeList = splitInput[0];
    const ingredientIdList = splitInput[1];

    const freshIdRanges = freshIdRangeList.split(/\r?\n/);
    const ingredientIds = ingredientIdList.split(/\r?\n/);

    let freshIngredientCount = 0;

    for (const id of ingredientIds)
    {
        if (isIngredientFresh(id, freshIdRanges))
        {
            freshIngredientCount ++;
        }
    }

    return freshIngredientCount;
}

function isIngredientFresh(ingredientId: string, freshIdRanges: string[]): boolean
{
    for (const idRange of freshIdRanges)
    {
        // parse idRange strings (>) DO THIS EARLIER
        const range = idRange.split("-");
        const min = Number(range[0]);
        const max = Number(range[1]);

        if (Number(ingredientId) >= min && Number(ingredientId) <= max)
        {
            return true;
        }
    }

    return false;
}