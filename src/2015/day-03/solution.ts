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

    const part1Answer = uniqueLocationsVisited(inputForSingleSanta);
    const part2Answer = uniqueLocationsVisited(inputForTwoSantas);

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

    // Convert arrays back into single strings with no seperators
    return [santa1DeliveryRoute.join(""), santa2DeliveryRoute.join("")]
}

function uniqueLocationsVisited(deliveryRoutes: string[]): number
{
    const currentLocation: Location = {
        x: 0,
        y: 0
    };

    const locationsVisited: Location[] = [{ ...currentLocation }];
    let uniqueLocationsVisited = 1; // starting location counts as 1

    for (const route of deliveryRoutes)
    {
        for (let j = 0; j < route.length; j++)
        {
            // Ensure a new route starts at (0, 0)
            if (j ===0)
            {
                currentLocation.x = 0;
                currentLocation.y = 0;
            }

            const direction = route.charAt(j);
            
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
    }
 
    return uniqueLocationsVisited;
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