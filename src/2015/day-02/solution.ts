import { readInput } from "../../utils/readInput";

type Box = {
    length: number;
    width: number;
    height: number;
}

const boxesToWrap: Box[] = [];
let wrappingPaperTotal = 0;

const filePath = "src/2015/day-02/input.txt"
const input = readInput(filePath);
const boxDimensionsText = input.split(/\r?\n/);

// Process each string into three numbers and use to create a box object
for (const dimensions of boxDimensionsText)
{
    const [length, width, height] = dimensions.split("x").map(Number);
    const box: Box = { length, width, height };
    boxesToWrap.push(box);
}

for (const box of boxesToWrap)
{
    wrappingPaperTotal += calculateBoxSurfaceArea(box);
}

// Answer
console.log(wrappingPaperTotal);

function calculateBoxSurfaceArea(box: Box): number
{
    // surface area = 2*l*w + 2*w*h + 2*h*l
    const surfaceArea = (2 * (box.length * box.width)) + (2 * (box.width * box.height)) + (2 * (box.height * box.length));

    // ...add the area of the smallest side (which will be l*w or w*h or h*l)
    const smallestSide = Math.min(box.length * box.width, box.width * box.height, box.height * box.length);

    return surfaceArea + smallestSide;
}