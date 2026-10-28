# 2025 Day 7: Laboratories   

## Puzzle
https://adventofcode.com/2025/day/7

## Part 1
- Aim: Determine the number of total times a beam is split.
        
## Part 2
- Aim: 

## Notes
- Part 1 approach:
    - Split input into rows, and treat each row as a column via index.
    - Use a Set to track the columns in which beams are currently present.
    - For each row look at the characters in the 'beam' columns indicated by indexes in the Set.
    - Keep a tally of 'hits'. Split beams by adding index +1/-1 to Set and removing the original.
