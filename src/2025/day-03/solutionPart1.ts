import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-03/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution);

function solvePuzzle(input: string): number
{
    let sumOfJoltages = 0;
    const batteryBankStrings = input.split(/\r?\n/);

    for (const batteryBankString of batteryBankStrings)
    {
        sumOfJoltages += getHighestJoltage(batteryBankString); 
    }

    return sumOfJoltages;
}

function getHighestJoltage(batteryBankString: string): number
{ 
    const batteryJoltages = batteryBankString.split("").map(Number);

    // Get the highest joltage first battery and it's position in array
    let firstBattery = 0;
    let indexOfHighest = 0;

    // First battery cannot be the last in the array
    for (let i = 0; i < batteryJoltages.length - 1; i++)
    {
        const candidate = batteryJoltages[i];

        if (candidate > firstBattery)
        {
            indexOfHighest = i;
            firstBattery = candidate;
        }
    }

    // Get the highest joltage second battery
    let secondBattery = 0;

    // Second battery must have higher index than the first
    for (let i = indexOfHighest + 1; i < batteryJoltages.length; i++)
    {
        const candidate = batteryJoltages[i];

        if (candidate > secondBattery)
        {
            secondBattery = candidate;
        }
    }
    
    const joltageOfBatteryPair = Number([firstBattery, secondBattery].join(""));

    return joltageOfBatteryPair;
}
