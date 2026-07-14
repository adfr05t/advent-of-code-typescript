# 2015 Day 6 – Probably a Fire Hazard

## Puzzle
https://adventofcode.com/2015/day/6

## Part 1
- Aim: determine how many lights are lit
    - 1000 x 1000 grid, numbered 0 to 999 in each direction
    - lights begin turned off
    - Three instruction types: on, off, toggle
    - each coordinate pair represnts the opposite corners of a rectangle, inclusive
    - eg. 'turn on 0,0 through 2,2' turns on 9 lights total (a 3x3 square)

## Part 2
- Aim: calculate the total brightness of all lights
    - on: increment brightnes by 1
    - off: decrement brightness by 1 (but minimum value of 0)
    - toggle: increment brightness by 2

## Notes
- The main problem with my current solution is the large arrays of keys created by affectedLights(). I would like to go back and rectify this in the future. I can use numbers for coordinates (rather than use string coordinates as keys) and combine the logic of affectedLights() and adjustLights() into a single method to avoid the array creation altogether.
    
