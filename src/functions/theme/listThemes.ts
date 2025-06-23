import catppucin from "../../data/catpuccin";
import type { Command } from "../../core/cli";
import fs from "node:fs";
import path from "node:path";

export const listThemesCmd: Command = {
	name: "list",
	description: "List all available themes",
	run: listThemes,
};

function listThemes() {
	console.log("");
	console.log("  [Notes]");
	console.log("    use 'iroshiki install <theme-name> <file-target>'");
	console.log("    to export an iroshiki css based on your requested theme.");
	console.log("");
	console.log(
		"  [Catppuccin]: A soothing pastel theme for the high-spirited!."
	);
	console.log(
		"    'cat:latte' Catppuccin's lightest theme harmoniously inverting the essence of their dark themes."
	);
	console.log(
		"    'cat:frappe' A less vibrant alternative using subdued colors for a muted aesthetic."
	);
	console.log(
		"    'cat:macchiato' Medium contrast with gentle colors creating a soothing atmosphere."
	);
	console.log(
		"    'cat:mocha' The Original — Catppuccin's darkest variant offering a cozy feeling with color-rich accents."
	);
	console.log("");
	console.log(
		"  [Nord]: An arctic, north-bluish color palette, modified to match ANSI Spec."
	);
	console.log("  'nord' Default dark mode.");
	console.log(
		"  'nord:light' Inverted light mode - colors are otherwise identical to nord."
	);
	console.log("");
	console.log("  [Gesena]: Homemade by the creators of Iroshiki");
	console.log("  [Ink]: Minimalist 4-tone themes");
	console.log("    'ink:pure' Pure Gray neutrals.");
	console.log("    'ink:maple' Reds and wheats.");
	console.log("    'ink:hayfield' Greens and wheats.");
	console.log("  [ANSI]: Full 16-tone themes");
	console.log(
		"    'ansi:ruined' Muted as if by opposing the flow of time itself - worn down to rubble. Standard semantic indexing."
	);
	console.log(
		"    'ansi:spring' Vibrant spring-inspired theme with nonstandard semantic indexing."
	);
	console.log(
		"    'ansi:sakura' Electrically vivid spring tones, colors picked from Japanese pin-ups. Nonstandard semantic indexing."
	);
	console.log(
		"    'ansi:vivid' Imagine if Bladerunner wasn't depressing. Standard semantic indexing."
	);
	console.log(
		" [Ramp]: 16 variations on a hue. Meditative, low-constrast, understimulating."
	);
	console.log(
		"    'ramp:parchment' Imagine if computers were made out of sheepskin."
	);
	console.log("");
}
