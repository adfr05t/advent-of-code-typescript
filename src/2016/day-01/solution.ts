import { readInput } from "../../utils/readInput.js";
import { type Location, calculateManhattanDistance} from "../../utils/coordinates.js";

type Direction = {
    rotationDirection: RotationDirection,
    distance: number
};

enum RotationDirection
{
    Right = "R",
    Left = "L"
}

enum Bearing
{
    North,
    East,
    South,
    West
}

const filePath = "src/2016/day-01/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 solution:", solution)

function solvePuzzle(input: string)
{
    let currentLocation: Location = { x: 0, y: 0 };
    let currentBearing = Bearing.North;
    
    const directionStrings = getDirectionStrings(input);

    for (const directionString of directionStrings)
    {
        const direction = parseDirection(directionString);
        currentBearing = updateBearing(currentBearing, direction.rotationDirection);
        currentLocation = moveToNewLocation(currentBearing, currentLocation, direction.distance);
    }

    return calculateManhattanDistance(currentLocation);
}

function parseDirection(directionString: string): Direction
{
    const rotationDirection = (directionString.charAt(0) === RotationDirection.Left) ? RotationDirection.Left : RotationDirection.Right;

    const distance = Number(directionString.slice(1));

    return { rotationDirection: rotationDirection, distance: distance };
}

function updateBearing(currentBearing: Bearing, direction: RotationDirection): Bearing
{
    if (direction === RotationDirection.Left)
    {
        currentBearing = (currentBearing + 4 - 1) % 4;
    }
    else
    {
        currentBearing = (currentBearing + 1) % 4;
    }

    return currentBearing;
}

function moveToNewLocation(currentBearing: Bearing, currentLocation: Location, distance: number): Location
{
    switch (Bearing[currentBearing]) 
    {
        case "North":
            currentLocation.y += distance;
            break;

        case "East":
            currentLocation.x += distance;
            break;

        case "South":
            currentLocation.y -= distance;
            break;

        case "West":
            currentLocation.x -= distance;
            break;
    }

    return currentLocation;
}

function getDirectionStrings(input: string)
{
    return input.split(", ");
}