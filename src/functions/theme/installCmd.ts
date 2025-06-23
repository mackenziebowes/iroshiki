import { registerCommand, type Command } from "../../core/cli";
import log from "../../core/log";
import { selectTheme } from "./selectTheme";
import { outputTheme } from "./outputTheme";
import { createTheme } from "./createTheme";
import { createInkTheme } from "./createInkTheme";
import label from "../data/Labels";

export const InstallCmd: Command = {
	name: "install",
	description: "installs a theme",
	run: (args: string[]) => {
		validateArgs(args);
		const selectedTheme = selectTheme(args[0]!);
		if (!selectedTheme) {
			throw new Error("Could not find theme.");
		}
		// -- Check if Ink Theme --
		try {
			const argparts = args[0]!.split(":");
			if (argparts.length > 1 && argparts[0] == "ink") {
				let output = label.ink();
				const themeCss = createInkTheme(selectedTheme);
				output += themeCss;
				outputTheme(output, args[0]!, args[1]!);
				return;
			}
		} catch {}
		let output = "";
		try {
			const argparts = args[0]!.split(":");
			if (argparts.length > 1) {
				if (argparts[0] == "ansi") {
					output = label.ansi();
				}
				if (argparts[0] == "nord") {
					output = label.nord();
				}
				if (argparts[0] == "cat") {
					output = label.cat();
				}
			}
		} catch {}
		const themeCss = createTheme(selectedTheme);
		output += themeCss;
		outputTheme(output, args[0]!, args[1]!);
		return;
	},
};

function validateArgs(args: string[]) {
	if (args.length < 2) {
		throw new Error(
			"Adding a theme takes 2 args: Theme Name and target file/directory."
		);
	}
	if (typeof args[0] == "undefined") {
		throw new Error(
			"Adding a theme takes 2 args: Theme Name and target file/directory."
		);
	}
	if (typeof args[1] == "undefined") {
		throw new Error(
			"Adding a theme takes 2 args: Theme Name and target file/directory."
		);
	}
}
