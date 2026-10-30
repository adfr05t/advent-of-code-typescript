import { readInput } from "../../utils/readInput";

const filePath = "src/2024/day-01/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 2 answer:", solution);

function solvePuzzle(input: string): number
{
    // Parse input
    const inputRows = input.split(/\r?\n/);
    
    const list1:number[] = [];
    const list2:number[] = [];

    for (const row of inputRows)
    {
        // Split at one or more whitespace characters
        const [left, right] = row.trim().split(/\s+/);
        
        list1.push(Number(left));
        list2.push(Number(right));
    }

    let total = 0;

    for (const candidate of list1)
    {
        total += candidate * occurencesInList(candidate, list2);
    }

    return total;
}

function occurencesInList(target: number, list: number[]): number
{
    let occurenceCount = 0;

    for (const item of list)
    {
        if (item === target)
        {
            occurenceCount++;
        }
    }

    return occurenceCount;
}