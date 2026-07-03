import { readInput } from "../../utils/readInput.js";

type Box = {
    length: number;
    width: number;
    height: number;
};

const filePath = "src/2015/day-02/input.txt";
const input = readInput(filePath);

const { part1, part2 } = solvePuzzle(input);

console.log("Part 1 answer:", part1);
console.log("Part 2 answer:", part2);

function solvePuzzle(input: string): { part1: number, part2: number }
{
    let wrappingPaperTotal = 0;
    let ribbonLengthTotal = 0;

    const boxDimensionStrings = input.split(/\r?\n/);

    for (const boxDimensionString of boxDimensionStrings)
    {
        const box = parseBox(boxDimensionString);

        wrappingPaperTotal += calculateWrappingPaperNeeded(box);
        ribbonLengthTotal += calculateRibbonLengthNeeded(box);
    }

    return {
        part1: wrappingPaperTotal,
        part2: ribbonLengthTotal
    };
}

function parseBox(dimensions: string): Box
{
    const [length, width, height] = dimensions.split("x").map(Number);

    return { length, width, height };
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

function calculateRibbonLengthNeeded(box: Box): number
{
    const dimensions = [box.length, box.width, box.height];

    // Length to go around box (distance around shortest sides)
    const sortedDimensions = dimensions.sort((a, b) => a - b);
    const ribbonLength = 2 * (sortedDimensions[0] + sortedDimensions[1]);

    // Length for bow is equal to box volume
    const bowLength = box.length * box.width * box.height;

    return ribbonLength + bowLength;
}