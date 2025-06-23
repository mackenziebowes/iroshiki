import { cwd } from "node:process";
import { join } from "node:path";
import fs from "node:fs";

export function outputTheme(
	themeCss: string,
	themeName: string,
	target: string
) {
	const targetInstall = join(cwd(), target);
	if (!targetInstall.endsWith(".css")) {
		console.log("    [Not CSS File...]");
		if (fs.existsSync(targetInstall)) {
			console.log("    [Target Found...]");
			if (fs.statSync(targetInstall).isDirectory()) {
				console.log("    [Target is directory...]");
				const targetFile = join(targetInstall, `${themeName}-palette.css`);
				fs.writeFileSync(targetFile, themeCss, "utf8");
				console.log("    [Wrote Palette]");
				console.log("    [SUCCESS]");
				console.log("");
				return;
			}
			console.log("    [Invalid Target]");
			console.log("    [FAILURE]");
			console.log("");
			return;
		}
	} else {
		if (fs.existsSync(targetInstall)) {
			if (fs.statSync(targetInstall).isFile()) {
				console.log("    [Target is file...]");
				fs.writeFileSync(targetInstall, themeCss, "utf8");
				console.log("    [Wrote Palette]");
				console.log("    [SUCCESS]");
				console.log("");
				return;
			}
			console.log("    [Invalid Target]");
			console.log("    [FAILURE]");
			console.log("");
			return;
		} else {
			const targetFile = join(cwd(), `${target}`);
			fs.writeFileSync(targetFile, themeCss, "utf8");
			console.log("    [Wrote Palette]");
			console.log("    [SUCCESS]");
			console.log("");
			return;
		}
	}
}
