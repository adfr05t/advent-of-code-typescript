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
// does at least one member meet the callback's condition Returns true/false
const sortedProfiles2 = profileData.some((profile) => profile.type === "Dog"); 

console.log(sortedProfiles2); // 'true'

// FILTER
// makes a new array of only members that pass the condition(s)
const filteredProfiles = profileData.filter(profile => profile.type === "Humano");

console.log(filteredProfiles);






// const sortedProfiles = profileData.filter()


// const sortedProfiles = profileData.reduce()
