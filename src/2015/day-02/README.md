# 2015 Day 2 – I Was Told There Would Be No Math

## Puzzle
https://adventofcode.com/2015/day/2

## Part 1
- Aim: determine the total wrapping paper needed for all boxes
- Paper needed for each box is surface area (2*l*w + 2*w*h + 2*h*l) + area of the smallest side

Method:
- Process input:
    - split by new-line
    - split by 'x'
    - and convert to number
- Perform the calculations for each box
- Add each result to a running total

## Part 2
- Aim: determine the total wrapplength of ribbon needed for all boxes
    - Two calculations:
    - Ribbon to go around box: add the two shortest dimensions and addouble the result. Eg. 2x3x4 requires (2 + 3) * 2
    - Bow: volume of box (multiply the three dimensions). Eg. 2x3x4 requires 2 * 3 * 4   

## Notes

