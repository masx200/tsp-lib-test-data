import "core-js/actual/array/at.js";
import { assertnumber } from "../test/assertnumber";
import { asserttrue } from "../test/asserttrue";

const modules = import.meta.glob("../lib/*/*.json");
export type NodeCoordinates = Array<[number, number]>;
// console.log(modules);
const TSP_cords: Record<string, () => Promise<NodeCoordinates>> =
    // {
    // node_coordinates10,
    // node_coordinates16,
    // node_coordinates12,
    // node_coordinates21,
    // node_coordinates30,
    // ...
    Object.fromEntries(
        Object.entries(modules).map(([key, value]) => {
            const name = key
                .slice(0, key.lastIndexOf("."))
                .slice(key.lastIndexOf("/") + 1);
            asserttrue(name.length > 0);
            const getcoordinates = () => {
                return value().then((m) => {
                    //@ts-ignore
                    return Reflect.get(m, "default");
                });
            };
            // asserttrue(typeof getcoordinates === "function");
            return [name, getcoordinates];
        })
    );
// };
asserttrue(Object.keys(TSP_cords).length);
// export default TSP_cords;
export function getNodeCoordinates(name: string): Promise<NodeCoordinates> {
    const getcoordinates = TSP_cords[name];
    if (getcoordinates) {
        return getcoordinates();
    } else {
        throw Error("not found " + name);
    }
}
const nametodimention = new Map<string, number>(
    Object.keys(modules).map((name) => {
        const dimension = Number(name.split("/").at(-2));
        assertnumber(dimension);
        const nameformat = name
            .slice(0, name.lastIndexOf("."))
            .slice(name.lastIndexOf("/") + 1);
        return [nameformat, dimension];
    })
);
export function getDimension(name: string): number {
    const dimension = nametodimention.get(name);
    if (dimension) {
        return dimension;
    } else {
        throw Error("not found: " + name);
    }
}
export function getNames() {
    return Object.keys(TSP_cords);
}
