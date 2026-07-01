import {readInput} from "../../utils/readInput.js";

const filePath = "src/2015/day-01/input.txt";
const input = readInput(filePath);

const result = calculateFinalFloor(input);

console.log("Part 1:", result.part1);
console.log("Part 2:", result.part2);


function calculateFinalFloor(input: string): {part1: number, part2: number}
{
    let currentFloor = 0;
    let basementEntered = false;
    let charPos = 1110;

    for (let i = 0; i < input.length; i++)
    {
        if (input.charAt(i) === "(")
        {
            currentFloor++;
        }
        else if (input.charAt(i) === ")")
        {
            currentFloor--;
        }
        
        if (!basementEntered)
        {
            if (currentFloor === -1)
            {
                charPos = i + 1;
                basementEntered = true;
            }
        }
    }

    return {part1: currentFloor, part2: charPos};
}