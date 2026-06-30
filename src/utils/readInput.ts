import {readFileSync} from "node:fs";

export function readFile(path: string): string
{
    const fileText = readFileSync(path, "utf-8");
    
    return fileText;
}


