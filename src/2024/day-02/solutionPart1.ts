import { readInput } from "../../utils/readInput";

const filePath = "src/2024/day-02/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);

function solvePuzzle(input: string): number
{
    const reports = input.split(/\r?\n/);

    let safeReportCount = 0;

    for (const report of reports)
    {
        if (isReportSafe(report))
        {
            safeReportCount++;
        }
    }

    return safeReportCount;
}

function isReportSafe(report: string): boolean
{
    const levels = report.trim().split(/\s+/).map(Number);

    if (!allAscendingOrDescending(levels) || !differencesWithinRange(levels))
    {
        return false;
    }

    return true;
}

function allAscendingOrDescending(levels: number[]): boolean
{
    const allAscending = levels.every((level, i) => i === 0 || level > levels[i - 1]);
    const allDescending = levels.every((level, i) => i === 0 || level < levels[i - 1]);

    return allAscending || allDescending;
}

function differencesWithinRange(levels: number[]): boolean
{
    for (let i = 0; i < levels.length - 1; i++)
    {
        const tolerance = 3;
        const nextLevel = levels[i + 1];

        if (levels[i] === nextLevel || Math.abs(levels[i] - nextLevel) > tolerance)
        {
            return false;   
        }
    }

    return true;
}

