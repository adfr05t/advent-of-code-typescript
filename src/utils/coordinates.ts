export type Location = {
    x: number;
    y: number;
};

export function calculateManhattanDistance(destination: Location): number
{
    // Calculate from origin (0,0)
    return Math.abs(0 - destination.x) + Math.abs(0 - destination.y);
}