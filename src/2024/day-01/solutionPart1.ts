import { readInput } from "../../utils/readInput";

const filePath = "src/2024/day-01/Input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution);

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
    // Sort lists low to high
    list1.sort((a, b) => a - b);
    list2.sort((a, b) => a - b);

    return totalDistance(list1, list2);
}

function totalDistance(list1: number[], list2: number[]): number
{
    let totalDistance = 0;

    for (let i = 0; i <list1.length; i++)
    {
        totalDistance += Math.abs(list1[i] - list2[i]); 
    }

    return totalDistance;
}