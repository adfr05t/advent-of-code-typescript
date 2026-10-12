# 2025 Day 5: Cafeteria 

## Puzzle
https://adventofcode.com/2025/day/5

## Part 1
- Aim: How many ingredients are fresh?
    - A fresh ingredient is one whose numerical ID is present in the ranges given prior to the blank line in the input.
        
## Part 2
- Aim: 

## Notes
Part 1:
- My initial solution was to put the list of the ID's into a Set, then iterate through each range of the input and see how many of the ID's are present in the Set, removing them once confirmed as valid. This turned out to be wildly inefficient due to the scale of the ranges.
- The improved solution iterates through the id list and check if the id falls between the min and max of any of the given ranges, returning early once it is confirmed valid.