# 2015 Day 5 – Doesn't He Have Intern-Elves For This?

## Puzzle
https://adventofcode.com/2015/day/5

## Part 1
- Aim: how many strings are nice?
    - Rules:
        - Nice strings contain:
            - 3 or more vowels
            - A letter that appears twice in a row
            - Does not contain: 'ab', 'cd', 'pq', or 'xy'

## Part 2
- Same aim but new rules replace part 1 rules:
    - Nice strings contain:
        -1. a pair of any two letters that appear twice in the string.
            - eg: xyxy, aafsgeaa, rwgfrw (NOT aaa - no overlaps)
        -2. contains at least one letter which repeats with one letter inbetween
            - eg: xyx, efe, aaa (inbetween letter CAN be the same)


## Notes

- Part 2 Functions
    - 1. check each pair of letters to see if they occur again in the remainder of the string
    - 2. compare each character to character 2 places ahead (can re-use checkRepeatedLetters by adding a spacing var)
