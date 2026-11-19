// Version 1:
printTriangle(7);

function printTriangle(triangleSize: number)
{
    for (let rowSize = 1; rowSize <= triangleSize; rowSize++)
    {
        printHashes(rowSize);
    }
}

function printHashes(hashCount: number)
{
    let hashString = "";

    for (let i = 1; i <= hashCount; i++)
    {
        hashString += "#";
    }

    console.log(hashString);
}

// Version 2 - shorter but less modular
for (let lineNumber = 1; lineNumber <= 7; lineNumber++)
{
    let hashString = "";

    for (let rowSize = 1; rowSize <= lineNumber; rowSize++)
    {
        hashString += "#";
    }

    console.log(hashString);
}

// Version 3 - use .repeat():
drawTriangle(7);

function drawTriangle(numberOfRows: number)
{
    for (let row = 1; row <= numberOfRows; row ++)
    {
        console.log("#".repeat(row));
    }
}

// Version 4 - add optional character parameter
drawTriangleV2(7, "@");

function drawTriangleV2(numberOfRows: number, character?: string)
{
    character = character ?? "A";

    for (let row = 1; row <= numberOfRows; row ++)
    {
        console.log(character.repeat(row));
    }
}

// Version 5 - replace nullish coalescing with default parameter value:
drawTriangleV3(7);
drawTriangleV3(7, "@");

function drawTriangleV3(numberOfRows: number, character: string = "A")
{
    for (let row = 1; row <= numberOfRows; row ++)
    {
        console.log(character.repeat(row));
    }
}