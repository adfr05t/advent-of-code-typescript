import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-04/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer", solution);

function solvePuzzle(input: string): number
{
    /* To add:
    *   - use modulo to detect positions at far left or far right of floorplan and treat accordingly
    */

     const splitInput = input.split(/\r?\n/);
     const rowLength = splitInput[0].length;
     const floorPlan = splitInput.join("");

    let accessibleRolls = 0;

     for (let i = 0; i < floorPlan.length; i++)
     {
        if (floorPlan[i] ==="@")
        {
            if (isRollAccessible(floorPlan, i, rowLength))
            {
                accessibleRolls++;
            }
        }
     }

    return accessibleRolls;
}

function isRollAccessible(floorPlan: string, rollPosition: number, rowLength: number): boolean
{
    let adjacentRolls = 0;

    // Check neighbouring positions
    for (let i = rollPosition - 1; i <= rollPosition + 1; i +=2)
    {
        adjacentRolls += positionContainsRoll(floorPlan[i]);
        // no need to check total of adjacent rolls yet
    }

    // Check positions above
    for (let i = rollPosition - (rowLength - 1); i <= rollPosition - (rowLength + 1); i ++)
    {
        adjacentRolls += positionContainsRoll(floorPlan[i]);

        if (adjacentRolls > 3)
        {
            return false;
        }
    }

    // Check positions below
    for (let i = rollPosition + (rowLength - 1); i <= rollPosition + (rowLength + 1); i ++)
    {
        adjacentRolls += positionContainsRoll(floorPlan[i]);

        if (adjacentRolls > 3)
        {
            return false;
        }
    }

    console.log("Position accessible:", rollPosition);
    return true;
}

function positionContainsRoll(positionToCheck: string): number
{
    if (positionToCheck === "@")
    {
        return 1;
    }

    return 0;
}