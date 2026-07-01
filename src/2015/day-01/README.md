# 2015 Day 1 – Not Quite Lisp

## Puzzle
https://adventofcode.com/2015/day/1

## Part 1
- Aim: find the correct floor
- Begin at floor 0
- `(` means go up one floor
- `)` means go down one floor

## Part 2
- Aim: find the position of the character that first results in entering the basement (floor -1)

## Notes
- I used the same function to solve both parts to avoid repeated code
- Initially I used a boolean 'basementEntered' to check whether part2 was resolved or still active. I removed it in favour of initializing firstBasementPosition as undefined instead (we know part2 is resolved if firstBasementPosition is no longer undefined).