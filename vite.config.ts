import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import path from "path";
import { terser } from "rollup-plugin-terser";
import { MinifyOptions } from "terser";
import { defineConfig, UserConfig } from "vite";
import ts from "rollup-plugin-ts";
export default defineConfig(({ mode, command }) => {
    console.log(mode, command);
    const isdrop = mode === "production" && command === "build";
    const terserOptions: MinifyOptions = {
        format: { comments: false },
        ecma: 2015,
        compress: { drop_console: isdrop, drop_debugger: isdrop },
        mangle: true,
        module: true,
        toplevel: true,
    };
    const config: UserConfig = {
        esbuild: false,
        // esbuild: { drop: isdrop ? ["console", "debugger"] : undefined },
        root: path.resolve(__dirname, "src"),
        plugins: [
            ts({ transpiler: "typescript" }),
            // mode === "production" &&
            //     command === "build" &&

            // babel({
            //     extensions: [".ts", ".js"],
            //     presets: ["@babel/preset-typescript"],
            //     plugins: [
            //         "babel-plugin-clean-code",
            //         [
            //             "babel-plugin-import",
            //             {
            //                 libraryName: "lodash",
            //                 libraryDirectory: "",
            //                 camel2DashComponentName: false, // default: true
            //             },
            //         ],
            //     ],
            // }),
            getBabelOutputPlugin({
                // presets: ["babel-preset-minify"],
                // extensions: [".ts", ".js"],
                plugins: [
                    isdrop && "babel-plugin-clean-code",
                    // "@babel/plugin-syntax-typescript",
                ].filter(Boolean),
            }),
            terser(terserOptions),
        ].filter(Boolean),
        build: {
            lib: {
                entry: path.resolve(__dirname, "src", "index.ts"),
                formats: ["es", "cjs"],
                fileName: "index",
            },
            minify: false,
            emptyOutDir: true,
            outDir: path.resolve(__dirname, "dist"),
            target: "es2015",
        },
    };
    return config;
});
