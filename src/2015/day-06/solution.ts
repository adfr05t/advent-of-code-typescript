import { brotliCompress } from "node:zlib";
import { readInput } from "../../utils/readInput.js";

type Light = {
    isOn: boolean;
    brightness: number;
};

type GridCoordinates = {
    from: string;
    to: string;
};

enum Action
{
    TurnOn = "turn on",
    TurnOff = "turn off",
    Toggle = "toggle"
}

const filePath = "src/2015/day-06/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 answer:", solution.part1);
console.log("Part 2 answer:", solution.part2);


function solvePuzzle(input: string): { part1: number, part2: number }
{
    const lightGrid = createLightGrid(1000);
    const instructionStrings = input.split(/\r?\n/);

    for (const instructionString of instructionStrings)
    {
        const actionType = getActionType(instructionString);
        const coordinates = getCoordinates(actionType, instructionString);

        adjustLights(coordinates, actionType, lightGrid);
    } 

    return { part1: lightsTurnedOnCount(lightGrid), part2: brightnessCount(lightGrid) };
}

function adjustLights(coordinates: GridCoordinates, actionType: Action, lightGrid: Record<string, Light>)
{
    // Find span of lights on which to perform action
    const lightsToChange = affectedLights(coordinates.from, coordinates.to);

    if (actionType === Action.TurnOn)
    {
        for (const lightPosition of lightsToChange)
        {
            const light = lightGrid[lightPosition];
            light.isOn = true;
            light.brightness++;
        }
    }
    else if (actionType === Action.TurnOff)
    {
        for (const lightPosition of lightsToChange)
        {
            const light = lightGrid[lightPosition];
            light.isOn = false;

            if (light.brightness > 0)
            {
                light.brightness--;
            }
        }
    }
    else if (actionType === Action.Toggle)
    {
        for (const lightPosition of lightsToChange)
        {
            const light = lightGrid[lightPosition];
            light.isOn = (light.isOn) ? false : true;
            light.brightness += 2;
        }
    }
}

function affectedLights(from: string, to: string): string[]
{
        const fromCoordinates = from.split(",");
        const toCoordinates = to.split(",");

        const start = { x: Number(fromCoordinates[0]), y: Number(fromCoordinates[1]) };
        const end = { x: Number(toCoordinates[0]), y: Number(toCoordinates[1]) };

        let lightsInSelection: string[] = [];
    
        for (let y = start.y; y <= end.y; y++) 
        {
            for (let x = start.x; x <= end.x; x++)
            {
                const lightLocationKey = `${x},${y}`;
                lightsInSelection.push(lightLocationKey);
            }
        }

    return lightsInSelection;
}

function getActionType(instruction: string): Action
{
    if (instruction.startsWith(Action.TurnOn))
    {
        return Action.TurnOn;
    }
    if (instruction.startsWith(Action.TurnOff))
    {
        return Action.TurnOff;
    }
    
    return Action.Toggle;
}

function getCoordinates(actionType: Action, instructionString: string): GridCoordinates
{
    const coordinateSection = instructionString.slice(startIndexOfCoordinates(actionType));
    const coordinates = coordinateSection.split(" through ");

    return { from: coordinates[0], to: coordinates[1] };
}

function startIndexOfCoordinates(actionType: Action): number
{
    if (actionType === Action.TurnOn)
    {
        return 8;
    }
    if (actionType === Action.TurnOff)
    {
        return 9;
    }
    
    return 7;
}

function createLightGrid(size: number): Record<string, Light>
{
    const lightGrid: Record<string, Light> = {};

    for (let x = 0; x < size; x++)
    {
        for (let y = 0; y < size; y++)
        {
            lightGrid[x + "," + y] = { isOn: false, brightness: 0 };
        }
    }

    return lightGrid;
}

function lightsTurnedOnCount(lightGrid: Record<string, Light>): number
{
    let lightsOnCount = 0;

    for (const light of Object.values(lightGrid))
    {
        if (light.isOn)
        {
            lightsOnCount++;
        }
    }
    
    return lightsOnCount;
}

function brightnessCount(lightGrid: Record<string, Light>): number
{
    let totalBrightness = 0;

    for (const light of Object.values(lightGrid))
    {
        totalBrightness += light.brightness;
    }
    
    return totalBrightness; 
}