import { readInput } from "../../utils/readInput.js";

type Light = {
    position: {
        x: number;
        y: number;
    },
    isOn: boolean;
};

// test: create a 10 x 10 grid
const lightGrid = createGrid(10);
console.log(lightGrid);

function createGrid(size: number): Light[]
{
    const lightGrid: Light[] = [];

    for (let i = 0; i < size; i++)
    {
        for (let j = 0; j < size; j++)
        {
            const newLight: Light = {
                position: {
                    x: i,
                    y: j
                },
                isOn: false
            }

            lightGrid.push(newLight);
        }
    }

    return lightGrid;
}
