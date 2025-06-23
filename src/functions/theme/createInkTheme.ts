import { chromaTransforms } from "../chroma";
import type { InputTheme } from "../../types";
import chroma from "chroma-js";

const RuleMap = new Map<string, string>();

export function createInkTheme(theme: InputTheme) {
	const scale = chromaTransforms.basics.ink(theme.color0)!;
	createSurfaceRules(scale);
	createAnsiRules(theme);
	createSemanticRules();
	createDevanoRules();
	let flatRules: Record<string, string>[] = [];
	RuleMap.forEach((v, k) => {
		flatRules.push({
			[k]: v,
		});
	});
	return createCSSRulesContent(flatRules);
}

function createAnsiRules(theme: InputTheme) {
	const darks = chromaTransforms.basics.ink(
		chroma(theme.color0).set("hsl.s", "*2").set("hsl.l", 0.35).hex()
	);
	const lights = chromaTransforms.basics.ink(
		chroma(theme.color0).set("hsl.s", "*2").set("hsl.l", 0.65).hex()
	);
	for (let i = 0; i <= 7; i++) {
		if (i == 4) {
			RuleMap.set(
				`color4`,
				chroma(darks[4]!).set("hsl.s", "*2").set("hsl.l", 0.85).hex()
			);
		}
		if (i < 7) {
			RuleMap.set(`color${i}`, darks[i]!);
			continue;
		}
		if (i == 7) {
			RuleMap.set("color7", theme.color7);
			continue;
		}
	}
	for (let i = 0; i <= 7; i++) {
		let j = i + 8;
		if (j < 15) {
			RuleMap.set(`color${j}`, lights[i]!);
			continue;
		}
		if (j == 15) {
			RuleMap.set("color15", theme.color15);
			continue;
		}
	}
}

function createSurfaceRules(colors: string[]) {
	colors.forEach((color, i) => {
		RuleMap.set(`surface-${(i + 1) * 100}`, color);
	});
}

function createSemanticRules() {
	Array.from({ length: 10 }, (_, i) => {
		RuleMap.set(`error-${(i + 1) * 100}`, `var(--color1)`);
		RuleMap.set(`success-${(i + 1) * 100}`, `var(--color2)`);
		RuleMap.set(`warn-${(i + 1) * 100}`, `var(--color3)`);
		RuleMap.set(`info-${(i + 1) * 100}`, `var(--color4)`);
		RuleMap.set(`focus-${(i + 1) * 100}`, `var(--color5)`);
		RuleMap.set(`outline-${(i + 1) * 100}`, `var(--color6)`);
	});
	RuleMap.set(`well`, "var(--surface-100)");
	RuleMap.set(`base`, "var(--surface-200)");
	RuleMap.set(`overlay`, "var(--surface-400)");
	RuleMap.set(`text`, "var(--surface-800)");
	RuleMap.set(`subtext`, "var(--surface-700)");
	RuleMap.set(`disabled`, "var(--surface-600)");
}

function createDevanoRules() {
	// bg
	RuleMap.set("bg-a", "var(--color0)");
	RuleMap.set("bg-e", "var(--color0)");
	RuleMap.set("bg-i", "var(--color0)");
	RuleMap.set("bg-o", "var(--color0)");
	// fg
	RuleMap.set("fg-a", "var(--color7)");
	RuleMap.set("fg-e", "var(--color7)");
	RuleMap.set("fg-i", "var(--color15)");
	RuleMap.set("fg-o", "var(--color15)");
	// ara <> color4
	RuleMap.set("c-a-a", "var(--color7)");
	RuleMap.set("c-a-e", "var(--color7)");
	RuleMap.set("c-a-i", "var(--color15)");
	// ene <> color6
	RuleMap.set("c-e-a", "var(--color7)");
	RuleMap.set("c-e-e", "var(--color7)");
	RuleMap.set("c-e-i", "var(--color15)");
	// izi <> color13, bright color5
	RuleMap.set("c-i-a", "var(--color7)");
	RuleMap.set("c-i-e", "var(--color7)");
	RuleMap.set("c-i-i", "var(--color15)");
}

type CSSRule = {
	[key: string]: string;
};

function createCSSRulesContent(lines: CSSRule[]) {
	let returnString = `:root {\n`;
	for (const line of lines) {
		for (const [k, v] of Object.entries(line)) {
			returnString += `\t--${k}: ${v};\n`;
		}
	}
	returnString += "}";
	return returnString;
}
