# 2024 Day 2: Red-Nosed Reports

## Puzzle

https://adventofcode.com/2024/day/2

## Part 1

- Aim:
    - Each line of input is a report consisting of levels.
    - A safe report is one in which the levels are either all increasing or all decreasing, and any two adjacent levels differ by at least one and at most three.
    - Determine the number of safe reports.

## Part 2

- Aim: 
    - As part 1, but any unsafe report that would be made safe by the removal of a single level should be counted as safe.

## Notes
- For part 2, a report that is unsafe due to exceeding the allowable difference between two adjacent levels can only be repaired if the levels are the first two or last two in the report.