export function asserttrue(con: any, msg?: string): asserts con {
    if (!con) {
        throw Error("assert error true:" + msg);
    }
}
