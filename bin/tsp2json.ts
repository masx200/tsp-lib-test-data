import assert from "assert";
import "core-js/actual/string/replace-all.js";
export function tsp2json(tsp: string): [number, number][] {
    const data = tsp
        .split("\n")
        .map((d) =>
            d
                .replaceAll("\r", "")
                .trim()
                .replaceAll("  ", " ")
                .replaceAll("  ", " ")
                .replaceAll("  ", " ")
                .replaceAll("  ", " ")
        );
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
    const endline = Math.max(
        ...endflags.map((flag) => {
            return data.findIndex((d) => d.includes(flag));
        })
        // data.findIndex((d) => d.includes("EOF")),
        // data.findIndex((d) => d.includes("END"))
    );
    assert(startline > 0, "start flag not found");
    assert(endline > 0, "end flag not found");
    assert(endline > startline);
    const dataofnodes = data.slice(startline, endline);
    // console.log(dataofnodes);
    const result: [number, number][] = dataofnodes.map((s) => {
        const a = s.split(" ");
        const x = Number(a[1]);
        const y = Number(a[2]);
        assert(!Number.isNaN(x));
        assert(!Number.isNaN(y));
        return [x, y];
    });
    // console.log(result);
    return result;
}
