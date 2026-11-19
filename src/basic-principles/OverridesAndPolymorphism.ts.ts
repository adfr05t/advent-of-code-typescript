enum Nationalities
{
    French,
    British,
    Spanish,
}

interface PersonProperties
{
    name: string;
    age?: number | string;
    nationality: Nationalities;
}

class Person
{
    name: string;
    age?: number | string;
    nationality: Nationalities;

    constructor({ name, age = "unknown", nationality }: PersonProperties)
    {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    getInfo(): string
    {
        return (`${this.name} is ${Nationalities[this.nationality]}. Their age is ${this.age}`);
    }

    speak()
    {
        console.log(`${this.name} says HOWDY!`);
    }
}

class BritishDelegate extends Person
{
    override speak()
    {
        console.log(`${this.name} says HELLO!`);
    }
}

class FrenchDelegate extends Person
{
    override speak()
    {
        console.log(`${this.name} says BONJOUR!`);
    }
}

class SpanishDelegate extends Person
{
    override speak()
    {
        console.log(`${this.name} says HOLA!`);
    }
}

const delegate1 = new BritishDelegate({ name: "John Smith", nationality: Nationalities.British, age:42 });

const delegate2 = new FrenchDelegate({ name: "Pierre Dupont", nationality: Nationalities.French, age:36 });

const delegate3 = new SpanishDelegate({ name: "Sofía Martinez", nationality: Nationalities.Spanish, age:29 });

// POLYMORPHISM: array contains three types of objects but all can be treated as instances of Person.
const delegates: Person[] = [delegate1, delegate2, delegate3];
// Each object responds to the same method call, but produces different behaviour.
delegates.forEach((member) => member.speak());