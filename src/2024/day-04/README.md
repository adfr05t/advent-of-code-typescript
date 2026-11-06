# 2024 Day 4: Ceres Search

## Puzzle

https://adventofcode.com/2024/day/4

## Part 1

- Aim: Find the number of occurances of the word "XMAS" in the input. The letters can be read forwards, backwards, up, down, or diagonally.

## Part 2

- Aim: Find occurances of pairs of diagonally written 'MAS' that share the same 'A'.
 
## Notes
- Approach: flatten the input into a single string, and on finding an instance of the first letter of the target word use the appropriate formula to check positions in each 'grid direction'.