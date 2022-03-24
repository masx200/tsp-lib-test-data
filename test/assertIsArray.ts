export function assertIsArray(con: any): asserts con is Array<any> {
    if (!Array.isArray(con)) {
        throw Error("assert error array:" + con);
    }
}
