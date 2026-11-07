import { readInput } from "../../utils/readInput";

type OrderingRule = { before: number, after: number };

const filePath = "src/2024/day-05/input.txt";
const input = readInput(filePath);

const solution = solvePuzzle(input);
console.log("Part 1 Answer:", solution);



//which updates are already in the right order
//...sum the middle pages of them

/*EVALUATE EACH 'UPDATE' BY:
    - iterate through each num in the update
    - check against each of the FIRST in the rule number-pairs
    - for each match, check the 2nd number in the pair is not in the update before current number
    - might be more efficient to start at the END of update. No need to check index 0.
    */
function solvePuzzle(input: string): number
{
    // split input into two parts
//  page ordering rules: store as two numbers in array (of arrays)
//  pages to print: store per line (one line is one update for printing) as number array
    const total = 0;
    // Split at the full blank line
    const splitInput = input.split(/\r?\n\r?\n/);

    const ruleStrings = splitInput[0].split(/\r?\n/);
    const updateStrings = splitInput[1].split(/\r?\n/);

    const orderingRules: OrderingRule[] = ruleStrings.map((rule) => 
    {
        const [ before, after ] = rule.split("|").map(Number);

        return { before, after };
    });

    for (const updateString of updateStrings)
    {
        if (isOrderCorrect(updateString, orderingRules))
        {
            
        }
    }

    return 0;
}

function isOrderCorrect(updateString: string, orderingRules: OrderingRule[]): boolean
{

}

// Use this to get the middle page num by it's index
function middlePageIndex(numberOfPages: number): number
{
    return (numberOfPages - 1) / 2;
}