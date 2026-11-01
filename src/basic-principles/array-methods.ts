const profileData = [
    {
        name: "Rory",
        type: "Dog"
    },
    {
        name: "Misty",
        type: "Dog"
    },
    {
        name: "Adam",
        type: "Humano"
    },
    {
        name: "Carmela",
        type: "Humano"
    },
];

// MAP
// Performs the callback operation on each member of the array. Does not change the original array(profileData)
const sortedProfiles1 = profileData.map(profile => ({
    ...profile,
    name: profile.name + " Frost"
}));

console.log(sortedProfiles1); 

// SOME
// Does at least one member meet the callback's condition? Returns true/false
const sortedProfiles2 = profileData.some((profile) => profile.type === "Dog"); 

console.log(sortedProfiles2); // 'true'

// FILTER
// Makes a new array consisting of members that pass the condition(s)
const filteredProfiles = profileData.filter(profile => profile.type === "Humano");

// filter by index
for (let i = 0; i < profileData.length; i++)
{
    const variation = profileData.filter((_, index) => index !== i);
    console.log("variation", variation);
}

console.log(filteredProfiles);

// REDUCE
// Reduce an array to a single value
const reducedProfiles = profileData.reduce((accumulator, profile) =>
{
    return accumulator + profile.name + profile.type
}, "");

console.log(reducedProfiles);

const evenNumbers = [2, 4, 6, 8];
// return product of numbers in array
const reducedEvenNumbers = evenNumbers.reduce((accumulator, number) => accumulator * number, 1);
console.log("--", reducedEvenNumbers);
// sum
const summedEvenNumbers = evenNumbers.reduce((acc, number) => acc + number, 0);
console.log("---", summedEvenNumbers);

//...or, short form with implied return:
const reducedProfiles2 = profileData.reduce((accumulator, profile) => accumulator + profile.name + profile.type, "");