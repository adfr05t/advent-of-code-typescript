# 2025 Day 6: Trash Compactor  

## Puzzle
https://adventofcode.com/2025/day/6

## Part 1
- Aim: Give the total of the answers of all the mathematical operations.
        
## Part 2
- Aim: As above, but construct the values on which to perform the operations by reading single character columns downwards and from right to left

## Notes
- The challenge is in parsing the input and approaching it as a series of columns. Can do so by storing the values from each row as a series of arrays and then treat the same index for each array as a column.
- Part Two: Save the spaces when constructing the arrays of characters in each row. Detect columns with no digits to indicate the end of each individual problem.