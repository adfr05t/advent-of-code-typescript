import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-03/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log(solution);

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
    const batteries = batteryBankString.split("").map(Number);
    const selectedBatteries: number[] = [];

    let startIndex = 0;
    let maxIndex;
    
    for (let selectionsRemaining = 12; selectionsRemaining > 0; selectionsRemaining--)
    {
        const selection = chooseNextBattery(batteries, startIndex, selectionsRemaining);

        selectedBatteries.push(selection.joltage);

        startIndex = selection.index + 1;
    }

    const joltageOfSelectedBatteries = Number(selectedBatteries.join(""));
    
    return joltageOfSelectedBatteries;
}

function chooseNextBattery(batteries: number[], startIndex: number, selectionsRemaining: number): { joltage: number, index: number }
{ 
    let highestJoltage = 0;
    let indexOfHighest = 0;

    const maxIndex = batteries.length - selectionsRemaining;

    for (let i = startIndex; i <= maxIndex; i++)
    {
        const candidate = batteries[i];

        if (candidate > highestJoltage)
        {
            indexOfHighest = i;
            highestJoltage = candidate;
        }
    }

    return {
        joltage: highestJoltage,
        index: indexOfHighest
    };
}
