import {readFileSync} from "node:fs";

export function readInput(path: string): string
{
    return readFileSync(path, "utf-8");
}