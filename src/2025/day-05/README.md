# 2025 Day 5: Cafeteria 

## Puzzle
https://adventofcode.com/2025/day/5

## Part 1
- Aim: How many ingredients are fresh?
    - A fresh ingredient is one whose numerical ID is present in the ranges given prior to the blank line in the input.
        
## Part 2
- Aim: 

## Notes
- Put the list of the ID's in the second half of the imput into a Set. Then iterate through each range in the first half of the input and see how many of the ID's are present in the Set.
- NB: will have to account for the fact that an ID can be present in more than one range but still should only count as a single valid ingredient. Can do so by removing ID's from the Set once they have been confirmed as fresh.