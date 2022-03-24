import assert from "assert";
import "core-js/actual/string/replace-all.js";
//@ts-ignore
import { assertnumber } from "../test/assertnumber.ts";
//@ts-ignore
import { asserttrue } from "../test/asserttrue.ts";
export function tsp2json(tsp: string): [number, number][] {
    // 检查DIMENSION
    const data = tsp.split("\n").map((d) => {
        return d
            .replaceAll("\r", "")
            .trim()
            .replaceAll("  ", " ")
            .replaceAll("  ", " ")
            .replaceAll("  ", " ")
            .replaceAll("  ", " ")
            .replace(/\s+/g, " ");
    });
    const dimension_flag = "DIMENSION";
    const dimension_line = data.findIndex((d) => d.includes(dimension_flag));
    assert(dimension_line > 0, "dimension_flag not found");

    const dimension_regexp = /DIMENSION\s?:\s?(?<d>\d+)$/;
    const dimension = Number(
        dimension_regexp.exec(data[dimension_line])?.groups?.d
    );
    assertnumber(dimension);
    console.log("dimension", dimension);
    // console.log(data);
    //DISPLAY_DATA_SECTION
    //NODE_COORD_SECTION
    const startflags = ["DISPLAY_DATA_SECTION", "NODE_COORD_SECTION"];
    const endflags = ["EOF", "END"];
    const startline =
        Math.max(
            ...startflags.map((flag) => {
                return data.findIndex((d) => d.includes(flag));
            })
            // data.findIndex((d) => d.includes("DISPLAY_DATA_SECTION")),
            // data.findIndex((d) => d.includes("NODE_COORD_SECTION"))
        ) + 1;
    let endline = Math.max(
        ...endflags.map((flag) => {
            return data.findIndex((d) => d.includes(flag));
        })
        // data.findIndex((d) => d.includes("EOF")),
        // data.findIndex((d) => d.includes("END"))
    );
    assert(startline > 0, "start flag not found");
    try {
        assert(endline > 0, "end flag not found");
    } catch (err) {
        console.log((err as any)?.message);
        endline = data.length - 1;
        console.log("endline set to length");
    }

    assert(endline > startline);
    const dataofnodes = data.slice(startline, endline);
    // console.log(dataofnodes);
    const result: [number, number][] = dataofnodes
        .filter(Boolean)
        .map((s) => {
            if (s.length === 0) {
                return false;
            }
            const a = s.split(" ");
            const x = Number(a[1]);
            const y = Number(a[2]);
            assert(!Number.isNaN(x), "not number:" + s);
            assert(!Number.isNaN(y), "not number:" + s);
            return [x, y];
        })
        .filter(Boolean) as [number, number][];
    asserttrue(result.length === dimension, "dimension mismatch");
    // console.log(result);
    return result;
}
