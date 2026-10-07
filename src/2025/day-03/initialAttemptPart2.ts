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

    const selectedBatteries = selectHighestJoltageBatteries(batteries);

    // re-order selected batteries by index
    selectedBatteries.sort((a, b) => a.index - b.index);
    console.log(selectedBatteries);

    const joltageOfSelectedBatteries = Number(selectedBatteries.map(battery => battery.joltage).join(""));
    
    return joltageOfSelectedBatteries;
}

function selectHighestJoltageBatteries(batteries: number[]): { index: number, joltage: number }[]
{ 
    let selectedBatteries: { index: number, joltage: number }[] = [];

    for (let targetJoltage = 9; targetJoltage > 0; targetJoltage--)
    {
        for (let i = 0; i < batteries.length; i++)
        {
            const candidate = batteries[i];

            if (candidate === targetJoltage)
            {
                selectedBatteries.push({ index: i, joltage: candidate });

                if (selectedBatteries.length === 12)
                {
                    return selectedBatteries;
                }
            }
        }
    }

    return selectedBatteries;
}
