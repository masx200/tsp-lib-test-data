export function assertnumber(con: any): asserts con is number {
    if (typeof con !== "number") {
        throw Error("assert error number:" + con);
    }
}
