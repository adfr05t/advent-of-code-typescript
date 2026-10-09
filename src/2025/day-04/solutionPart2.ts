

// - Add an array to track all accessible positions and then when re-checking the floorPlan I don't include positions in the array as being filled with a roll.
// - Re-check the floorPlan until accessibleRolls remains the same for a subsequent iteration

import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-04/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 2 answer", solution);

function solvePuzzle(input: string): number
{
    const splitInput = input.split(/\r?\n/);
    const rowLength = splitInput[0].length;
    const floorPlan = splitInput.join("");
    const removedRolls: number[] = [];

    let accessibleRollsTotal = 0;

    while (true)
    {
        const newAccessibleRolls = findAccessibleRolls(floorPlan, rowLength, removedRolls);

        if (newAccessibleRolls === 0)
        {
            return accessibleRollsTotal;
        }
        else
        {
            accessibleRollsTotal += newAccessibleRolls;
        }
    }
}

function findAccessibleRolls(floorPlan: string, rowLength: number, removedRolls: number[]): number
{
    let accessibleRolls = 0;

    for (let i = 0; i < floorPlan.length; i++)
    {
        if (floorPlan[i] ==="@" && !removedRolls.includes(i))
        {
            if (isRollAccessible(floorPlan, i, rowLength, removedRolls))
            {
                accessibleRolls++;
                removedRolls.push(i);
            }
        }
    }

    return accessibleRolls;
}

function isRollAccessible(floorPlan: string, rollPosition: number, rowLength: number, removedRolls: number[]): boolean
{
    let adjacentRolls = 0;

    // Far left floorPlan positions
    if (rollPosition % rowLength === 0)
    {
        // Check neighbouring position
        if (!removedRolls.includes(rollPosition + 1))
        {
            adjacentRolls += positionContainsRoll(floorPlan[rollPosition + 1]);
        }

        // Check positions above
        for (let i = rollPosition - rowLength; i <= rollPosition - (rowLength - 1); i ++)
        {
            if (!removedRolls.includes(i))
            {
                adjacentRolls += positionContainsRoll(floorPlan[i]);

                if (adjacentRolls > 3)
                {
                    return false;
                }
            }
        }

        // Check positions below
        for (let i = rollPosition + rowLength; i <= rollPosition + (rowLength + 1); i ++)
        {
            if (!removedRolls.includes(i))
            {
                adjacentRolls += positionContainsRoll(floorPlan[i]);

                if (adjacentRolls > 3)
                {
                    return false;
                }
            }
        }

        return true;
    }
    // Far right floorPlan positions
    else if ((rollPosition % rowLength === rowLength - 1))
    {
        // Check neighbouring position
        if (!removedRolls.includes(rollPosition - 1))
        {
            adjacentRolls += positionContainsRoll(floorPlan[rollPosition - 1]);
        }

        // Check positions above
        for (let i = rollPosition - (rowLength + 1); i <= rollPosition - rowLength; i ++)
        {
            if (!removedRolls.includes(i))
            {
                adjacentRolls += positionContainsRoll(floorPlan[i]);

                if (adjacentRolls > 3)
                {
                    return false;
                }
            }
        }

        // Check positions below
        for (let i = rollPosition + (rowLength - 1); i <= rollPosition + rowLength; i ++)
        {
            if (!removedRolls.includes(i))
            {
                adjacentRolls += positionContainsRoll(floorPlan[i]);

                if (adjacentRolls > 3)
                {
                    return false;
                }
            }
        }

        return true;
    }
    else
    {
        // Check neighbouring positions
        for (let i = rollPosition - 1; i <= rollPosition + 1; i +=2)
        {
            if (!removedRolls.includes(i))
            {
                adjacentRolls += positionContainsRoll(floorPlan[i]);
            }
        }

        // Check positions above
        for (let i = rollPosition - (rowLength + 1); i <= rollPosition - (rowLength - 1); i ++)
        {
            if (!removedRolls.includes(i))
            {
                adjacentRolls += positionContainsRoll(floorPlan[i]);

                if (adjacentRolls > 3)
                {
                    return false;
                }
            }
        }

        // Check positions below
        for (let i = rollPosition + (rowLength - 1); i <= rollPosition + (rowLength + 1); i ++)
        {
            if (!removedRolls.includes(i))
            {
                adjacentRolls += positionContainsRoll(floorPlan[i]);

                if (adjacentRolls > 3)
                {
                    return false;
                }
            }
        }

        return true;
    }
}

function positionContainsRoll(positionToCheck: string): number
{
    if (positionToCheck === "@")
    {
        return 1;
    }

    return 0;
}