import { readInput } from "../../utils/readInput.js";
import  { type Location, calculateManhattanDistance } from "../../utils/coordinates.js";

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

    let locationNumber = 1;

    while (locationNumber < input)
    {
        for (let i = 0; i < 2 && locationNumber < input; i++)
        {
            for (let j = 0; j < stepsToMove && locationNumber < input; j++)
            {
                currentLocation = move(currentDirection, currentLocation);
                locationNumber++;
            }

            currentDirection = rotateToLeft(currentDirection);
        }

        stepsToMove++;
    }

    return {
        part1: calculateManhattanDistance(currentLocation),
        part2: 0
    };
}

function move(currentDirection: Direction, currentLocation: Location): Location
{
    switch (currentDirection) 
    {
        case Direction.Right:
            currentLocation.x++;
            break;
        
        case Direction.Up:
            currentLocation.y++;
            break;
        
        case Direction.Left:
            currentLocation.x--;
            break;
        
        case Direction.Down:
            currentLocation.y--;
            break;
    }

    return currentLocation;
}

function rotateToLeft(currentDirection: Direction): Direction
{
    return (currentDirection + 1) % 4;
}