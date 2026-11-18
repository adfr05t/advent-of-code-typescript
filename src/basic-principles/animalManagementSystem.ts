enum AnimalType
{
    Cat,
    Dog,
    Rabbit
}

interface AnimalCharacteristics
{
    name: string;
    type: AnimalType;
    age?: number;
}

class Animal
{
    name: string;
    type: AnimalType;
    age: number;

    constructor({ name, type, age }: AnimalCharacteristics)
    {
        this.name = name;
        this.type = type;
        this.age = age ?? 0;
    }

    describe()
    {
        console.log(this.getInfo());
    }

    getInfo(): string
    {
        return (`${this.name} is a ${this.age} year old ${AnimalType[this.type]}`);
    }
}

class Cat extends Animal
{
    constructor(characteristics: AnimalCharacteristics)
    {
        super(characteristics);
    }

    miaow()
    {
        console.log(`MIAOW, says ${this.name}`);
    }
}

class Dog extends Animal
{

    constructor(characteristics: AnimalCharacteristics)
    {
        super(characteristics);
    }

    bark()
    {
        console.log(`WOOF WOOF, says ${this.name}`);
    }
}

const dog1Characteristics = {
    name: "Pretzel",
    type: AnimalType.Dog,
    age: 6
};

const dog1 = new Dog(dog1Characteristics)

const cat1Charactersitics = {
    name: "Mittens",
    type: AnimalType.Cat,
    age: 2
};

const cat1 = new Cat(cat1Charactersitics);

const rabbit = new Animal({ name: "Thumper", type: AnimalType.Rabbit, age: 10 })

dog1.describe();
dog1.bark();

cat1.describe();
cat1.miaow();

rabbit.describe();