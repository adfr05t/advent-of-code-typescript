import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-03/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);

function solvePuzzle(input: string): { part1: number, part2: number }
{
    let sumOfJoltages = 0;
    const batteryBankStrings = input.split(/\r?\n/);

    for (const batteryBankString of batteryBankStrings)
    {
        sumOfJoltages += getHighestJoltage(batteryBankString); 
    }

    return {
        part1: sumOfJoltages, 
        part2: 0
    };
}

function getHighestJoltage(batteryBankString: string): number
{ 
    const batteryJoltages = batteryBankString.split("").map(Number);

    // Get first battery joltage
    let highestJoltageBattery = 0;
    let indexOfHighest = 0;

    for (let i = 0; i < batteryJoltages.length - 1; i++)
    {
        const candidate = batteryJoltages[i];

        if (candidate > highestJoltageBattery)
        {
            indexOfHighest = batteryJoltages.indexOf(candidate);
            highestJoltageBattery = candidate;
        }
    }

    // Get second battery joltage
    let highestJoltageRemainingBattery = 0;

    for (let i = indexOfHighest + 1; i < batteryJoltages.length; i++)
    {
        const candidate = batteryJoltages[i];

        if (candidate > highestJoltageRemainingBattery)
        {
            highestJoltageRemainingBattery = candidate;
        }
    }
    
    const highestJoltageBatteryPair = [highestJoltageBattery, highestJoltageRemainingBattery];
    const joltageOfBatteryPair = Number(highestJoltageBatteryPair.join(""));

    return joltageOfBatteryPair;
}
