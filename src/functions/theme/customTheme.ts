import { type Command } from "../../core/cli";
import fs from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import { outputTheme } from "./outputTheme";
import { createTheme } from "./createTheme";
import { createInkTheme } from "./createInkTheme";
import label from "../data/Labels";
import type { InputTheme } from "../../types";
import { checkCustomPalette } from "../chroma/testing";

export const TestCustom: Command = {
	name: "custom:test",
	description: "Analyze a custom palette for contrast",
	run: (args: string[]) => {
		try {
			const selectedThemeContent = fs.readFileSync(
				join(cwd(), args[0]!),
				"utf8"
			);
			const selectedTheme = JSON.parse(selectedThemeContent) as InputTheme;
			if (!selectedTheme) {
				throw new Error("Could not find theme.");
			}
			checkCustomPalette(selectedTheme);
			return;
		} catch (error) {
			throw error;
		}
	},
};

export const CustomInstall: Command = {
	name: "custom:install",
	description: "installs a custom theme",
	run: (args: string[]) => {
		validateArgs(args);
		try {
			const selectedThemeContent = fs.readFileSync(
				join(cwd(), args[0]!),
				"utf8"
			);
			const selectedTheme = JSON.parse(selectedThemeContent) as InputTheme;
			if (!selectedTheme) {
				throw new Error("Could not find theme.");
			}
			let output = label.custom();
			const themeCss = createTheme(selectedTheme);
			output += themeCss;
			outputTheme(output, args[0]!, args[1]!);
			return;
		} catch (error) {
			throw error;
		}
	},
};

export const CustomInstallInk: Command = {
	name: "custom:install:ink",
	description: "installs a custom ink theme",
	run: (args: string[]) => {
		validateArgs(args);
		try {
			const selectedThemeContent = fs.readFileSync(
				join(cwd(), args[0]!),
				"utf8"
			);
			const selectedTheme = JSON.parse(selectedThemeContent) as InputTheme;
			if (!selectedTheme) {
				throw new Error("Could not find theme.");
			}
			let output = label.ink();
			const themeCss = createInkTheme(selectedTheme);
			output += themeCss;
			outputTheme(output, args[0]!, args[1]!);
			return;
		} catch (error) {
			throw error;
		}
	},
};

function validateArgs(args: string[]) {
	if (args.length < 2) {
		throw new Error(
			"Creating a custom theme takes 2 args: source target and output target file/directory."
		);
	}
	if (typeof args[0] == "undefined") {
		throw new Error(
			"Creating a custom theme takes 2 args: source target and output target file/directory."
		);
	}
	if (typeof args[1] == "undefined") {
		throw new Error(
			"Creating a custom theme takes 2 args: source target and output target file/directory."
		);
	}
}
