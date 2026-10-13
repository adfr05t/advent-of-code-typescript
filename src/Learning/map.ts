//--- 1. Simple mathmatical operation:
const numbers = [2, 4, 5, 6, 8, 13, 15];

const numbersDoubled = numbers.map(number => number * 2);
console.log(numbersDoubled);


//--- 2. Convert to form ["Item2", "Item4", etc...]
const itemStrings = numbers.map(number => 
{
   const itemString = "Item" + number.toString();
    
   return itemString;
});

// Or, short-from, implicit return:
const itemStrings2 = numbers.map(number => "Item" + number); 

console.log(itemStrings);
console.log(itemStrings2);


//--- 3. Capitalise first letter:
const names = ["adam", "bob", "charlie"];

const amendedNames = names.map(name => 
{
    const amendedName = name[0].toUpperCase() + name.slice(1);

    return amendedName;
});

// Or:
const amendedNames2 = names.map(name =>
    name[0].toUpperCase() + name.slice(1)
);

console.log(amendedNames);
console.log(amendedNames2);


//--- 4. Convert string to number 
//   --- a) without using .map
const numberStrings = ["10", "20", "30", "40"];
const numberNumbers: number[] = [];

for (const element of numberStrings)
{
    numberNumbers.push(parseInt(element));
}

//   --- b) with .map
const numberNumbers2 = numberStrings.map(element => Number(element));
//   ...even shorter:
const numberNumbers3 = numberStrings.map(Number);

console.log(numberNumbers);
console.log(numberNumbers2);
console.log(numberNumbers3);

// NB: arrow function syntax only requires () when more than when parameter is present. All examples here use only one.


//--- 6. make an array of only the titles:
const games = [
    { title: "Doom", year: 1993 },
    { title: "Portal", year: 2007 },
    { title: "Hades", year: 2020 }
];

const gameTitles = games.map(game => game.title);

console.log(gameTitles);


//--- 7. Modifying object properties:
const modifiedGames = games.map (game => 
{
    const name = game.title;
    const releaseYear = game.year;

    return { name, releaseYear };
});

// But can be reduced to:
const modifiedGames2 = games.map (game => 
{
    return { name: game.title, releaseYear: game.year };
});

console.log(modifiedGames);
console.log(modifiedGames2);


//--- 8. Create objects from strings
const ranges = [
    "3-5",
    "10-14",
    "20-25"
];

const rangeObjects = ranges.map(range =>
{
    const [min, max] = range.split("-").map(Number);

    return { min, max };
});

console.log(rangeObjects);
