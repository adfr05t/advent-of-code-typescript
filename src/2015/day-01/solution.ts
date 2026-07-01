import {readInput} from "../../utils/readInput.js";

const filePath = "src/2015/day-01/input.txt";
const input = readInput(filePath);

console.log(calculateFinalFloor(input));

function calculateFinalFloor(input: string): number
{
    let currentFloor = 0;

    for (const char of input)
    {
        if (char === "(")
        {
            currentFloor++;
        }
        else if (char === ")")
        {
            currentFloor--;
        }
    }

    return currentFloor;
}