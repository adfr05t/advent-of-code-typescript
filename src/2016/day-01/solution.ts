
// Need to fix this whole thing so every locations passed thorugh is checked against array of locations visited.



import { readInput } from "../../utils/readInput.js";

type Location = {
    x:number;
    y: number;
} | undefined;

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
console.log("Part 1 solution:", solution.part1);
console.log("Part 2 solution:", solution.part2);

function solvePuzzle(input: string): { part1: number, part2: number }
{
    const locationsVisited: Location[] = [];

    let currentLocation: Location = { x: 0, y: 0 };
    let currentBearing = Bearing.North;
    let firstLocationVisitedTwice: Location;
    
    const directionStrings = getDirectionStrings(input);
let i = 0;
    for (const directionString of directionStrings)
    {
i++;
console.log("Step", i);
        console.log("current location:", currentLocation);


        if (!firstLocationVisitedTwice && !isNewLocation(currentLocation, locationsVisited))
        {
            firstLocationVisitedTwice = {...currentLocation!};
            console.log("first location visited twice is ", firstLocationVisitedTwice);
        }

        const direction = parseDirection(directionString);
        console.log("direction: ", direction);
        currentBearing = updateBearing(currentBearing, direction.rotationDirection);
        console.log("new bearing:", currentBearing);
        currentLocation = moveToNewLocation(currentBearing, currentLocation, direction.distance, locationsVisited);
        console.log("new location:", currentLocation);
    }

            console.log(firstLocationVisitedTwice);

    return {
        part1: calculateManhattanDistance(currentLocation),
        part2: calculateManhattanDistance(firstLocationVisitedTwice)
    };
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

function moveToNewLocation(currentBearing: Bearing, currentLocation: Location, distance: number, locationsVisited: Location[]): Location
{
    switch (Bearing[currentBearing]) 
    {
        case "North":
            for (let i = 0; i < distance; i++)
            {
                currentLocation!.y++;
                locationsVisited.push(currentLocation);
            }

            currentLocation!.y++;
            break;

        case "East":
            currentLocation!.x += distance;
            break;

        case "South":
            currentLocation!.y -= distance;
            break;

        case "West":
            currentLocation!.x -= distance;
            break;
    }

    return currentLocation;
}

function getDirectionStrings(input: string)
{
    return input.split(", ");
}

function isNewLocation(currentLocation: Location, locationsVisited: Location[]): boolean
{
    for (let i = 0; i < locationsVisited.length; i++)
    {
        if (currentLocation?.x === locationsVisited[i]?.x && currentLocation?.y === locationsVisited[i]?.y)
        {
            return false;
        }
    }

    locationsVisited.push(currentLocation);

    return true;
}

function calculateManhattanDistance(destination: Location): number
{
    // Calculate from origin (0,0)
    return Math.abs(0 - destination!.x) + Math.abs(0 - destination!.y);
}