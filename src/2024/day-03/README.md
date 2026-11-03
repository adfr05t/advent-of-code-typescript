# 2024 Day 3: Mull It Over

## Puzzle

https://adventofcode.com/2024/day/3

## Part 1

- Aim: Find the sum of all the uncorrupted multiplications in the input. Only sequences of the format 'mul(x,y)' qualify as uncorrupted. If other characters are present (including spaces) the sequence must be ignored.

## Part 2

- Aim: As part 1, but account for 'do()' and 'dont()' instructions that determine whether calculations should be processed.
 
## Notes
- Using .match() for matching a regular expression and then capturing the digit sequences contained in the results does most of the heavy lifting. Part 2 requires a simple state variable to determine when calculations should be performed.