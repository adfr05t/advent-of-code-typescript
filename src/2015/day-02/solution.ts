import { readInput } from "../../utils/readInput";

class Box
{
    length: number;
    width: number;
    height: number;

    constructor(length: number, width: number, height: number)
    {
        this.length = length;
        this.width = width;
        this.height = height;
    }
}

const boxestoWrap: Box[] = [];
let wrappingPaperTotal = 0;

const filePath = "src/2015/day-02/input.txt"
const input = readInput(filePath);
const dimensionsOfEachBox = input.split(/\r?\n/);

// Process each string into three numbers and use to create a box instance
for (const dimensions of dimensionsOfEachBox)
{
    const rawDimensions = dimensions.split("x");
    const box = new Box(parseInt(rawDimensions[0]), parseInt(rawDimensions[1]), parseInt(rawDimensions[2]));
    boxestoWrap.push(box);
}

for (const box of boxestoWrap)
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