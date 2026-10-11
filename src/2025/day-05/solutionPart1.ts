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
    const ingredientIds = ingredientIdList.split(/\r?\n/).map(Number);

    const rangesArray = freshIdRanges.map((idRange) =>
    {
        const [min, max] = idRange.split("-").map(Number);

        return { min, max };
    });

    let freshIngredientCount = 0;

    for (const id of ingredientIds)
    {
        if (isIngredientFresh(id, rangesArray))
        {
            freshIngredientCount ++;
        }
    }

    return freshIngredientCount;
}

function isIngredientFresh(ingredientId: number, rangesArray: { max: number, min: number }[]): boolean
{
    for (const range of rangesArray)
    {
        if (ingredientId >= range.min && ingredientId <= range.max)
        {
            return true;
        }
    }

    return false;
}