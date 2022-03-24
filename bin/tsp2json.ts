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
    const startline =
        data.findIndex((d) => d.includes("NODE_COORD_SECTION")) + 1;
    const endline = Math.max(
        data.findIndex((d) => d.includes("EOF")),
        data.findIndex((d) => d.includes("END"))
    );
    assert(startline > 0);
    assert(endline > 0);
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
