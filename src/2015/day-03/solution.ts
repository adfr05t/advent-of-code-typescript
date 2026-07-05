import { readInput } from "../../utils/readInput.js";

type Location = {
    x: number;
    y: number;
};

const filePath = "src/2015/day-03/input.txt";
const input = readInput(filePath);

const { part1, part2 } = solvePuzzle(input);

console.log("Part 1 answer:", part1);
console.log("Part 2 answer:", part2);

function solvePuzzle(input: string): { part1: number, part2: number}
{
    const currentLocation: Location = {
        x: 0,
        y: 0
    };

    const locationsVisited: Location[] = [{ ...currentLocation }];
    let uniqueLocationsVisited = 1; // starting location counts as 1

    for (const direction of input)
    {
        switch (direction) 
        {
            case "<":
                currentLocation.x--;
                break;
            
            case ">":
                currentLocation.x++;
                break;
            
            case "^":
                currentLocation.y++;
                break;
            
            case "v":
                currentLocation.y--;
                break;
        }

        if (isNewLocation(currentLocation, locationsVisited))
        {
            uniqueLocationsVisited++;
        }

        locationsVisited.push({ ...currentLocation });
    }
 
    return {
        part1: uniqueLocationsVisited,
        part2: 0
    };
}

function isNewLocation(newLocation: Location, locationsVisited: Location[]): boolean 
{
    for (const location of locationsVisited)
    {
        if (newLocation.x === location.x && newLocation.y === location.y)
        {
            return false;
        }
    }

    return true;
}