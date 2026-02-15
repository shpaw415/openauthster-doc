import type { FrameMasterPlugin } from "frame-master/plugin";
import { join } from "frame-master/utils";

export default function RobotsPlugin(): FrameMasterPlugin {
  return {
    name: "robots-txt",
    version: "1.0.0",
    build: {
      buildConfig: {
        plugins: [
          {
            name: "robots-txt-inserter",
            setup(build) {
              build.onEnd(async (res) => {
                const robotFile = Bun.file("./static/robots.txt");
                console.log(
                  join(process.cwd(), build.config.outdir!, "robots.txt"),
                );
                res.outputs.push({
                  ...robotFile,
                  path: join(process.cwd(), build.config.outdir!, "robots.txt"),
                  kind: "asset",
                  loader: "file",
                  hash: "",
                  sourcemap: null,
                });
                await Bun.write(
                  ".frame-master/build/robots.txt",
                  await robotFile.text(),
                );
              });
            },
          },
        ],
      },
    },
  };
}
