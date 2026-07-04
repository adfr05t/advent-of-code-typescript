# 2015 Day 3 – Perfectly Spherical Houses in a Vacuum

## Puzzle
https://adventofcode.com/2015/day/3

## Part 1
- Aim: from an infinite 2D grid of houses, determine how many houses receive at least one present.
- On each input character Santa moves one house according to direction symbol (<, >, ^, v) and delivers a present there. He also delivers a present to the house at his starting position.


## Part 2
- Aim: 

## Notes

- Initial difficulties (Part 1):
    - hiccup due to not realising that when pushng OBJECTS to an array, the result is a reference to the original object in the array. Further changes made to the object are also reflected in the array (because it is a reference-to, not a copy).

    - use 
        - myArray.push({ ...myObject });
        ...to add a copy to the array

    - also:
        for (const location of locationsVisited)
        {
            if (newLocation === location)

    - I started with the above in isNewLocation() BUT that always returns true, because:
        - For objects, === does not compare whether the contents are the same. It compares whether they are the same object in memory!
