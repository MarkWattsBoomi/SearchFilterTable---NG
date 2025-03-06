import esbuild from 'esbuild';
import pkg from 'esbuild-plugin-external-global';
const {externalGlobalPlugin} = pkg;

console.log("Start");

let ctx = await esbuild.context({
    entryPoints: ['src/SFTNew.tsx'],
    bundle: true,
    outfile: 'build/sft_ng.js',
    format:"esm",
    plugins: [
        externalGlobalPlugin({
        'react': 'window.boomi.flow.React'
        })
    ]
})
//.then(() => console.log("⚡Done"))
//.catch(() => {console.log("Error"); process.exit(1)});

console.log("watching");
await ctx.watch();

console.log("serving");
let { host, port } = await ctx.serve({
    servedir: 'build',
    port: 8080,
    host: "localhost"
})

console.log(host + " " + port)