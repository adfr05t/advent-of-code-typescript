import { readInput } from "../../utils/readInput";

type Box = {
    length: number;
    width: number;
    height: number;
}

const filePath = "src/2015/day-02/input.txt"
const input = readInput(filePath);

const answer = solvePuzzle(input);
console.log(answer);

function solvePuzzle(input: string): number
{
    let wrappingPaperTotal = 0;
    const boxDimensionStrings = input.split(/\r?\n/);

    for (const dimensions of boxDimensionStrings)
    {
        const [length, width, height] = dimensions.split("x").map(Number);
        const box: Box = { length, width, height };

        wrappingPaperTotal += calculateWrappingPaperNeeded(box);
    }

    return wrappingPaperTotal;
}

function calculateWrappingPaperNeeded(box: Box): number
{
    // Amount of paper required is surface area of box + area of the smallest side
    const areaOfSide1 = box.length * box.width;
    const areaOfSide2 = box.width * box.height;
    const areaOfSide3 = box.height * box.length;

    const surfaceArea = 2 * (areaOfSide1 + areaOfSide2 + areaOfSide3);
    const smallestSide = Math.min(areaOfSide1, areaOfSide2, areaOfSide3);

    return surfaceArea + smallestSide;
}