export function assertshouldcatcherror(fn: () => void): boolean {
    try {
        fn();
    } catch (error) {
        return true;
    }
    throw Error("assert shouldcatcherror");
}
