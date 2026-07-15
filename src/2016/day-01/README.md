# 2016 Day 1: No Time for a Taxicab

## Puzzle
https://adventofcode.com/2016/day/1

## Part 1
- Aim: determine the Manhattan distance travelled after following the directions
    - R2 means turn 90 degrees to right and then forward 2 blocks
    - L5 means turn 90 degrees to left and then forward 5 blocks   

- Method: update a location coordinate based on bearing (N, E, S, W)
        - north: y += distance
        - east: x += distance
        - south: y -= distance
        - west: x -= distance
        
## Part 2

## Notes

## Potential Refactoring
- Use an ordered array for Bearing