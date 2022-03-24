import find from "find";
export function findfiles(
    pattern: string | RegExp,
    root: string
): Promise<string[]> {
    return new Promise((s, j) => {
        find.file(pattern, root, (files) => {
            s(files);
        }).error((e) => {
            j(e);
        });
    });
}
