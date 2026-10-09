# 2025 Day 4: Printing Department

## Puzzle
https://adventofcode.com/2025/day/4

## Part 1
- Aim: How many rolls of paper can be accessed by a forklift?
    - An accessible roll is one that has no more than 3 rolls of paper in the 8 adjacent positions surrounding it.
        
## Part 2
- Aim: As above, but imagine the accessible rolls are removed and iterate over the floorplan until no more are accessible

## Notes
- Using a 'flatened' string method rather than 2D array.
- Need to correctly identify and handle positions at far left/right of rows that will not have all 8 adjacent positions.
- The flattened string method made part two relatively straightforward. I just needed to record the indexes of 'removed' rolls and discount those from checks on subsequent iterations.