import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-05/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer", solution);

function solvePuzzle(input: string): number
{
    // NB: if the empty line might contain spaces use /\r?\n\s*\r?\n/
    const splitInput = input.split(/\r?\n\r?\n/);

    const freshIdList = splitInput[0];
    const ingredientIdList = splitInput[1];

    const freshIdRanges = freshIdList.split(/\r?\n/);
    const ingredientIds = ingredientIdList.split(/\r?\n/);

    const availableIngredients = new Set<number>();

    for (const id of ingredientIds)
    {
        availableIngredients.add(Number(id));
    }

    let freshIngredientCount = 0;

    for (const idRange of freshIdRanges)
    {
        freshIngredientCount += findAvailableIngredients(idRange, availableIngredients);

        if (availableIngredients.size === 0)
        {
            return freshIngredientCount;
        }
    }

    return freshIngredientCount;
}

function findAvailableIngredients(idRange: string, availableIngredients: Set<Number>): number
{
    let availableIngredientsFound = 0;

    // parse idRange strings
    const range = idRange.split("-");
    const min = Number(range[0]);
    const max = Number(range[1]);

    for (let i = min; i <= max; i++)
    {
        if (availableIngredients.has(i))
        {
            availableIngredientsFound++;
            availableIngredients.delete(i);
        }
    }

    return availableIngredientsFound;
}