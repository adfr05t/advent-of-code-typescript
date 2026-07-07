import { dir } from "node:console";
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
    const inputForSingleSanta = [input];
    const inputForTwoSantas = splitDeliveryRoute(input);

    const part1Answer = countUniqueLocationsVisited(inputForSingleSanta);
    const part2Answer = countUniqueLocationsVisited(inputForTwoSantas);

    return {
        part1: part1Answer,
        part2: part2Answer
    };
}

function splitDeliveryRoute(input: string): string[]
{
    const santa1DeliveryRoute: string[] = [];
    const santa2DeliveryRoute: string[] = [];

    for (let i = 0; i < input.length; i++)
    {
        if (i % 2 === 0)
        {
            santa1DeliveryRoute.push(input[i]);
        }
        else
        {
            santa2DeliveryRoute.push(input[i]);
        }
    }

    // Convert arrays back into single strings with no separators
    return [santa1DeliveryRoute.join(""), santa2DeliveryRoute.join("")];
}

function countUniqueLocationsVisited(deliveryRoutes: string[]): number
{
    const locationsVisited: Location[] = [{ x: 0, y: 0 }];

    for (const route of deliveryRoutes)
    {
        const currentLocation: Location = {
            x: 0,
            y: 0
        };

        for (const direction of route)
        {
            move(currentLocation, direction);
            
            if (isNewLocation(currentLocation, locationsVisited))
            {
                locationsVisited.push({ ...currentLocation });
            }
        }
    }

    return locationsVisited.length;
}

function move(currentLocation: Location, direction: string)
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