import { chromaTransforms } from "../chroma";
import type { InputTheme } from "../../types";
import { makeTailwindRules } from "./tailwindOverride";
import { prism } from "../prism/makePrismRules";

const RuleMap = new Map<string, string>();

export function createTheme(theme: InputTheme) {
	const surfaceScale = chromaTransforms.basics.surface(theme.color0)!;
	const foregroundScale = chromaTransforms.basics.marking(theme.color15)!;
	const colorScales: Record<string, string[]> = {};
	for (const [k, v] of Object.entries(theme)) {
		const isNeutral =
			k.endsWith("0") || k.endsWith("7") || k.endsWith("8") || k.endsWith("15");
		if (!isNeutral) {
			const scale = chromaTransforms.basics.scale(v);
			const colorIndex = parseInt(k.slice(5, k.length));
			colorScales[`color${colorIndex}`] = scale;
		}
	}
	createAnsiRules(theme);
	createSurfaceRules(surfaceScale);
	createMarkingRules(foregroundScale);
	for (const [k, v] of Object.entries(colorScales)) {
		createColorRules(k, v);
	}
	createSemanticRules();
	createDevanoRules();
	const tailwindRules = makeTailwindRules(theme);
	let flatRules: Record<string, string>[] = [];
	RuleMap.forEach((v, k) => {
		flatRules.push({
			[k]: v,
		});
	});
	return createCSSRulesContent(flatRules, tailwindRules);
}

function createAnsiRules(theme: InputTheme) {
	for (const [k, v] of Object.entries(theme)) {
		RuleMap.set(k, v);
	}
}

function createSurfaceRules(colors: string[]) {
	colors.forEach((color, i) => {
		RuleMap.set(`surface-${(i + 1) * 100}`, color);
	});
}

function createMarkingRules(colors: string[]) {
	colors.forEach((color, i) => {
		RuleMap.set(`marking-${(i + 1) * 100}`, color);
	});
}

function createColorRules(label: string, colors: string[]) {
	colors.forEach((color, i) => {
		RuleMap.set(`${label}-${(i + 1) * 100}`, color);
	});
}

function createSemanticRules() {
	Array.from({ length: 9 }, (_, i) => {
		RuleMap.set(`error-${(i + 1) * 100}`, `var(--color1-${(i + 1) * 100})`);
		RuleMap.set(`success-${(i + 1) * 100}`, `var(--color2-${(i + 1) * 100})`);
		RuleMap.set(`warn-${(i + 1) * 100}`, `var(--color3-${(i + 1) * 100})`);
		RuleMap.set(`info-${(i + 1) * 100}`, `var(--color4-${(i + 1) * 100})`);
		RuleMap.set(`focus-${(i + 1) * 100}`, `var(--color5-${(i + 1) * 100})`);
		RuleMap.set(`outline-${(i + 1) * 100}`, `var(--color6-${(i + 1) * 100})`);
	});
	RuleMap.set(`well`, "var(--surface-100)");
	RuleMap.set(`base`, "var(--surface-200)");
	RuleMap.set(`overlay`, "var(--surface-400)");
	RuleMap.set(`text`, "var(--marking-100)");
	RuleMap.set(`subtext`, "var(--marking-200)");
	RuleMap.set(`disabled`, "var(--marking-300)");
}

function createDevanoRules() {
	// bg
	RuleMap.set("bg-a", "var(--surface-900)");
	RuleMap.set("bg-e", "var(--surface-800)");
	RuleMap.set("bg-i", "var(--surface-700)");
	RuleMap.set("bg-o", "var(--surface-600)");
	// fg
	RuleMap.set("fg-a", "var(--marking-400)");
	RuleMap.set("fg-e", "var(--marking-300)");
	RuleMap.set("fg-i", "var(--marking-200)");
	RuleMap.set("fg-o", "var(--marking-100)");
	RuleMap.set("c-a-a", "var(--color4-600)");
	RuleMap.set("c-a-e", "var(--color4-500)");
	RuleMap.set("c-a-i", "var(--color4-400)");
	// ene <> color6
	RuleMap.set("c-e-a", "var(--color5-600)");
	RuleMap.set("c-e-e", "var(--color5-500)");
	RuleMap.set("c-e-i", "var(--color5-400)");
	// izi <> color13, bright color5
	RuleMap.set("c-i-a", "var(--color6-600)");
	RuleMap.set("c-i-e", "var(--color6-500)");
	RuleMap.set("c-i-i", "var(--color6-400)");
}

type CSSRule = {
	[key: string]: string;
};

function createCSSRulesContent(lines: CSSRule[], tailwindRules: string) {
	let returnString = `:root {\n`;
	for (const line of lines) {
		for (const [k, v] of Object.entries(line)) {
			returnString += `\t--${k}: ${v};\n`;
		}
	}
	returnString += tailwindRules;
	returnString += "}\n";
	return returnString;
}
