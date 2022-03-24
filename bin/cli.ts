#!/usr/bin/env node
import parse from "@masx200/mini-cli-args-parser";
import assert from "assert";
import fsextra from "fs-extra";
import path from "path";
import process from "process";
//@ts-ignore
import { findfiles } from "./findfiles.ts";
//@ts-ignore
import { tsp2json } from "./tsp2json.ts";
("use strict");
process.on("unhandledRejection", (err) => {
    throw err;
});
console.log("tsp2json");
console.log("usage:");
console.log("tsp2json --inputdir=path/to/TSP --outputdir=path/to/json");
const extension = "tsp";
const args = process.argv.slice(2);
const opts = parse(args);

console.log(opts);
const { inputdir, outputdir } = opts;
assert(typeof inputdir === "string", "arugments inputdir should not empty");
assert(typeof outputdir === "string", "arugments outputdir should not empty");

start(inputdir, outputdir);
async function start(inputdir: string, outputdir: string) {
    const dirpa = inputdir;
    const extreg = new RegExp(".(" + extension + ")$", "i");
    const dirpath = path.resolve(dirpa);
    await fsextra.ensureDir(dirpath);
    await fsextra.ensureDir(outputdir);
    console.log("递归查找文件...", dirpath);
    //return
    const files = await findfiles(extreg, dirpath);

    //.then((files) => {
    console.log("文件列表", files);

    for (let file of files) {
        const basename = path.basename(file, ".tsp");
        const tsp = (await fsextra.readFile(file)).toString();
        console.log("读取文件", file);
        const json = tsp2json(tsp);

        const outputfile = path.join(outputdir, basename + ".json");

        await fsextra.writeJSON(outputfile, json);
        console.log("写入文件", outputfile);
        console.log(json);
    }
}
