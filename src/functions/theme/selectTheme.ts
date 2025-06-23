import catppucin from "../../data/catpuccin";
import nord from "../../data/nord";
import log from "../../core/log";
import ink from "../../data/gesena/ink";
import ansi from "../../data/gesena/ansi";

export function selectTheme(argument: string) {
	let colonSplit = argument.split(":");
	if (colonSplit[0] == "cat") {
		switch (colonSplit[1]) {
			case "latte":
				return catppucin.latte;
			case "frappe":
				return catppucin.frappe;
			case "macchiato":
				return catppucin.macchiato;
			case "mocha":
				return catppucin.mocha;
		}
	}
	if (colonSplit[0] == "nord") {
		if (!colonSplit[1]) {
			return nord.base;
		}
		if (colonSplit[1] == "light") {
			return nord.light;
		}
		if (colonSplit[1] == "shift") {
			if (!colonSplit[2]) {
				throw new Error(
					"nord:shift must be supplied a number. Try nord:shift:3"
				);
			}
			if (parseInt(colonSplit[2]) < -12 || parseInt(colonSplit[2]) > 12) {
				throw new Error(
					"Out of bounds. n must be more than -12 and less than 12."
				);
			}
			return nord.shift(parseInt(colonSplit[2]));
		}
	}
	if (colonSplit[0] == "ink") {
		switch (colonSplit[1]) {
			case "pure":
				return ink.pure;
			case "maple":
				return ink.maple;
			case "hayfield":
				return ink.hayfield;
			default:
				return ink.pure;
		}
	}
	if (colonSplit[0] == "ansi") {
		switch (colonSplit[1]) {
			case "ruined":
				return ansi.ruined;
			case "sakura":
				return ansi.sakura;
			case "spring":
				return ansi.spring;
			case "vivid":
				return ansi.vivid;
			default:
				return ansi.ruined;
		}
	}
}
