# 2024 Day 5: Print Queue

## Puzzle

https://adventofcode.com/2024/day/5

## Part 1

- Aim: Find the sum of the numbers of the middle pages in correctly ordered updates (eg. those that do not break the ordering rules).

## Part 2

- Aim: Find the sum of the numbers of the middle pages of the incorrectly ordered updates, after first repairing them by putting their pages in the correct order.
 
## Notes
- Part 1 Approach: iterate through updates checking each page number against the 'before' page numbers in the ordering rules. If found, check the earlier pages in the update for the 'after' page specified by the rule.