import { readInput } from "../../utils/readInput.js";
import type { Location } from "../../utils/coordinates.js";

enum Direction
{
    Right,
    Up,
    Left,
    Down
}

const filePath = "src/2017/day-03/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(Number(input));
console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);

function solvePuzzle(input: number): { part1: number, part2: number }
{
    let stepsToMove = 1;
    let currentDirection = Direction.Right;
    let currentLocation: Location = { 
        x: 0, 
        y: 0 
    };

    for (let locationNumber = 1; ; locationNumber++)
    {
        for (let i = 0; i < 2; i++)
        {
            move(stepsToMove, currentDirection, currentLocation);
            currentDirection = rotateToLeft(currentDirection);
        }

        stepsToMove++;
    }

    return { 
        part1: 0,
        part2: 0
    };
}

function move(stepsToMove: number, currentDirection: Direction, currentLocation: Location): Location
{
    switch (currentDirection) 
    {
        case Direction.Right:
            currentLocation.x += stepsToMove;
            break;
        
        case Direction.Up:
            currentLocation.y += stepsToMove;
            break;
        
        case Direction.Left:
            currentLocation.x -= stepsToMove;
            break;
        
        case Direction.Down:
            currentLocation.y -= stepsToMove;
            break;
    }
}

function rotateToLeft(currentDirection: Direction): Direction
{
    const newDir = currentDirection = (currentDirection + 4 + 1) % 4;
    return newDir;
}