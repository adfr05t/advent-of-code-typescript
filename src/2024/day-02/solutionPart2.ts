import { readInput } from "../../utils/readInput";

const filePath = "src/2024/day-02/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);

function solvePuzzle(input: string): number
{

    // PART TWO:

    // levels can be repaired if:
        // rule 1: only one level breaks the all asc/desc pattern
        // rule 2: if two adjacent levels are the same, or if the max allowable difference between adjacent levels is exceeded by the 1st and 2nd levels or the 4th and 5th levels.
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

    for (let i = 0; i < levels.length; i++)
    {
        // '_' used to indicate that the parameter is intentionally unused
        const variation = levels.filter((_, index) => index !== i);

        if (allAscendingOrDescending(variation) && differencesWithinRange(variation))
        {
            return true;
        }
    }

    return false;
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