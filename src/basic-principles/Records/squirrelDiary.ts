interface entry
{
    date: string;
    events: string[];
    squirrel: boolean | "not recorded";
}

class diary
{
    entries: Record<string, entry>;

    constructor()
    {
        this.entries = {};
    }

    displayEntry(date: string)
    {
        console.log(this.entries[date]);
    }

    addEntry(date: string)
    {
        this.entries[date] = {
            date: date,
            events: [],
            squirrel: "not recorded"
        };
    }

    addEvents(date: string, events: string[])
    {
        const entry = this.entries[date];

        if (entry)
        {
            events.forEach((event) => entry.events.push(event));
        }
        else
        {
            console.log("no entry exists for that date")
        }
    }

    addSquirrelStatus(date: string, squirrelStatus: boolean)
    {
        const entry = this.entries[date];

        if (entry)
        {
            entry.squirrel = squirrelStatus;
        }
        else
        {
            console.log("no entry exists for that date")
        }
    }
}

const myDiary = new diary();

myDiary.addEntry("01/01");
myDiary.displayEntry("01/01");

myDiary.addEvents("01/01", ["ate breakfast", "ran", "touched tree"]);
myDiary.addSquirrelStatus("01/01", true);

myDiary.displayEntry("01/01");