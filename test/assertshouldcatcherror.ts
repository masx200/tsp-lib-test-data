export function assertshouldcatcherror(fn: () => void, msg?: string): boolean {
    try {
        fn();
    } catch (error) {
        const message = String((error as any)?.message);

        if (msg) {
            return message.includes(msg);
        } else {
            if (message) {
                return true;
            }
        }
    }
    throw Error("assert shouldcatcherror");
}
