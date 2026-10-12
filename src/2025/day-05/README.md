# 2025 Day 5: Cafeteria 

## Puzzle
https://adventofcode.com/2025/day/5

## Part 1
- Aim: How many ingredients are fresh?
    - A fresh ingredient is one whose numerical ID is present in the ranges given prior to the blank line in the input.
        
## Part 2
- Aim: Find the total number of unique fresh ingredient IDs contained in the ranges.

## Notes
Part 1:
- My initial solution was to put the list of the ID's into a Set, then iterate through each range of the input and see how many of the ID's are present in the Set, removing them once confirmed as valid. This turned out to be wildly inefficient due to the scale of the ranges.
- The improved solution iterates through the id list and check if the id falls between the min and max of any of the given ranges, returning early once it is confirmed valid.

Part 2:
- Initial thoughts:
    - Substract min from max of each range to get number of values contained within. 
    - Check for overlapping ranges and, if detected, calculate the number of shared values and subtract that number from the total number of IDs.
    - This will not work due to values being shared by multiple ranges
- Improved solution:
    - Sort ranges by their minimum value
    - Determine if consecutive ranges overlap, and if so merge them into a single range.
    - When no more ranges can be merged, calculate total the size of all remaining ranges. 