import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["main.ts"],
  format: "esm",
  outdir: "try",
  bundle: true,
  treeShaking: true,
});
