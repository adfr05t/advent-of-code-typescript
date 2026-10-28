import { readInput } from "../../utils/readInput";

const filePath = "src/2025/day-07/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);

function solvePuzzle(input: string): number
{
    const rows = input.split(/\r?\n/);
    const beams = new Set<number>();

    // find beam starting position in first row
    for (let column = 0; column < rows[0].length; column++)
    {
        const character = rows[0][column];

        if (character === "S")
        {
            beams.add(column);
            break;
        }
    }

    let splitCount = 0;

    // Check subsequent rows for splitters in beam columns
    for (let i = 1; i < rows.length; i++)
    {        
        for (const column of [...beams])
        {
            if (rows[i][column] === "^")
            {
                splitBeam(column, beams);
                splitCount++;
            }
        }
    }

    return splitCount;
}

// When a beam is split, add neighbouring indexes to Set and delete original
function splitBeam(columnIndex: number, beams: Set<number>)
{
    beams.add(columnIndex + 1);
    beams.add(columnIndex - 1);

    beams.delete(columnIndex);
}