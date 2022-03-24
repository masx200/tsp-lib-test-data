import { asserttrue } from "../test/asserttrue";

const modules = import.meta.globEager("../lib/*.json");
export type NodeCoordinates = Array<[number, number]>;
// console.log(modules);
const TSP_cords: Record<string, NodeCoordinates> = {
    // node_coordinates10,
    // node_coordinates16,
    // node_coordinates12,
    // node_coordinates21,
    // node_coordinates30,
    ...Object.fromEntries(
        Object.entries(modules).map(([key, value]) => {
            const name = key
                .slice(0, key.lastIndexOf("."))
                .slice(key.lastIndexOf("/") + 1);
            asserttrue(name.length > 0);
            return [name, value.default];
        })
    ),
};
asserttrue(Object.keys(TSP_cords).length);
export default TSP_cords;
