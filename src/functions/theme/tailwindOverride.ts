import chroma from "chroma-js";
import type { InputTheme } from "../../types";

export function makeTailwindRules(theme: InputTheme) {
	let rules = `/* -- Tailwind Override -- */\n`;
	rules += tailwindNeutralScales(theme.color0, theme.color15);
	rules += tailwindIndex(theme.color1, 1);
	rules += tailwindIndex(theme.color2, 2);
	rules += tailwindIndex(theme.color3, 3);
	rules += tailwindIndex(theme.color4, 4);
	rules += tailwindIndex(theme.color5, 5);
	rules += tailwindIndex(theme.color6, 6);
	return rules;
}

function tailwindNeutralScales(color0: string, color15: string) {
	const scale = chroma
		.scale([color0, color15])
		.mode("lab")
		.domain([0, 11])
		.colors(11);
	return [
		tailwindRules("slate", scale),
		tailwindRules("gray", scale),
		tailwindRules("zinc", scale),
		tailwindRules("neutral", scale),
		tailwindRules("stone", scale),
	].join("\n");
}

function tailwindScale(color: string) {
	// 950 is darkest
	// 50 is lightest
	const midtone = chroma(color);
	const highlight = midtone.set("hsl.l", 0.95).set("hsl.s", 0.12);
	const shade = midtone.set("hsl.l", 0.05).set("hsl.s", 0.9);
	const scale = chroma
		.scale([highlight, midtone, shade])
		.mode("oklch")
		.colors(11);
	return scale;
}

function tailwindRules(baseColorOverride: string, scale: string[]) {
	let lines = `\n/* -- ${baseColorOverride} Override -- */\n--color-${baseColorOverride}-50: ${scale[0]};\n`;
	for (let i = 1; i < 10; i++) {
		lines += `--color-${baseColorOverride}-${i * 100}: ${scale[i]};\n`;
	}
	lines += `--color-${baseColorOverride}-950: ${scale[10]};\n`;
	return lines;
}

enum TailwindColors {
	red = "red",
	orange = "orange",
	amber = "amber",
	yellow = "yellow",
	lime = "lime",
	green = "green",
	emerald = "emerald",
	teal = "teal",
	cyan = "cyan",
	sky = "sky",
	blue = "blue",
	indigo = "indigo",
	violet = "violet",
	purple = "purple",
	fuschia = "fuschia",
	pink = "pink",
	rose = "rose",
}

function tailwindIndex(color: string, index: number) {
	const scale = tailwindScale(color);
	switch (index) {
		case 1: {
			// color1 is usually red
			return [
				tailwindRules(TailwindColors.red, scale),
				tailwindRules(TailwindColors.orange, scale),
				tailwindRules(TailwindColors.pink, scale),
				tailwindRules(TailwindColors.rose, scale),
			].join("\n");
		}
		case 2: {
			// color2 is usually green
			return [
				tailwindRules(TailwindColors.lime, scale),
				tailwindRules(TailwindColors.green, scale),
				tailwindRules(TailwindColors.emerald, scale),
			].join("\n");
		}
		case 3: {
			// color3 is usually yellow
			return [
				tailwindRules(TailwindColors.amber, scale),
				tailwindRules(TailwindColors.yellow, scale),
			].join("\n");
		}
		case 4: {
			// color4 is usually blue
			return [
				tailwindRules(TailwindColors.blue, scale),
				tailwindRules(TailwindColors.sky, scale),
				tailwindRules(TailwindColors.indigo, scale),
			].join("\n");
		}
		case 5: {
			// color5 is usually purple
			return [
				tailwindRules(TailwindColors.violet, scale),
				tailwindRules(TailwindColors.purple, scale),
				tailwindRules(TailwindColors.fuschia, scale),
			].join("\n");
		}
		case 6: {
			// color6 is usually teal/cyan
			return [
				tailwindRules(TailwindColors.teal, scale),
				tailwindRules(TailwindColors.cyan, scale),
			].join("\n");
		}
	}
}
