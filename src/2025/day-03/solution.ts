import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-03/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);

function solvePuzzle(input: string): { part1: number, part2: number }
{
    let joltageTotalPart1 = 0;
    let joltageTotalPart2 = 0;

    const batteryBankStrings = input.split(/\r?\n/);

    for (const batteryBankString of batteryBankStrings)
    {
        joltageTotalPart1 += findHighestJoltage(batteryBankString, 2); 
      //  joltageTotalPart2 += findHighestJoltage(batteryBankString, 12); 
    }

    return {
        part1: joltageTotalPart1, 
        part2: joltageTotalPart2
    };
}

function findHighestJoltage(batteryBankString: string, numberOfDigits: number): number
{   
    const sliceIndex = batteryBankString.length - numberOfDigits;
    let currentSelection = [...batteryBankString.slice(sliceIndex)];
    const notSelected = [...batteryBankString.slice(0, sliceIndex)];
    console.log(batteryBankString);
    console.log(currentSelection);
    console.log(notSelected);


    console.log(currentSelection);

    for (const candidate of notSelected)
    { console.log("comparing", candidate);
        if (candidate > currentSelection[0])
        {
            currentSelection.splice(getIndexOfLowestJoltage(currentSelection), 1);
            currentSelection.unshift(candidate);

            console.log("updated selection", currentSelection)
        }
    }

    // current selection is last 2 joltages in the array
    // non-selected joltages = array.length - numberOfDigits (eg 15 - 12 = 3 ... non-selected are 0 - 3)
    // compare non-selected to first (ie. lowest indexed) currently selected joltage
    // if non-selected is greater than selected, remove the lowest digit in the currently selected group and add the non-selected to the start of the group
    // repeat until all non-selected (in this case 0 - 3) have been compared

    console.log("highest joltage", Number(currentSelection.join("")))
    return Number(currentSelection.join(""));
}

function getIndexOfLowestJoltage(joltages: string[])
{
    let lowestJoltage = "0";
    let indexOfLowest = 0;

    for (const joltage of joltages)
    {
        if (joltage > lowestJoltage)
        {
            indexOfLowest = joltages.indexOf(joltage);
            lowestJoltage = joltage;
        }
    }

    return indexOfLowest;
}

// function getHighestJoltage(batteryBankString: string): number
// { 
//     const batteryJoltages = batteryBankString.split("").map(Number);

//     // Get first battery joltage and position in bank
//     let highestJoltageBattery = 0;
//     let indexOfHighest = 0;

//     for (let i = 0; i < batteryJoltages.length - 1; i++)
//     {
//         const candidate = batteryJoltages[i];

//         if (candidate > highestJoltageBattery)
//         {
//             indexOfHighest = i;
//             highestJoltageBattery = candidate;
//         }
//     }

//     // Get second battery joltage
//     let highestJoltageRemainingBattery = 0;

//     for (let i = indexOfHighest + 1; i < batteryJoltages.length; i++)
//     {
//         const candidate = batteryJoltages[i];

//         if (candidate > highestJoltageRemainingBattery)
//         {
//             highestJoltageRemainingBattery = candidate;
//         }
//     }
    
//     const joltageOfBatteryPair = Number([highestJoltageBattery, highestJoltageRemainingBattery].join(""));

//     return joltageOfBatteryPair;
// }
